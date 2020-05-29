import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TelephoneComplaintForm } from './complaint-report-interfaces/telephone-complaint-form';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { EmrComplaintForm } from './complaint-report-interfaces/emr-complaint-form';
import { EccwComplaintForm } from './complaint-report-interfaces/eccw-complaint-form';
import { CwnComplaintForm } from './complaint-report-interfaces/cwn-complaint-form';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
import { ComplaintReportForm } from './complaint-report-interfaces/complaint-report-form';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-download-complaint-report',
  templateUrl: './download-complaint-report.component.html',
  styleUrls: ['./download-complaint-report.component.scss']
})

export class DownloadComplaintReportComponent implements OnInit {
  constructor(private complaintService: ComplaintsService, private toastr : ToastrManager) { }
  complaintForm: FormGroup;
  telephoneComplaints: TelephoneComplaintForm[] = [];
  emrComplaints: EmrComplaintForm[] = [];
  cwnComplaints: CwnComplaintForm[] = [];
  eccwComplaints : EccwComplaintForm[] = [];
  locations: string[] = [
    "Software Engineering Lab",
    "Data Science Lab",
    "IoT & Embedded Systems Lab",
    "Cluster Computing Lab",
    "Computer Networks & Distributed Computing Lab",
    "General Computing Lab",
    "Hardware & Peripherals Lab",
    "Project & Research Lab",
    "Audio Visual Learning Center",
    "217",
    "LT-201",
    "LT-301"
  ]

  complaintTypes: string[] = [
    "CWN",
    "EMR",
    "ECCW",
    "TELEPHONE"
  ]
  ngOnInit() {
    this.complaintForm = new FormGroup({
      location: new FormControl(""),
      createdDate: new FormControl(),
      complaintType: new FormControl()
    })


  }

  onSubmit(): void {
    var value: ComplaintReportForm = this.complaintForm.value;
    var complaintType = this.complaintForm.value.complaintType;
    var documentDefinition;
    switch (complaintType) {
      case "TELEPHONE":
        this.complaintService.getTelephoneComplaintDownloadReport(value.complaintType, value.createdDate, value.location)
        .subscribe(
          data=>{
              this.telephoneComplaints = data;
              console.log(this.telephoneComplaints)
              if(this.telephoneComplaints.length===0){ 
                this.toastr.infoToastr("No telephone complaint on date : "+value.createdDate+".");
              }
              else{
              documentDefinition = this.getTelephoneComplaintDocumentDefinition();
              pdfMake.createPdf(documentDefinition).download("ComplaintReport.pdf");
            }
          }
        )
        break;
      case "EMR":
        this.complaintService.getComplaintDownloadReport(value.complaintType, value.createdDate, value.location)
          .subscribe(
            data => {
              this.emrComplaints = data;
              console.log(this.emrComplaints)
              if(this.emrComplaints.length === 0 ){
                this.toastr.infoToastr("No EMR complaint on date : "+value.createdDate+".")
              }
              else{
                documentDefinition = this.getEMRComplaintDocumentDefinition();
                pdfMake.createPdf(documentDefinition).download("ComplaintReport.pdf");
              }
            }
          )
        break;
      case "ECCW":
        this.complaintService.getComplaintDownloadReport(value.complaintType, value.createdDate, value.location)
        .subscribe(
          data => {
            this.eccwComplaints = data;
            console.log(this.eccwComplaints);
            if(this.eccwComplaints.length === 0){
              this.toastr.infoToastr("No ECCW complaint on date : "+value.createdDate+".")
            }
            else{
            documentDefinition = this.getECCWComplaintDocumentDefinition();
            pdfMake.createPdf(documentDefinition).download("ComplaintReport.pdf");
            }
          }
        )
        break;
      case "CWN":
        this.complaintService.getComplaintDownloadReport(value.complaintType, value.createdDate, value.location)
        .subscribe(
          data => {
            this.cwnComplaints = data;
            console.log(this.cwnComplaints)
            if(this.cwnComplaints.length === 0){
              this.toastr.infoToastr("No CWN complaint on date : "+value.createdDate+".");
            }
            else{
            documentDefinition = this.getCwnComplaintDocumentDefinition();
            pdfMake.createPdf(documentDefinition).download("ComplaintReport.pdf");
            }
          }
        )
        break;
    }

  }

