# Heart Disease Prediction Fullstack Application

This repository contains a full stack application for predicting heart disease using a deep-learning model. Flask powers the backend, and the front end is built with Vite + react.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)

## Installation

Follow these steps to set up and run the application on your local machine.

### Prerequisites

Make sure you have the following installed:

- Python 3.7 or higher
- Git

### Clone the Repository

```bash
git clone https://github.com/ShafeeqAhamedS/heart-disease-prediciton-fullstack
cd heart-disease-prediciton-fullstack
```

### Set Up the Virtual Environment

Create and activate a virtual environment:

```bash
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS and Linux:
source venv/bin/activate
```

### Install Dependencies

#### Backend
Install the required packages using the `requirements.txt` file:
```bash
pip install -r requirements.txt
```

#### Frontend
From the root directory of the project, navigate to the `frontend` directory:
```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env` file in the root directory of the project and add any necessary environment variables. Here is an example:

```env
DATABASE_URL=your_database_url
```

## Usage

### Run the Application

#### Backend
Start the Flask application:

From the root directory of the project, navigate to the `backend` directory:
```bash
cd backend
flask run
```

The application will be available at `http://127.0.0.1:5000`.

#### Frontend
Start the frontend application:

From the root directory of the project, navigate to the `frontend` directory:
```bash
cd frontend
npm start
```

## Demo

### Web Interface

You can  access the web interface at `http://localhost:5173/` to input patient data and get predictions directly through the web form.
