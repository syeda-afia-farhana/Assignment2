import { Component, OnInit } from '@angular/core';
import {Card} from '../../shared/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public studentList: Card[] = [];
  public teacherList: Card[] = [];
  public studentTitle = 'All Students';
  public teacherTitle = 'All Teachers';

  constructor() {
    this.studentList = this.getStudentList();
    this.teacherList = this.getTeacherList();
  }

  ngOnInit(): void {
  }
  private getStudentList(): Card[]{
    let allCard: Card[] = [];
    allCard = [];
    allCard.push({title: 'Anique', count: 1, frequent: 'week', body: 'Anique is a good boy.'});
    allCard.push({title: 'Lisa', count: 1, frequent: 'Math', body: 'Lisa is good in Math.'});
    allCard.push({title: 'Henry', count: 2, frequent: 'Science', body: 'Henry is avarage in Science'});
    return allCard;
  }

  private getTeacherList(): Card[]{
    let allCard: Card[] = [];
    allCard = [];
    allCard.push({title: 'Anique', count: 1, frequent: 'week', body: 'Anique is a good boy.'});
    allCard.push({title: 'Lisa', count: 1, frequent: 'Math', body: 'Lisa is good in Math.'});
    allCard.push({title: 'Henry', count: 2, frequent: 'Science', body: 'Henry is avarage in Science'});
    return allCard;
  }

}
