import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DocumentsService } from 'src/app/API_Service/documents.service';
var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent(documents) {
        this.documents = documents;
        this.getFolderInSection = [];
        this.getSubfolderInSection = [];
    }
    //sectionId:number[]=[]; we can store sectionId's in this but they will not be in use as when we got outside of  this.getSectionData=this.documents.getSections() 
    //value get automatically assigned to undefined
    DocumentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSectionData = this.documents.getSections()
            .subscribe(function (data) {
            _this.getSectionInfo = data;
            console.log(_this.getSectionInfo);
            for (var a = 0; a < _this.getSectionInfo.length; a++) {
                _this.getFolderSectionData = _this.documents.getFolderInSection(_this.getSectionInfo[a].id)
                    .subscribe(function (data) {
                    _this.getFolderInSection.push(data);
                    console.log(_this.getFolderInSection);
                });
                for (var b = 0; b < _this.getFolderInSection.length; b++) {
                    for (var c = 0; c < _this.getFolderInSection[b].length; c++) {
                        _this.getSubfolderInSectionData = _this.documents.getSubFolderInFolder(_this.getSectionInfo[a].id, _this.getFolderInSection[b][c])
                            .subscribe(function (data) {
                            console.log(data);
                        });
                    }
                }
            }
        });
        //ngOnInit ends
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], DocumentsComponent.prototype, "getSectionData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], DocumentsComponent.prototype, "getFolderSectionData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], DocumentsComponent.prototype, "getSubfolderInSectionData", void 0);
    DocumentsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-documents',
            templateUrl: './documents.component.html',
            styleUrls: ['./documents.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DocumentsService])
    ], DocumentsComponent);
    return DocumentsComponent;
}());
export { DocumentsComponent };
//# sourceMappingURL=documents.component.js.map