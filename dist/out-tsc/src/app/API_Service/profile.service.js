import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080/dis/user";
    }
    ProfileService.prototype.getProfileInfo = function (id, userType) {
        return this.http.get(this.baseUrl + "/staffBasicProfile?id=" + id + "&userType=" + userType);
    };
    ProfileService.prototype.getStudentProfileInfo = function (id, userType) {
        return this.http.get(this.baseUrl + "/studentBasicProfile?id=" + id + "&userType=" + userType);
    };
    ProfileService.prototype.getWorkExperienceInfo = function (id) {
        return this.http.get(this.baseUrl + "/userWorkExperience?id=" + id);
    };
    ProfileService.prototype.getUserQualificationInfo = function (id) {
        return this.http.get(this.baseUrl + "/userQualification?id=" + id);
    };
    ProfileService.prototype.getUserResearchWorkInfo = function (id) {
        return this.http.get(this.baseUrl + "/userResearchWork?id=" + id);
    };
    ProfileService.prototype.getUserInternshipInfo = function (id) {
        return this.http.get(this.baseUrl + "/userInternship?id=" + id);
    };
    ProfileService.prototype.getUserProjectInfo = function (id) {
        return this.http.get(this.baseUrl + "/userProject?id=" + id);
    };
    ProfileService.prototype.getUserCompetitiveExamInfo = function (id) {
        return this.http.get(this.baseUrl + "/userCompetitiveExams?id=" + id);
    };
    ProfileService.prototype.getUserCulturalActivityInfo = function (id) {
        return this.http.get(this.baseUrl + "/userCulturalActivityAchievements?id=" + id);
    };
    ProfileService.prototype.getUserTechnicalActivityInfo = function (id) {
        return this.http.get(this.baseUrl + "/userTechnicalActivity?id=" + id);
    };
    ProfileService.prototype.getUserAddressInfo = function (id) {
        return this.http.get(this.baseUrl + "/userAddress?id=" + id);
    };
    ProfileService.prototype.getFacultyStaffList = function () {
        return this.http.get(this.baseUrl + "/facultyData");
    };
    ProfileService.prototype.getStaffList = function () {
        return this.http.get(this.baseUrl + "/staffData");
    };
    //add service
    ProfileService.prototype.editStaffProfile = function (info) {
        return this.http.put(this.baseUrl + "/editStaffBasicProfile", info, httpOptions);
    };
    ProfileService.prototype.editStudentProfile = function (info) {
        return this.http.put(this.baseUrl + "/editStudentBasicProfile", info, httpOptions);
    };
    ProfileService.prototype.editUserAddress = function (info) {
        return this.http.put(this.baseUrl + "/editUserAddress", info, httpOptions);
    };
    ProfileService.prototype.editWorkExperience = function (info) {
        return this.http.put(this.baseUrl + "/editUserWorkExperience", info, httpOptions);
    };
    ProfileService.prototype.editPublication = function (info) {
        return this.http.put(this.baseUrl + "/editUserResearchWork", info, httpOptions);
    };
    ProfileService.prototype.editInternship = function (info) {
        return this.http.put(this.baseUrl + "/editUserInternship", info, httpOptions);
    };
    ProfileService.prototype.editCompetitive = function (info) {
        return this.http.put(this.baseUrl + "/editUserCompetitiveExams", info, httpOptions);
    };
    ProfileService.prototype.editProjects = function (info) {
        return this.http.put(this.baseUrl + "/editUserProjec", info, httpOptions);
    };
    ProfileService.prototype.editTechnical = function (info) {
        return this.http.put(this.baseUrl + "/editUserTechnicalActivity", info, httpOptions);
    };
    ProfileService.prototype.editCultural = function (info) {
        return this.http.put(this.baseUrl + "/editUserCulturalActivityAchievements", info, httpOptions);
    };
    ProfileService.prototype.editEducation = function (info) {
        return this.http.put(this.baseUrl + "/editUserQualification", info, httpOptions);
    };
    ProfileService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProfileService);
    return ProfileService;
}());
export { ProfileService };
//# sourceMappingURL=profile.service.js.map