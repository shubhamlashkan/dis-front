import { Urls } from "./urls";

export class apiSetting{

    // public static apiAcademics =  Urls.academics;
    // public static apiAdministration=Urls.administration ;
    // public static apiUser =Urls.gatewayUrl ;
    // public static apiInfrastructure =Urls.infrastructure;
    // public static apiGateway =Urls.gatewayUrl;
    // public static apiMoodle =Urls.moodle;
    //Development Url:-
    // public static apiAcademics =  Urls.backendUrl +":8082";
    // public static apiAdministration=Urls.backendUrl +":8083";
    // public static apiUser =Urls.userUrl+ ':8081';
    // public static apiInfrastructure =Urls.backendUrl + ':8084';
    // public static apiGateway =Urls.gatewayUrl+':8080';
    // public static apiMoodle =Urls.moodle+':8087';

   //Server Url:-
    public static apiAcademics =  Urls.backendUrl +"/dis/academics";
    public static apiAdministration=Urls.backendUrl +"/dis/administration";
    public static apiUser =Urls.backendUrl + '/dis/user';
    public static apiInfrastructure =Urls.backendUrl + '/dis/infrastructure';
    public static apiMoodle=Urls.backendUrl + '/dis/moodle';
    public static apiGateway =Urls.backendUrl;

public static apieureka =Urls.backendUrl+ ':8761';
}

