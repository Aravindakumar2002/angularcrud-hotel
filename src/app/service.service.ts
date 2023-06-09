import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url=''
  constructor(private http:HttpClient) {

   }
   getfood(){
    this.url="http://localhost:3000/getfood"
    return this.http.get(this.url)
   }

   addfood(body:any){
    console.log(body);
    this.url="http://localhost:3000/addfood"
    return this.http.post(this.url,body)
  }

    getfoodbyid(id:any){
      console.log(id)
      this.url="http://localhost:3000/getfood/"+id
      return this.http.get(this.url)
    }

    updatefood(data:any){
      console.log("inside update food service");
      console.log(data);
            
      this.url="http://localhost:3000/updatefood/"
      return this.http.put(this.url,data)
    }

    deletefood(id:any){
      console.log("Delete Data");
      
      this.url="http://localhost:3000/deletefood/";
      return this.http.put(this.url,id)
    }
    

}
