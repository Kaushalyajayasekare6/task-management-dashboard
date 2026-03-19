


# 📝 Task Management Dashboard

[![Docker Image](https://img.shields.io/badge/Docker-Container-blue)](https://hub.docker.com/r/kaushalyajayasekare6/2019icts142)  
[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](https://nodejs.org/)  
[![React](https://img.shields.io/badge/React-v18-blueviolet)](https://reactjs.org/)

A **full-stack Task Management Dashboard** web application built with **React** and **Node.js**, fully containerized using **Docker**.  
Users can **create, edit, delete tasks**, and set **priority levels** in a clean dashboard interface.  

---

## 🚀 Features

- ✅ Add, edit, delete tasks  
- ✅ Set task priority (High, Medium, Low)  
- ✅ Dashboard view of all tasks  
- ✅ Full backend API with Node.js + Express  
- ✅ Containerized using Docker for easy deployment  
- ✅ Docker Hub ready image  

---


## 🏗️ Technology Stack

- **Frontend:** React  
- **Backend:** Node.js + Express  
- **Database:** (Add if using MongoDB or SQLite)  
- **Containerization:** Docker  
- **Image Storage:** Docker Hub  

---

## ⚙️ Installation & Setup

### Clone the repository

```bash
git clone[ https://github.com/yourusername/task-management-dashboard.git](https://github.com/Kaushalyajayasekare6/task-management-dashboard.git)
cd task-management-dashboard
````

### Run with Docker

1. **Build the Docker image:**

```bash
docker build -t kaushalyajayasekare6/2019icts142:v1 .
```

2. **Run the Docker container:**

```bash
docker run -p 8081:8080 kaushalyajayasekare6/2019icts142:v1
```

3. **Open in browser:**

```text
http://localhost:8081
```

---

### Optional: Push to Docker Hub

```bash
docker login
docker push kaushalyajayasekare6/2019icts142:v1
```

**Docker Hub Link:** [kaushalyajayasekare6/2019icts142](https://hub.docker.com/r/kaushalyajayasekare6/2019icts142)

---

## 🗂️ Folder Structure

```text
task-management-dashboard/
├─ backend/           # Node.js backend code
│  ├─ server.js
│  └─ package.json
├─ frontend/          # React frontend code
│  ├─ src/
│  ├─ public/
│  └─ package.json
├─ Dockerfile
├─ .gitignore
└─ README.md
```

---

## 🛠️ Troubleshooting

* **Port 8080 already in use** → Map Docker to another port, e.g., `-p 8081:8080`
* **Frontend not loading properly** → Rebuild frontend inside Docker
* **Docker Desktop WSL errors** → Update WSL (`wsl --update`)

---

## 🎯 Conclusion

This project demonstrates:

* Developing a simple **full-stack web application**
* Containerizing the app with **Docker**
* Running it locally or pushing to **Docker Hub**

---

## 📦 Docker Hub

[![Docker Image](https://img.shields.io/badge/View-DockerHub-blue)](https://hub.docker.com/r/kaushalyajayasekare6/2019icts142)

---

## 👤 Author

**Kaushalya Jayasekara**

* Student, University of Vavuniya
* GitHub: [kaushalyajayasekare6](https://github.com/kaushalyajayasekare6)
* Docker Hub: [kaushalyajayasekare6](https://hub.docker.com/r/kaushalyajayasekare6/2019icts142)

````
