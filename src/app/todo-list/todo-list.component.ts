import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Task } from '../shared/task.interface';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {
  @Input() activeFilter: 'all' | 'completed' | 'active' = 'all';

  constructor(public taskService: TaskService) { }

  ngOnInit(): void { }

  toggleCompleted(task: Task) {
    this.taskService.toggleCompleted(task);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
  }

  deleteCompletedTasks(){
    this.taskService.deleteCompletedTasks();
  }

  updateFilter(filter: 'all' | 'completed' | 'active') {
    this.activeFilter = filter;
  }

}

