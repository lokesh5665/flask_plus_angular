import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { TaskSocketService } from './task-socket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit, OnDestroy {
  updates: any[] = [];
  showNotifications = true;
  isRunning = false;
  private sub: Subscription = new Subscription();
  title = 'Task Notifications';

  constructor(
    private taskSocketService: TaskSocketService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    const self = this
    self.sub = self.taskSocketService.getTaskUpdates()
      .subscribe((update: any) => {
        self.updates.push(update);
        console.log('Received update:', update);
        self.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  startTask() {
    this.isRunning = true;
    this.taskSocketService.startTask();
  }

  stopTask() {
    this.isRunning = false;
  }
}
