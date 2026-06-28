This project demonstrates a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline using:

- Node.js
- Docker
- Jenkins
- GitHub
- GitHub Webhooks
- NGINX Reverse Proxy
- AWS EC2 (Ubuntu)
- Whenever code is pushed to the GitHub repository, Jenkins automatically builds a new Docker image, 
  replaces the existing container, and deploys the latest version of the application without manual intervention.

🛠 Tech Stack
- Node.js
- Docker
- Jenkins
- GitHub
- GitHub Webhooks
- NGINX
- Ubuntu (AWS EC2)
- Linux Commands
- Git

 🔄 CI/CD Workflow

Developer
     │
     ▼
Git Push
     │
     ▼
GitHub Repository
     │
     ▼
GitHub Webhook
     │
     ▼
Jenkins Pipeline
     │
     ▼
Checkout Latest Code
     │
     ▼
Docker Build
     │
     ▼
Stop Existing Container
     │
     ▼
Run New Container
     │
     ▼
NGINX Reverse Proxy
     │
     ▼
Application Available on Browser

  📚 Key Concepts Learned
- Git Workflow
- GitHub Webhooks
- Jenkins Declarative Pipeline
- Docker Image vs Container
- Reverse Proxy using NGINX
- Linux Process Management
- Port Troubleshooting
- Jenkins Nodes & Executors
- CI/CD Pipeline Design
- End-to-End Deployment Debugging
