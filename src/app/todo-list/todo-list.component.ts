import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../constants/task.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() taskList: Task[] = [];

  constructor(){}
  ngOnInit(): void {
    
  }

  // checks the index of task, removes it from the taskList list 
  deleteTask(task: Task) {
    const taskIndex = this.taskList.indexOf(task);
    if (taskIndex !== -1) {
      this.taskList.splice(taskIndex, 1);
    }
  }

  //changes the completed boolean of task to whatever it currently is not
  toggleCompleted(task: Task) {
    task.completed = !task.completed;
  }






}
