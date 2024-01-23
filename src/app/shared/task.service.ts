import { Injectable } from "@angular/core";
import { Task } from "./task.interface";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private allTasks: Task[] = [];
    private completedTasks: Task[] = [];
    private unCompletedTasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.allTasks;
    }

    addTask(task: Task): void {
        this.allTasks.push(task);
        this.unCompletedTasks.push(task);
    }

    filterTasks(): void {
        this.completedTasks = this.allTasks.filter((task => task.completed === true))
        this.unCompletedTasks = this.allTasks.filter((task => task.completed === false))
    }

    toggleCompleted(task: Task): void {
        task.completed = !task.completed;
        this.filterTasks();
    }

    deleteCompletedTasks(): void {
        this.allTasks = this.allTasks.filter((task) => task.completed === false);
        this.completedTasks = [];
        this.filterTasks();
    }

    deleteTask(task: Task): void {
        const taskIndex = this.allTasks.indexOf(task);
        if (taskIndex !== -1) {
            this.allTasks.splice(taskIndex, 1);
            this.filterTasks();
        }
    }

    getUncompletedTasks():Task[] {
        this.filterTasks()
        return this.unCompletedTasks;
    }

    getCompletedTasks(): Task[] {
        this.filterTasks();
        return this.completedTasks;
    }


}


