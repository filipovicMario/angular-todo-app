import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Task } from '../shared/task.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {
  @Input() taskList: Task[] = [];

  @Input() completedTasks: Task[] = [];

  @Input() unCompletedTasks: Task[] = [];



  filterCompletedTasks() {
    this.completedTasks = this.taskList.filter(task => task.completed === true);
  }

  filterUnCompletedTasks() {
    this.unCompletedTasks = this.taskList.filter(task => task.completed === false);
  }

  constructor() { }
  ngOnInit(): void { }

  //changes the completed boolean of task to whatever it currently is not
  toggleCompleted(task: Task) {
    task.completed = !task.completed;
    this.filterUnCompletedTasks();
  }

  //FILTERS
  activeFilter: 'all' | 'completed' | 'active' = 'all';

  updateFilter(filter: 'all' | 'completed' | 'active') {
    this.activeFilter = filter;
  }

  deleteCompletedTasks() {
    this.taskList = this.taskList.filter(task => task.completed === false);
    this.completedTasks = [];
    this.filterUnCompletedTasks();
    
    
    
  }

  // checks the index of task, removes it from the taskList list 
  deleteTask(task: Task) {
    const taskIndex = this.taskList.indexOf(task);
    if (taskIndex !== -1) {
      this.taskList.splice(taskIndex, 1);
    }
  }

}

