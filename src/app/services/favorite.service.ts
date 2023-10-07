import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserFavorite } from '../model/userfavorite';
import { Observable } from 'rxjs';
import { RestaurantData } from '../model/restaurant-description';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:9000/api/v2/register"                   

  registerUser(user:UserFavorite):Observable<UserFavorite>{            //on submit in resgister component
    return this.http.post<UserFavorite>(this.url,user)
  }



  urlPost:string="http://localhost:9000/api/v2/user/save"

  saveRestaurantToUser(restaurant:RestaurantData):Observable<any>{      // onSubmit Of Restaurant component, observable should be of   any type because it returns token
    return this.http.post<User>(this.urlPost,restaurant)
  }

  urlGet:string="http://localhost:9000/api/v2/user/get"

  getUserListOfResturant():Observable<RestaurantData[]>{              // ngOnInit of fav component   
    return this.http.get<RestaurantData[]>(this.urlGet)
  }


  urlGetUser:string="http://localhost:9000/api/v2/user/getUser"     // ngOnInIt of HeaderComponent

  getUserByUserId():Observable<UserFavorite>{
   return this.http.get<UserFavorite>(this.urlGetUser)
  }

}
