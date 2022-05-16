import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
  //emulate a database
  task: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
      done: false,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
      done: false,
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description 3',
      done: false,
    },
  ];

  //method to get all tasks from the database
  getTasks(): Task[] {
    return this.task;
  }

  //method to get a specific task from the database
  getTask(id: number): Task {
    return this.task.find((task) => task.id === id);
  }
}
