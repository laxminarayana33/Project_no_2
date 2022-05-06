import { Component } from '@angular/core';
import { MemberService } from './member.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project of Api Integration';


  members:any[] = [];
  constructor( private _memberService: MemberService){}


  ngOnInit(){
    this._memberService.getMember().subscribe(data => this.members = data)
  }
}

export interface memberInterface{
  id: number,
  Firstname: string,
  lastname: string,
  role: string
}


