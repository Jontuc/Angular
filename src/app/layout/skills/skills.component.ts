import { Component, Input, OnInit } from '@angular/core';
import { SKILLS } from './mock-skills';
import { Skills } from './skills';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})



export class SkillsComponent implements OnInit {

  skills : Skills[] = SKILLS

  constructor() { }

  ngOnInit(): void {
  }

}
