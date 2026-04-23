import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Learn NestJS',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Build API',
      isCompleted: false,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findTaskById(id: number) {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  create(dto: CreateTaskDto) {
    const { title } = dto;

    const newTask = {
      id: this.tasks.length + 1,
      title,
      isCompleted: false,
    };

    this.tasks.push(newTask);

    return this.tasks;
  }

  update(id: number, dto: UpdateTaskDto) {
    const { title, isCompleted } = dto;

    const task = this.findTaskById(id);

    task.title = title;
    task.isCompleted = isCompleted;

    return task;
  }

  patchUpdate(id: number, dto: Partial<UpdateTaskDto>) {
    const task = this.findTaskById(id);

    Object.assign(task, dto);

    return task;
  }

  delete(id: number) {
    const task = this.findTaskById(id);

    this.tasks = this.tasks.filter((t) => t.id !== task.id);

    return task;
  }
}
