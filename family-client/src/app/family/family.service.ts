import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parent } from './models/parent.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  //משתנה שיכיל את המשתמש- המשפחה הנוכחית שיוכר בכל המודול הזה
  private _currentFamily!:Parent;
  public set currentFamily(value:Parent){
    this._currentFamily=value;
  }
  public get currentFamily():Parent{
    if (this._currentFamily==undefined)
      this._currentFamily=new Parent();
    return this._currentFamily;
  }
  //שמירת פרטי המשתמש -המשפחה הנוכחית
  saveFamily(): Observable<void> {
    return this._http.post<void>("/api/Parents",this.currentFamily);
}
  constructor(private _http:HttpClient) { }
}
