# python-flask-socketio-app/python-flask-socketio-app/README.md

# Python Flask SocketIO App

This project is a simple web application built using Flask and Flask-SocketIO. It demonstrates real-time communication between the server and clients using WebSockets.

## Requirements

- Python 3.x
- Flask
- Flask-SocketIO
- Eventlet

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd python-flask-socketio-app
   ```

2. Create a virtual environment (optional but recommended):

   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:

   ```
   pip install -r requirements.txt
   ```

## Usage

To run the application, execute the following command:

```
python -m app.main
```

The application will start on `http://localhost:5000`.

## Features

- Real-time communication using SocketIO
- Simple event handling for messages

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.