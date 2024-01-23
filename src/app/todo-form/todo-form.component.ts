import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.interface';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  newTask: string = '';

  constructor(private taskService: TaskService){}
  

  ngOnInit(): void {}

  // checks if input is empty, then adds new task to the array, and resets newTask
  addNewTask() {
    if (this.newTask.trim() !== '') {
      const newTask: Task = {
        name: this.newTask,
        completed: false
      };
      this.taskService.addTask(newTask);
      this.newTask = '';
    }
  }
}
