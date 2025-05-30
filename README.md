# Finance Project

This project is a financial management system. It consists of a **React frontend** and an **ASP.NET Core backend API**.

## Project Structure

- **Frontend**: A React application bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- **Backend**: An ASP.NET Core Web API for handling business logic and data.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v16 or later) and npm
- **.NET SDK** (v9.0 or later)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sopho1/Financial_Modelling_Prep_Api.git
cd finance-project

### 2. Frontend Setup

cd frontend
npm install
npm start

### 3. Backend Setup

cd api
dotnet restore
dotnet watch run

The API will run on http://localhost:5202 (HTTP) and https://localhost:7020 (HTTPS).
