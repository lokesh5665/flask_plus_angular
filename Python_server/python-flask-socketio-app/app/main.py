import eventlet
eventlet.monkey_patch()

from flask import Flask, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO
import threading
import time

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

def emit_updates():
    for i in range(5):
        time.sleep(1)
        print(f"[SocketIO] Emitting update {i}")
        socketio.emit('task_update', {'msg': f'Task update {i}'})
    print("[SocketIO] Done emitting updates")

@app.route('/start_task')
def start_task():
    print("[HTTP] /start_task called")
    threading.Thread(target=emit_updates).start()
    return jsonify({"status": "started"})

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)
