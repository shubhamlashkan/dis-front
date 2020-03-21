import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as $ from 'jquery';
import * as html2canvas from 'html2canvas';
var HtmlDownloaderComponent = /** @class */ (function () {
    function HtmlDownloaderComponent() {
    }
    HtmlDownloaderComponent.prototype.ngOnInit = function () {
        var getCanvas;
        $('head').append('<script src= "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>');
        $('head').append('<script src="https://files.codepedia.info/files/uploads/iScripts/html2canvas.js"></script>');
        $(document).ready(function () {
            var element = $('#html-content-holder'); // global variable
            $('#btn-Preview-Image').on('click', function () {
                html2canvas(element.get(0)).then(function (canvas) {
                    $('#previewImage').append(canvas);
                    getCanvas = canvas;
                });
            });
            $('#btn-Convert-Html2Image').on('click', function () {
                var imgageData = getCanvas.toDataURL('image/png');
                // Now browser starts downloading it instead of just showing it
                var newData = imgageData.replace(/^data:image\/png/, 'data:application/octet-stream');
                $('#btn-Convert-Html2Image').attr('download', 'download.png').attr('href', newData);
            });
        });
    };
    HtmlDownloaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-html-downloader',
            templateUrl: './html-downloader.component.html',
            styleUrls: ['./html-downloader.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HtmlDownloaderComponent);
    return HtmlDownloaderComponent;
}());
export { HtmlDownloaderComponent };
//# sourceMappingURL=html-downloader.component.js.map