import { Component, OnInit } from '@angular/core';
import { Task } from '../constants/task.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  allTasks: Task[] = [];
  newTask: string = '';

  completedTasks: Task[] = [];

  unCompletedTasks: Task[] = [];

  constructor(){}
  

  ngOnInit(): void {
    
  }

  // checks if input is empty, then adds new task to the array, and resets newTask
  addNewTask() {
    if (this.newTask.trim() !== '') {
      const newTask: Task = {
        name: this.newTask,
        completed: false
      }
      this.allTasks.push(newTask);
      this.unCompletedTasks.push(newTask);
      this.newTask = '';
    }
  }
}
