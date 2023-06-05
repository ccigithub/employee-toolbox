import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError, catchError} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class MenuService {

    constructor(private _http: HttpClient) {}
  // //needed config for CORS
  // app.config(['$httpProvider', function($httpProvider) {
  //   $httpProvider.defaults.withCredentials = true;
  // }]);

  // here is the service we use to generate the correct token
  urlClydeWebService = 'https://cciportal.clydeinc.com/webservices/json/ClydeWebServices';


  getDashboard(): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // const options = new Http();
    const url = this.urlClydeWebService + '/GetClydeDashboard';

    return this._http.post(url, null, {headers: headers, withCredentials: true})
      .pipe(map(res => res))
      .pipe(catchError(this.handleError));

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


}
