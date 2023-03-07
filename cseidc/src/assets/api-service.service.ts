import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }


  // User Adding
  addUser(userName: any, email: any, number: any, designation: any, place: any) {
    console.log(userName, email, number, designation, place)
    const userData = {
      userName,
      email,
      number,
      designation,
      place
    }
    return this.http.post('http://localhost:3000/addUser', userData)
  }

  getuser(){
    return this.http.get('http://localhost:3000/getuser')

  }



}




