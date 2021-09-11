import { TaskList } from './../../../model/task-list';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [];

  constructor() { }

  ngOnInit(): void {
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


}
