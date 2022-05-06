import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { memberInterface } from "./app.component";


@Injectable({
  providedIn: 'root'
})

export class MemberService{

  constructor( private _http: HttpClient){  }
  private _url="../assets/member.json";

  getMember():Observable<memberInterface[]>{
   return this._http.get<memberInterface[]>(this._url);
  }

}

