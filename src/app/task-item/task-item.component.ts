import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../shared/task.interface';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  constructor(public taskService: TaskService){}

  @Input() task!: Task;
  // @Output() toggleCompleted = new EventEmitter<Task>();


  onToggleCompleted() {
    this.taskService.toggleCompleted(this.task);
  }

  onDeleteTask() {
    this.taskService.deleteTask(this.task)
  }
}
