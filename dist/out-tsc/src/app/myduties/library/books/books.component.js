import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibraryService } from 'src/app/API_Service/library.service';
import { addBookData } from '../bookDataObj';
var BooksComponent = /** @class */ (function () {
    function BooksComponent(service) {
        this.service = service;
    }
    BooksComponent.prototype.ngOnInit = function () {
    };
    // onSubmit(form:NgForm){
    // console.log(form);
    // }
    BooksComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.addBookForm);
        this.Book = new addBookData();
        this.Book.authorName = this.addBookForm.value.addBookData.authorName;
        this.Book.edition = this.addBookForm.value.addBookData.edition;
        this.Book.isbn = this.addBookForm.value.addBookData.isbnNo;
        this.Book.noOfPages = this.addBookForm.value.addBookData.noOfPages;
        this.Book.price = this.addBookForm.value.addBookData.price;
        this.Book.publisherAndPlace = this.addBookForm.value.addBookData.publisher;
        this.Book.purchaseDate = this.addBookForm.value.addBookData.purchasedOn;
        this.Book.remarks = this.addBookForm.value.addBookData.remarks;
        this.Book.subjectCategory = this.addBookForm.value.addBookData.subjectCategory;
        this.Book.title = this.addBookForm.value.addBookData.title;
        this.Book.yearOfPublication = this.addBookForm.value.addBookData.publicationYear;
        console.log(this.service.addBookDetails(this.Book));
        this.service.addBookDetails(this.Book).subscribe(function (res) {
            _this.responseAdd = res;
            console.log(_this.responseAdd.bookId);
            _this.data = _this.responseAdd.bookId + '-' + _this.responseAdd.message;
        });
    };
    tslib_1.__decorate([
        ViewChild('f'),
        tslib_1.__metadata("design:type", NgForm)
    ], BooksComponent.prototype, "addBookForm", void 0);
    BooksComponent = tslib_1.__decorate([
        Component({
            selector: 'app-books',
            templateUrl: './books.component.html',
            styleUrls: ['./books.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [LibraryService])
    ], BooksComponent);
    return BooksComponent;
}());
export { BooksComponent };
//# sourceMappingURL=books.component.js.map