import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-html-downloader',
  templateUrl: './html-downloader.component.html',
  styleUrls: ['./html-downloader.component.scss']
})
export class HtmlDownloaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let getCanvas;
    $('head').append('<script src= "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>');
    $('head').append('<script src="https://files.codepedia.info/files/uploads/iScripts/html2canvas.js"></script>');
    $(document).ready(function() {
    const element = $('#html-content-holder'); // global variable

    $('#btn-Preview-Image').on('click', function () {
      html2canvas(element.get(0)).then( function (canvas) {
        $('#previewImage').append(canvas);
        getCanvas = canvas;
     });
      });

    $('#btn-Convert-Html2Image').on('click', function () {
      const imgageData = getCanvas.toDataURL('image/png');
      // Now browser starts downloading it instead of just showing it
      const newData = imgageData.replace(/^data:image\/png/, 'data:application/octet-stream');
      $('#btn-Convert-Html2Image').attr('download', 'download.png').attr('href', newData);
    });
  });
  }
}
