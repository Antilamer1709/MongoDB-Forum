import {Response, Headers} from "@angular/http";
import {Router} from "@angular/router/router";
import {Observable} from "rxjs/Observable";


export class CommonService {

  constructor(protected router: Router) {
  }

  handleError(error: Response | any) {
    console.error('ERROR: ' + error);
    let errMsg: string;
    if (error instanceof Response) {
      let status = error.status;
      //let message  = error.message;
      let jsonObject: any = null;
      try {
        jsonObject = error.json();
      } catch (e) {
        console.error('ERROR: ' + error + ' json error:' + e);
      }
      if (status === 401) {
        this.router.navigate(['/authentication/login']);
        Observable.throw( errMsg );
        return null;
      } else if (status === 404) {
        errMsg = '404';
        return Observable.throw(errMsg);
      } else if (status === 500) {
        if (jsonObject && jsonObject.message) {
          errMsg = jsonObject.message;
        } else
          errMsg = 'Error:' + error.status + ' - ' + error.statusText;
        return Observable.throw(errMsg);
      }
      if (jsonObject && jsonObject.message) {
        errMsg = jsonObject.message;
      } else
        errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  protected getHeaders(): Headers {
    let headers = new Headers();
    headers.append('Cache-Control', 'no-cache');
    headers.append('Pragma', 'no-cache');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  protected getEncodedHeaders(): Headers {
    let headers = new Headers();
    headers.append( 'Content-Type', 'application/x-www-form-urlencoded' );
    return headers;
  }

  protected extractData(res: Response) {
    let body = JSON.parse(res.text(), (key, value) => {
      key = key.toString();
      if (key !== null && key.toUpperCase().indexOf("DATE") !== -1) {
        let isDateNumber = /^(\d{13})$/.exec(value);
        if (isDateNumber) {
          return new Date(value);
        }
      }
      return value;
    });
    return body || {};
  }

}
