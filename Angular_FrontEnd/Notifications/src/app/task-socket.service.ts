import { Injectable } from '@angular/core';
import { fromEventPattern, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({ providedIn: 'root' })
export class TaskSocketService {
    private socket: Socket;

    constructor() {
        this.socket = io('http://localhost:5000');
    }

    getTaskUpdates(): Observable<any> {
        return fromEventPattern(
            handler => this.socket.on('task_update', handler),
            handler => this.socket.off('task_update', handler)
        );
    }

    startTask() {
        fetch('http://localhost:5000/start_task');
        // if your server listens for socket event
    }

    // Call this method in your component to start listening and printing messages
    logTaskUpdates() {
        this.getTaskUpdates().subscribe(message => {
            console.log('Received task update:', message);
        });
    }
}