  getTelephoneComplaintDocumentDefinition() {
    return {
      content: [
        {
          text: 'Shri G.S Institute of Technology & Science, Indore',
          style: 'header'
        },
        {
          text: 'Telephone Complaint',
          style: 'complaintName'
        },
        {
          style: 'tableMargin',
          table: {
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
            body: [
              [{
                text: 'S.No',
                style: 'tableHeader'
              },
              {
                text: 'Extension No.',
                style: 'tableHeader'
              },
              {
                text: 'Location(Department/Section)',
                style: 'tableHeader'
              },
              {
                text: 'Complaint Description',
                style: 'tableHeader'
              },
              {
                text: 'Date at which complaint submitted',
                style: 'tableHeader',
              },
              {
                text: 'Date at which complaint solved',
                style: 'tableHeader'
              }],
              ...this.telephoneComplaints.map(
                complaint => {
                  return [complaint.sno,
                  complaint.extensionNo,
                  complaint.location,
                  complaint.details,
                  complaint.createdDate,
                  complaint.dateOfResolution];
                }
              )
            ]
          }
        },
        {
          text: 'HEAD',
          style: 'alignRight'
        },
        {
          text: 'Department of Computer Engineering',
          style: 'alignRight',
          margin: [0, 0, 0, 40]
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0, y1: 20,
              x2: 525, y2: 20,
              dash: { length: 5 },
            }
          ]
        },
        {
          text: 'Receipt',
          alignment: 'center',
          fontSize: 15,
          bold: true,
          decoration: 'underline',
          margin: [0, 20, 0, 20]
        },
        {
          text: 'Complaint related to extension number - ',
          margin: [0, 0, 0, 10]
        },
        {
          text: 'Complaint received on - '
        }
      ],
      styles: {
        header: {
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        complaintName: {
          bold: true,
          fontSize: 12,
          alignment: 'center',
          decoration: 'underline',
          margin: [0, 0, 0, 20]
        },
        tableHeader: {
          fontSize: 14,
        },
        alignRight: {
          alignment: 'right'
        },
        tableMargin: {
          margin: [0, 0, 0, 40]
        }
      }
    }
  }

  getEMRComplaintDocumentDefinition() {
    return {
      content: [
        {
          text: 'Shri G.S Institute of Technology & Science, Indore',
          style: 'header'
        },
        {
          text: 'Electrical Maintnance and Repairs Section',
          style: 'complaintName',
          margin: [0, 0, 0, 20]
        },
        {
          alignment: 'justify',
          margin: [0, 0, 0, 20],
          columns: [
            {
              text: 'Date : ',
            },
            {
              text: 'Time : ',
            }
          ]
        },
        {
          text: 'Name of Department/Place : ',
          margin: [0, 0, 0, 10]
        },
        {
          style: 'tableMargin',
          table: {
            widths: ['auto', 'auto', '*'],
            body: [
              [{
                text: 'S.No',
                style: 'tableHeader'
              },
              {
                text: 'Detail/Complaint',
                style: 'tableHeader'
              },
              {
                text: 'Location(Department/Section)',
                style: 'tableHeader'
              }],
              ...this.emrComplaints.map(
                complaint => {
                  return [complaint.sno,
                  complaint.location,
                  complaint.details]
                }
              )
            ]
          }
        },
        {
          alignment: 'justify',
          margin: [0, 0, 0, 20],
          columns: [
            {
              text: 'Signature of HOD : '
            },
            {
              text: 'Signature of Member : '
            }
          ]
        },
        {
          alignment: 'justify',
          margin: [0, 0, 0, 20],
          columns: [
            {
              text: 'Complaint No. : ',
            },
            {
              text: 'Date : '
            },
            {
              text: 'Time : '
            }
          ]
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0, y1: 20,
              x2: 525, y2: 20,
              dash: { length: 5 },
            }
          ]
        },
        {
          text: 'Receipt',
          alignment: 'center',
          fontSize: 15,
          bold: true,
          decoration: 'underline',
          margin: [0, 20, 0, 20]
        },
        {
          text: 'Received a Complaint No. : ',
          margin: [0, 0, 0, 10]
        },
        {
          text: 'Date : ',
          margin: [0, 0, 0, 20]
        },
        {
          alignment: 'right',
          text: 'Receiver Signature Electrical M&R Section',
          margin: [0, 0, 0, 20]
        },
        {
          text: 'For use of Electrical M&R Section : ',
          bold: 'true',
          margin: [0, 0, 0, 20]
        },
        {
          table: {
            widths: ['auto', 'auto', '*'],
            heights: [20, 20, 20, 70, 20, 20],
            body: [
              ['1.', 'Serial number of complaint in Register & Date', ''],
              ['2.', 'Name of Worker whom work is allotted', ''],
              ['3.', 'Name of Supervisor', ''],
              ['4.', 'Material required', ''],
              ['5.', 'Date of Completion of work', ''],
              ['6.', "Supervisor's report", '']
            ]
          },
          margin: [0, 0, 0, 10]
        }
      ],
      styles: {
        header: {
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        complaintName: {
          bold: true,
          fontSize: 12,
          alignment: 'center',
          decoration: 'underline',
          margin: [0, 0, 0, 20]
        },
        tableHeader: {
          fontSize: 14,
        },
        alignRight: {
          alignment: 'right'
        },
        tableMargin: {
          margin: [0, 0, 0, 40]
        }
      }
    }
  }

  getECCWComplaintDocumentDefinition() {
    return {
      content: [
        {
          text: 'Shri G.S Institute of Technology & Science, Indore',
          style: 'header'
        },
        {
          text: 'Engineering Cell/Central Workshop',
          style: 'complaintName',
          margin: [0, 0, 0, 20]
        },
        {
          text: '(A) Indent for Civil Maintenance and Central Workshop Related Work',
          bold: 'true',
          margin: [0, 0, 0, 20]
        },
        {
          alignment: 'justify',
          margin: [0, 0, 0, 20],
          columns: [
            {
              text: 'No.:Comp. Engg./2020/ : ',
            },
            {
              text: 'Date : ',
            }
          ]
        },
        {
          columns: [
            {
              text: 'Name of Department/Place : '
            },
            {
              text: 'Department of Computer Engineering',
              decoration: 'underline',
              bold: 'true'
            }
          ],
          margin: [0, 0, 0, 10]
        },
        {
          style: 'tableMargin',
          table: {
            widths: ['auto', 'auto', '*'],
            body: [
              [{
                text: 'S.No',
                style: 'tableHeader'
              },
              {
                text: 'Detail/Complaint',
                style: 'tableHeader'
              },
              {
                text: 'Location(Department/Section)',
                style: 'tableHeader'
              }],
              ...this.eccwComplaints.map(
                complaint => {
                  return [complaint.sno,
                  complaint.location,
                  complaint.details]
                }
              )
            ]
          }
        },
        {
          alignment: 'justify',
          margin: [0, 0, 0, 20],
          columns: [
            {
              text: 'Signature and approval of the HOD : '
            },
            {
              text: 'Signature of Staff members : ',
            },
          ]
        },
        {
          alignment: 'justify',
          margin: [0, 0, 0, 20],
          columns: [
            {
              text: ''
            },
            {
              text: 'Name : ',
            },
          ]
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0, y1: 20,
              x2: 525, y2: 20,
              lineWidth: 1
            }
          ]
        },
        {
          text: '(B) For : Use of Engineering Cell',
          bold: true,
          margin: [0, 20, 0, 20]
        },
        {
          table: {
            widths: ['auto', 'auto', '*'],
            body: [
              ['1', 'Serial number of complaint register and date', ''],
              ['2', 'Name of Worker(s) whom work is alloted', ''],
              ['3', 'Name of supervisor', ''],
              ['4', 'Material required', ''],
              ['5', 'Date of completion of work', ''],
              ['6', "Supervisor's report", '']
            ]
          }
        }
      ],
      styles: {
        header: {
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        complaintName: {
          bold: true,
          fontSize: 12,
          alignment: 'center',
          decoration: 'underline',
          margin: [0, 0, 0, 20]
        },
        tableHeader: {
          fontSize: 14,
        },
        alignRight: {
          alignment: 'right'
        },
        tableMargin: {
          margin: [0, 0, 0, 40]
        }
      }
    }
  }

  getCwnComplaintDocumentDefinition() {
    return {
      content: [
        {
          text: 'Shri G.S Institute of Technology & Science, Indore',
          style: 'header'
        },
        {
          text: 'CWN Maintenance',
          style: 'complaintName',
          margin: [0, 0, 0, 20]
        },
        {
          alignment: 'justify',
          margin: [0, 0, 0, 20],
          columns: [
            {
              text: 'Date : ',
            },
            {
              text: 'Time : ',
            }
          ]
        },
        {
          text: 'Name of Department/Place : ',
          margin: [0, 0, 0, 10]
        },
        {
          style: 'tableMargin',
          table: {
            widths: ['auto', 'auto', '*'],
            body: [
              [{
                text: 'S.No',
                style: 'tableHeader'
              },
              {
                text: 'Detail/Complaint',
                style: 'tableHeader'
              },
              {
                text: 'Location(Department/Section)',
                style: 'tableHeader'
              }],
              ...this.cwnComplaints.map(
                complaint => {
                  return [complaint.sno,
                  complaint.location,
                  complaint.details]
                }
              )
            ]
          }
        },
        {
          alignment: 'justify',
          margin: [0, 0, 0, 20],
          columns: [
            {
              text: 'Signature of HOD : '
            },
            {
              text: 'Signature of Member : '
            }
          ]
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0, y1: 20,
              x2: 525, y2: 20,
              dash: { length: 5 }
            }
          ],
          margin: [0, 0, 0, 10]
        },
        {
          text: 'For CWN use',
          bold: 'true',
          decoration: 'underline',
          margin: [0, 0, 0, 10]
        },
        {
          table: {
            widths: ['auto', '*'],
            heights: [20, 70],
            body: [
              ['Problem Identified', ''],
              ['Material required(if any)', ''],
            ]
          },
          margin: [0, 0, 0, 10]
        },
        {
          text: 'Signature of Network Engineer',
          bold: 'true',
          margin: [0, 0, 0, 10]
        },
        {
          table: {
            widths: ['auto', '*'],
            heights: [70],
            body: [
              ['Report of CWN(if any)', ''],
            ]
          },
          margin: [0, 0, 0, 10]
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0, y1: 20,
              x2: 525, y2: 20,
              dash: { length: 5 }
            }
          ],
          margin: [0, 0, 0, 10]
        },
        {
          text: 'Status of Reported Problem',
          alignment: 'center',
          fontSize: 15,
          bold: true,
          decoration: 'underline',
          margin: [0, 20, 0, 20]
        },
        {
          text: 'Complaint resolved on Date and Time : ',
          margin: [0, 0, 0, 10]
        },
        {
          text: 'Remarks(if any) : ',
          margin: [0, 0, 0, 20]
        },
        {
          alignment: 'right',
          text: 'Signature & Seal of Department',
          bold: 'true'
        }
      ],
      styles: {
        header: {
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        complaintName: {
          bold: true,
          fontSize: 12,
          alignment: 'center',
          decoration: 'underline',
          margin: [0, 0, 0, 20]
        },
        tableHeader: {
          fontSize: 14,
        },
        alignRight: {
          alignment: 'right'
        },
        tableMargin: {
          margin: [0, 0, 0, 40]
        }
      }
    }
  }
}
