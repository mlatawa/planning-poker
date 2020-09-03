import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JoiningInfoService {

  private _name: String;
  private _storyNumber: String;
 
  constructor() { }

  public get name(): String {
    return this._name;
  }
  public set name(value: String) {
    this._name = value;
  }
 
  public get storyNumber(): String {
    return this._storyNumber;
  }
  public set storyNumber(value: String) {
    this._storyNumber = value;
  }


}
