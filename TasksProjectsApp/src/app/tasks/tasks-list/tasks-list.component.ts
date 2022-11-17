import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tasks: Task[] = [
    { tid: 1, description: 'Crea html', time: 23, project: 1 },
    { tid: 2, description: 'Crea js', time: 23, project: 2 },
    { tid: 3, description: 'Crea TS', time: 23, project: 1 },
    { tid: 4, description: 'Llevar a producción', time: 23, project: 2 },
    { tid: 5, description: 'Crea html', time: 23, project: 1 },
  ];

  deleteTask(tid: number) {
    this.tasks = this.tasks.filter((aT) => aT.tid != tid);
  }
}
