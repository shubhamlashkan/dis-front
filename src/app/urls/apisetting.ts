import { Urls } from "./urls";

export class apiSetting{


public static apiAcademics =  Urls.backendUrl +":8082";
public static apiAdministration=Urls.backendUrl +":8083";
public static apiUser =Urls.gatewayUrl+ ':8081';
public static apiInfrastructure =Urls.backendUrl + ':8084';
public static apiGateway =Urls.userUrl+':8080';
public static apiMoodle =Urls.moodle+':8087';



// public static apiAcademics =  Urls.backendUrl +"/dis/academics";
// public static apiAdministration=Urls.backendUrl +"/dis/administration";
// public static apiUser =Urls.backendUrl + '/dis/user';
// public static apiInfrastructure =Urls.backendUrl + '/dis/infrastructure';
// public static apiGateway =Urls.backendUrl;


public static apieureka ="15.206.116.134"+ ':8761';
}

