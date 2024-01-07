import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  allTasks: string[] = [];
  newTask: string = '';

  constructor(){}

  ngOnInit(): void {
    
  }

  // checks if input is empty, then adds new task to the array, and resets newTask
  addNewTask() {
    if (this.newTask.trim() !== '') {
      this.allTasks.push(this.newTask);
      this.newTask = '';
    }
  }
}
