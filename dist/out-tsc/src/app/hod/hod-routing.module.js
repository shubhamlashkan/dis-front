import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HodComponent } from './hod/hod.component';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RequestsComponent } from './requests/requests.component';
import { TimetableComponent } from './timetable/timetable.component';
import { StudentComponent } from './student/student.component';
import { DocumentsComponent } from './documents/documents.component';
import { ToDoComponent } from './to-do/to-do.component';
import { AboutModule } from '../about/about.module';
import { AboutComponent } from '../about/about/about.component';
import { GalleryComponent } from './footer/gallery/gallery.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { InfrastructureOutletComponent } from '../infrastructure/infrastructure-outlet/infrastructure-outlet.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { ProfileComponent } from '../conventional/profile/profile.component';
import { ConventionalModule } from '../conventional/conventional.module';
var routes = [
    { path: 'head',
        component: HodComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'student',
                component: StudentComponent
            },
            {
                path: 'hod_about',
                component: AboutComponent,
                loadChildren: function () { return AboutModule; }
            },
            {
                path: 'documents',
                component: DocumentsComponent
            },
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'to-do',
                component: ToDoComponent
            },
            {
                path: 'hod_tasks',
                component: AdministrationComponent
            },
            {
                path: 'faculty',
                component: FacultyComponent
            },
            {
                path: 'infrastructure',
                component: InfrastructureOutletComponent,
                loadChildren: function () { return InfrastructureModule; }
            },
            {
                path: 'requests',
                component: RequestsComponent
            },
            {
                path: 'timetable',
                component: TimetableComponent
            },
            {
                path: 'gallery',
                component: GalleryComponent
            },
            {
                path: 'meetings',
                component: MeetingsComponent
            },
            {
                path: 'complaints',
                //component:ComplaintsComponent,
                loadChildren: '../complaints/complaints.module#ComplaintsModule'
            },
            {
                path: 'profile',
                component: ProfileComponent,
                loadChildren: function () { return ConventionalModule; }
            },
        ]
    }
];
var HodRoutingModule = /** @class */ (function () {
    function HodRoutingModule() {
    }
    HodRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], HodRoutingModule);
    return HodRoutingModule;
}());
export { HodRoutingModule };
//# sourceMappingURL=hod-routing.module.js.map