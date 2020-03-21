import * as tslib_1 from "tslib";
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthInterceptor } from './authentication/auth-interceptor';
import { StaffModule } from './staff/staff.module';
import { StudentRoutingModule } from './student/student-routing.module';
import { StudentModule } from './student/student.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyModule } from './faculty/faculty.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HodRoutingModule } from './hod/hod-routing.module';
import { HodModule } from './hod/hod.module';
import { ToastrModule } from 'ng6-toastr-notifications';
import { ConventionalModule } from './conventional/conventional.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { MatTableModule, MatSortModule } from '@angular/material';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
            ],
            imports: [
                AuthenticationModule,
                BrowserModule,
                BrowserAnimationsModule,
                AppRoutingModule,
                StudentModule,
                HttpClientModule,
                StudentRoutingModule,
                HodRoutingModule,
                HodModule,
                FacultyModule,
                StaffModule,
                MiscellaneousModule,
                ToastrModule.forRoot(),
                ConventionalModule,
                InfrastructureModule,
                FormsModule,
                MatTableModule,
                MatSortModule
            ],
            providers: [AuthInterceptor,
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map