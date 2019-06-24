import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  // serverUrl = 'http://localhost/dev/blogger/';
  errorData: {};

  constructor(private http: HttpClient) { }

  redirectUrl: string;
  err: boolean;


  //   http .get('Some Url') .map(res => {
  //     // If request fails, throw an Error that will be caught 
  //     if(res.statu != 200) {
  //   throw new Error('This request has failed ' + res.status);
  // } // If everything went fine, return the response 
  //     else {
  //   return res.json();
  // } })

  userlogin(username: string, password: string) {
    return this.http.post<any>('http://localhost:60354/api/auth/login', { username: username, password: password })
      // .pipe(
      //   catchError(this.handleError),
      //   map(user => {
      //     if (user && user.token) {
      //       localStorage.setItem('currentUser', JSON.stringify(user));
      //     }
      //   },
      //     catchError(this.handleError))
      // )
      .pipe(
        map(user => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
        }),
        catchError(this.handleError)


      );
  }

  placelogin(username: string, password: string) {
    return this.http.post<any>('http://localhost:60354/api/PlaceAuth/login', { username: username, password: password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentPlace', JSON.stringify(user));
        }
      }),


        catchError(this.handleError)
      );
  }

  userRegister(username: string, password: string, email: string,
    country: string, city: string, phone: string) {
    return this.http.post<any>('http://localhost:60354/api/auth/register',
      {
        username: username,
        password: password,
        email: email,
        country: country,
        city: city,
        phone: phone
      })
      .pipe(map(user => {

      }),

        catchError(this.handleError)
      );
  }

  PlaceRegister(place: Place) {

    return this.http.post<any>('http://localhost:60354/api/PlaceAuth/Register', place)
      .pipe(map(user => {

      }),

        catchError(this.handleError)
      );
  }

  findPlaces(city: string, id: number) {
    return this.http.put('http://localhost:60354/api/Users2/Putcurrentlocation/' + id + '/' + city, {})
      .pipe(map(user => {

      }),

        catchError(this.handleError)
      );
  }

  //////////////////////////////////////////////
  userLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  placeLoggedIn() {
    if (localStorage.getItem('currentPlace')) {
      return true;
    }
    return false;
  }

  getUserAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.token;
  }
  getPlaceAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentPlace'));
    return currentUser.token;
  }



  logOut() {
    if (this.placeLoggedIn) {
      localStorage.removeItem('currentPlace');
    }
    if (this.userLoggedIn) {
      localStorage.removeItem('currentUser');
    }

  }


  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      if (error.status == 401) {
        console.log('errrrrrrrrrrrrrrrrrrrr')
      } else {
        console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      }
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.

      this.err = true;
    }

    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }

}
