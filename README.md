
# 📬 Notifications Assignment

This repository contains the solution for the assignment task involving:

- Asynchronous notifications using Python Flask & threading.
- A conceptual design for RxJS integration with SSE/WebSockets to stream updates to the frontend.

---

## 🚀 Technologies Used

- Python 3.10
- Flask
- Flask-SocketIO
- Flask-CORS
- Eventlet (for async WSGI server)
- Angular 20 (frontend example, conceptual with RxJS 7.8)

---

## 📝 Task Deliverables

### 1. ✅ Asynchronous Notification

The `update_task` endpoint uses Python’s `threading` module to send notifications in the background.  
This ensures the main HTTP request thread remains non-blocking and returns immediately.

```python
@app.route('/update_task', methods=['POST'])
def update_task():
    data = request.get_json()
    task_id = data.get('task_id')
    user_email = data.get('user_email')

    update_task_in_db(task_id, user_email)

    # Notify asynchronously
    threading.Thread(target=send_notification, args=(task_id, user_email)).start()

    return jsonify({"status": "task updated, notification will be sent asynchronously"})
```

✅ **Benefits:**
- Does not block the client HTTP response.
- Notification is processed in a separate thread.
- Keeps API responsive under load.

---

### 2. ✅ RxJS Integration (Conceptual Design)

#### 🔥 Using Server-Sent Events (SSE)
- Ideal for one-way streaming from server to client.
- Flask returns a `text/event-stream` response.

```python
@app.route('/task_updates')
def task_updates():
    def event_stream():
        for i in range(5):
            time.sleep(1)
            yield f"data: Task update {i}\n\n"
    return Response(event_stream(), mimetype='text/event-stream')
```

#### 🔥 Using WebSockets
- Bi-directional. Useful if the frontend might also push commands (start/stop).

```python
from flask_socketio import SocketIO

socketio = SocketIO(app, cors_allowed_origins="*")

def emit_updates():
    for i in range(5):
        time.sleep(1)
        socketio.emit('task_update', {'msg': f'Task update {i}'})
```

On the Angular side:
```typescript
this.socket = io('http://localhost:5000');
this.sub = fromEvent(this.socket, 'task_update')
  .subscribe(data => console.log('Update:', data));
```

---

## 🏗️ How to Run the Backend

1. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

2. Start the server:

    ```bash
    python app.py
    ```

- By default, it runs on `http://localhost:5000`.

---

## 🚀 Testing Asynchronous Notifications

- To test:
    ```bash
    curl -X POST http://localhost:5000/update_task -H "Content-Type: application/json" -d '{"task_id": "123", "user_email": "test@example.com"}'
    ```

- You will see immediate response, while notification logs continue in the background.

---

## ✅ Highlights: Evaluation Criteria

| Criteria                                        | Implementation                          |
|--------------------------------------------------|----------------------------------------|
| ✅ Async Notifications                          | Used `threading.Thread` to decouple notification sending from HTTP request. |
| ✅ Background Processing                        | Clean threading approach without blocking main thread. |
| ✅ RxJS Integration Design                      | Explained both SSE & WebSockets, when to use each, and how Angular RxJS can consume. |
| ✅ Code Quality                                 | Clear, documented, modular Flask code. |

---

## 📝 Author

**Lokeswarareddy**  
_Implemented for assignment shortlisting technical discussion._
