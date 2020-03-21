import * as tslib_1 from "tslib";
import { RouterModule } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './books/books.component';
import { ThesisComponent } from './thesis/thesis.component';
import { NgModule } from "@angular/core";
var routes = [
    {
        path: "library",
        component: LibraryComponent
    },
    {
        path: "books",
        component: BooksComponent
    },
    {
        path: "thesis",
        component: ThesisComponent
    }
];
var LibraryRoutingModule = /** @class */ (function () {
    function LibraryRoutingModule() {
    }
    LibraryRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], LibraryRoutingModule);
    return LibraryRoutingModule;
}());
export { LibraryRoutingModule };
//# sourceMappingURL=library-routing.module.js.map