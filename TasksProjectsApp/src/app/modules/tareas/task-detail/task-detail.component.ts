import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { ProjectsService } from 'src/app/services/projects.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
  task: Task = {} as Task;

  constructor(
    private _route: ActivatedRoute,
    private _taskSrv: TasksService,
    private _router: Router,
    private _projectSrv: ProjectsService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((data) => {
      const aT = this._taskSrv.getATask(data['tid']);
      if (aT) {
        this.task = aT;

        const elProj = this._projectSrv.getAproject(aT.project);
        console.log('TaskDetailComponent:', elProj);

      }
    });
  }

  goNext() {
    const newTid = this._taskSrv.getNext(this.task);
    if (newTid >= 0) this._router.navigate(['/tasks', newTid]);
    else this._router.navigate(['/tasks']);
  }

  goPrev() {
    const newTid = this._taskSrv.getPrev(this.task);
    if (newTid >= 0) this._router.navigate(['/tasks', newTid]);
    else this._router.navigate(['/tasks']);
  }
}
