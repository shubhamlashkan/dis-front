import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Urls } from '../urls/urls';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var ComplaintsService = /** @class */ (function () {
    function ComplaintsService(http) {
        this.http = http;
        this.urls = new Urls();
        this.mainUrl = this.urls.mainurl;
        // private baseUrl = mainurl+'/dis/administrationn'
        this.baseUrl = "http://localhost:8080/dis/administration";
    }
    ComplaintsService.prototype.getRemainingCleanlinessComplaint = function () {
        return this.http.get(this.baseUrl + "/getRemainingCleanlinessComplaints");
    };
    ComplaintsService.prototype.getRemainingLEComplaints = function () {
        return this.http.get(this.baseUrl + "/getRemainingLEComplaints");
    };
    ComplaintsService.prototype.getRemainingCWNComplaints = function () {
        return this.http.get(this.baseUrl + "/getRemainingCWNComplaints");
    };
    ComplaintsService.prototype.getRemainingECCWComplaints = function () {
        return this.http.get(this.baseUrl + "/getRemainingECCWComplaints");
    };
    ComplaintsService.prototype.getRemainingOtherComplaints = function () {
        return this.http.get(this.baseUrl + "/getRemainingOtherComplaints");
    };
    ComplaintsService.prototype.getRemainingFacultyComplaints = function () {
        return this.http.get(this.baseUrl + "/getRemainingFacultyComplaints");
    };
    ComplaintsService.prototype.getRemainingStudentComplaints = function () {
        return this.http.get(this.baseUrl + "/getRemainingStudentComplaints");
    };
    ComplaintsService.prototype.getRemainingEMRSComplaints = function () {
        return this.http.get(this.baseUrl + "/getRemainingEMRSComplaints");
    };
    ComplaintsService.prototype.getRemainingTelephoneComplaints = function () {
        return this.http.get(this.baseUrl + "/getRemainingTelephoneComplaints");
    };
    //Resolved Complaints
    ComplaintsService.prototype.getResolvedCleanlinessComplaint = function () {
        return this.http.get(this.baseUrl + "/getResolvedCleanlinessComplaints");
    };
    ComplaintsService.prototype.getResolvedLEComplaints = function () {
        return this.http.get(this.baseUrl + "/getResolvedLEComplaints");
    };
    ComplaintsService.prototype.getResolvedCWNComplaints = function () {
        return this.http.get(this.baseUrl + "/getResolvedCWNComplaints");
    };
    ComplaintsService.prototype.getResolvedECCWComplaints = function () {
        return this.http.get(this.baseUrl + "/getResolvedECCWComplaints");
    };
    ComplaintsService.prototype.getResolvedOtherComplaints = function () {
        return this.http.get(this.baseUrl + "/getResolvedOtherComplaints");
    };
    ComplaintsService.prototype.getResolvedFacultyComplaints = function () {
        return this.http.get(this.baseUrl + "/getResolvedFacultyComplaints");
    };
    ComplaintsService.prototype.getResolvedStudentComplaints = function () {
        return this.http.get(this.baseUrl + "/getResolvedStudentComplaints");
    };
    ComplaintsService.prototype.getResolvedEMRSComplaints = function () {
        return this.http.get(this.baseUrl + "/getResolvedEMRSComplaints");
    };
    ComplaintsService.prototype.getResolvedTelephoneComplaints = function () {
        return this.http.get(this.baseUrl + "/getResolvedTelephoneComplaints");
    };
    //Total Complaints
    ComplaintsService.prototype.getTotalCleanlinessComplaint = function () {
        return this.http.get(this.baseUrl + "/getTotalCleanlinessComplaints");
    };
    ComplaintsService.prototype.getTotalLEComplaints = function () {
        return this.http.get(this.baseUrl + "/getTotalLEComplaints");
    };
    ComplaintsService.prototype.getTotalCWNComplaints = function () {
        return this.http.get(this.baseUrl + "/getTotalCWNComplaints");
    };
    ComplaintsService.prototype.getTotalECCWComplaints = function () {
        return this.http.get(this.baseUrl + "/getTotalECCWComplaints");
    };
    ComplaintsService.prototype.getTotalOtherComplaints = function () {
        return this.http.get(this.baseUrl + "/getTotalOtherComplaints");
    };
    ComplaintsService.prototype.getTotalFacultyComplaints = function () {
        return this.http.get(this.baseUrl + "/getTotalFacultyComplaints");
    };
    ComplaintsService.prototype.getTotalStudentComplaints = function () {
        return this.http.get(this.baseUrl + "/getTotalStudentComplaints");
    };
    ComplaintsService.prototype.getTotalEMRSComplaints = function () {
        return this.http.get(this.baseUrl + "/getTotalEMRSComplaints");
    };
    ComplaintsService.prototype.getTotalTelephoneComplaints = function () {
        return this.http.get(this.baseUrl + "/getTotalTelephoneComplaints");
    };
    //My Complaints
    ComplaintsService.prototype.getMyCleanlinessComplaint = function () {
        return this.http.get(this.baseUrl + "/getMyCleanlinessComplaints");
    };
    ComplaintsService.prototype.getMyLEComplaints = function () {
        return this.http.get(this.baseUrl + "/getMyLEComplaints");
    };
    ComplaintsService.prototype.getMyOtherComplaints = function () {
        return this.http.get(this.baseUrl + "/getMyOtherComplaints");
    };
    ComplaintsService.prototype.getMyFacultyComplaints = function () {
        return this.http.get(this.baseUrl + "/getMyFacultyComplaints");
    };
    ComplaintsService.prototype.getMyStudentComplaints = function () {
        return this.http.get(this.baseUrl + "/getMyStudentComplaints");
    };
    // add complaints (post services)
    ComplaintsService.prototype.addACleanlinessComplaint = function (info) {
        return this.http.post(this.baseUrl + "/addCleanlinessComplaint", info, httpOptions);
    };
    ComplaintsService.prototype.addOtherComplaint = function (info) {
        return this.http.post(this.baseUrl + "/addOtherComplaint", info, httpOptions);
    };
    ComplaintsService.prototype.addLeComplaint = function (info) {
        return this.http.post(this.baseUrl + "/addLEComplaint", info, httpOptions);
    };
    ComplaintsService.prototype.addStudentComplaint = function (info) {
        return this.http.post(this.baseUrl + "/addStudentComplaint", info, httpOptions);
    };
    ComplaintsService.prototype.addFacultyComplaint = function (info) {
        return this.http.post(this.baseUrl + "/addFacultyComplaint", info, httpOptions);
    };
    ComplaintsService.prototype.addCWNComplaint = function (info) {
        return this.http.post(this.baseUrl + "/addCWNComplaint", info, httpOptions);
    };
    ComplaintsService.prototype.addEccwComplaint = function (info) {
        return this.http.post(this.baseUrl + "/addECCWComplaint", info, httpOptions);
    };
    ComplaintsService.prototype.addEmrsCompaint = function (info) {
        return this.http.post(this.baseUrl + "/addEMRSComplaint", info, httpOptions);
    };
    ComplaintsService.prototype.addTelephoneComplaint = function (info) {
        return this.http.post(this.baseUrl + "/addTelephoneComplaint", info, httpOptions);
    };
    //get complaints counts
    ComplaintsService.prototype.getRemainingComplaintCount = function () {
        return this.http.get(this.baseUrl + "/getRemainingComplaintsCount");
    };
    ComplaintsService.prototype.getResolvedComplaintCount = function () {
        return this.http.get(this.baseUrl + "/getResolvedComplaintsCount");
    };
    ComplaintsService.prototype.getTotalComplaintCount = function () {
        return this.http.get(this.baseUrl + "/getTotalComplaintsCount");
    };
    ComplaintsService.prototype.getMyComplaintCount = function () {
        return this.http.get(this.baseUrl + "/getMyComplaintsCount");
    };
    //get permission 
    ComplaintsService.prototype.getPermissions = function () {
        return this.http.get(this.baseUrl + "/addComplaintPermission");
    };
    ComplaintsService.prototype.getLocation = function () {
        return this.http.get('http://localhost:8080/dis/infrastructure/getLocationDropDown');
    };
    //add faculty resource
    ComplaintsService.prototype.addFacultyResource = function (info) {
        return this.http.post('http://localhost:8080/dis/administration/addFacultyResourceRequest', info, httpOptions);
    };
    ComplaintsService.prototype.editComplaints = function (info) {
        return this.http.put(this.baseUrl + "/editComplaint", info, httpOptions);
    };
    ComplaintsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ComplaintsService);
    return ComplaintsService;
}());
export { ComplaintsService };
//# sourceMappingURL=complaints.service.js.map