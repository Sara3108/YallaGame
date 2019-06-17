import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  // serverUrl = 'http://localhost/dev/blogger/';
  errorData: {};
<<<<<<< HEAD
  register: {
    "userName": "string",
    "password": "string",
    "email": "string",
    "country": "string",
    "city": "string",
    "phone": "string"
  }
=======

>>>>>>> 882426a978eef70277ab405a25bcd2ff390b2088

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
<<<<<<< HEAD
      catchError(this.handleError)
=======
        
      // catchError(this.handleError)
>>>>>>> 882426a978eef70277ab405a25bcd2ff390b2088
    );
  }

  placelogin(username: string, password: string) {
    return this.http.post<any>('http://localhost:60354/api/PlaceAuth/login', { username: username, password: password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }),
<<<<<<< HEAD

        catchError(this.handleError)
      );
=======
        
      // catchError(this.handleError)
    );
>>>>>>> 882426a978eef70277ab405a25bcd2ff390b2088
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
<<<<<<< HEAD

        catchError(this.handleError)
      );
=======
        
      // catchError(this.handleError)
    );
>>>>>>> 882426a978eef70277ab405a25bcd2ff390b2088
  }

  PlaceRegister(username: string, password: string, email: string,
    country: string, city: string, phone: string) {
    return this.http.post<any>('http://localhost:60354/api/PlaceAuth/Register',
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
<<<<<<< HEAD

        catchError(this.handleError)
      );
=======
        
      // catchError(this.handleError)
    );
>>>>>>> 882426a978eef70277ab405a25bcd2ff390b2088
  }
  findPlaces(city:string,id:number){
    
    this.http.post('http://localhost:60354/api/Users2/{id}',{
      currentCity: city
    });
  }

  //////////////////////////////////////////////
  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.token;
  }

 

  logout() {
    localStorage.removeItem('currentUser');
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
