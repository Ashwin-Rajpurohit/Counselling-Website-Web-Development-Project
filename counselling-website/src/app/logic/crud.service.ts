import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { Feedback } from './feedback';
import { catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // node.js  api link
  REST_API:String = "http://localhost:3000/api"

  // set http header
  httpheaders = new HttpHeaders().set('Content-Type','application/json')
  
  constructor(private httpClient: HttpClient) { }

  // add feedback
  addFeedback(data:Feedback):Observable<any>{
    let API_URL = `${this.REST_API}/postFeedback`;
    return this.httpClient.post(API_URL,data).pipe(
      catchError(this.handleError)
    )
  }

  // get all feedbacks
  getAllFeedbacks():Observable<any>{
    return this.httpClient.get(`${this.REST_API}/getAllFeedbacks`);
  }

  // get single  feedback
  getFeedback(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/getOneFeedback/${id}`;
    return this.httpClient.get(API_URL, {headers:this.httpheaders}).pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError)
    )
  }

  // update feedback
  updateFeedback(id:any, data:any):Observable<any>{
    let API_URL = `${this.REST_API}/patchFeedback/${id}`;
    return this.httpClient.patch(API_URL, data, {headers:this.httpheaders}).pipe(
      catchError(this.handleError)
    )
  }

  // delete feedback
  deleteFeedback(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/deleteFeedback/${id}`;
    return this.httpClient.delete(API_URL, {headers:this.httpheaders}).pipe(
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error: HttpErrorResponse){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      // handle client error
      errorMessage = error.error.message;
    }
    else{
      // handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
