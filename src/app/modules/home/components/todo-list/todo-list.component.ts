import { TaskList } from './../../../model/task-list';
import { Component, DoCheck, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck():void{
    this.setLocalStorate()
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event,1);
  }

  public deleteAllTaskList(){
    this.taskList = [];
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }
  public setLocalStorate(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }

}
