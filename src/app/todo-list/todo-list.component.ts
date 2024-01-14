import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../constants/task.interface';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {
  @Input() taskList: Task[] = [];

  completedTasks: Task[] = [];

  constructor(){}
  ngOnInit(): void {
    
  }

  // function to check if task.completed: true
  checkIfTaskCompleted(taskList: Task[], isCompleted: boolean):Task[] {
    return taskList.filter(task => task.completed === isCompleted)
    
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
    if (task.completed) {
      this.completedTasks.push(task)

    }
    console.log(this.completedTasks)
    console.log(this.taskList)
    
    }

  //counts uncompleted tasks
  

    
    
  }

