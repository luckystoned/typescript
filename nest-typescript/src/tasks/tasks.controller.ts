import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string): Task {
    return this.tasksService.getTask(parseInt(taskId));
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task);
    return ' Create task!';
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(task);
    return ` update task ${id}!`;
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): string {
    console.log(id);
    return ` Delete task ${id}!`;
  }
}
