# 🎮 Games Website — Angular

A modern and responsive games website built with **Angular 21**, designed to provide a clean and interactive gaming experience.

## 🌐 Live Demo

🚀 **Live Website:**
https://diaamohamed26.github.io/games-website-angular/

## 📌 Project Overview

Games Website is a modern frontend application built with Angular.
The project focuses on creating a responsive gaming platform with a clean UI, reusable components, and a smooth user experience.

## ✨ Features

* 🎮 Modern games website interface
* 📱 Fully responsive design
* 🏠 Home page
* 🎯 Games browsing
* 🔍 Search functionality
* 🖼️ Game cards and game information
* ⚡ Fast Angular application
* 🎨 Bootstrap and custom SCSS styling
* 📦 Reusable Angular components
* 🚀 Deployed with GitHub Pages
* 🔒 HTTPS enabled through GitHub Pages

## 🛠️ Technologies

* **Angular 21**
* **TypeScript**
* **SCSS**
* **Bootstrap**
* **Bootstrap Icons**
* **RxJS**
* **Vitest**
* **GitHub Pages**
* **GitHub Actions**

## 📂 Project Structure

```text
games-website-angular/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   │
│   ├── assets/
│   ├── styles.scss
│   └── main.ts
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have:

* Node.js 22 LTS
* npm
* Angular CLI

Check your versions:

```bash
node -v
npm -v
ng version
```

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/diaamohamed26/games-website-angular.git
```

Navigate to the project:

```bash
cd games-website-angular
```

Install dependencies:

```bash
npm install
```

## 💻 Development Server

Start the development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200/
```

The application will automatically reload when source files are changed.

## 🏗️ Production Build

Build the project for production:

```bash
npm run build
```

For GitHub Pages:

```bash
npm run build -- --base-href /games-website-angular/
```

The production files are generated inside:

```text
dist/games-website/browser/
```

## 🚀 Deployment

The project uses **GitHub Actions** to automatically deploy the Angular application to GitHub Pages.

Deployment workflow:

```text
Push to main
     ↓
GitHub Actions
     ↓
Install dependencies
     ↓
Build Angular application
     ↓
Create GitHub Pages artifact
     ↓
Deploy
     ↓
Live Website
```

### GitHub Pages URL

```text
https://diaamohamed26.github.io/games-website-angular/
```

Every push to the `main` branch can trigger a new deployment through GitHub Actions.

## 🧪 Testing

Run unit tests with:

```bash
ng test
```

The project uses **Vitest** as the test runner.

## 🧹 Code Scaffolding

Angular CLI can generate new components, services, and other project files.

Generate a component:

```bash
ng generate component component-name
```

Generate a service:

```bash
ng generate service service-name
```

For more Angular CLI commands:

```bash
ng generate --help
```

## 📦 Build Configuration

The production configuration includes:

* Optimized JavaScript
* Optimized CSS
* Disabled Google Fonts build-time inlining
* Production bundle budgets
* Output hashing
* GitHub Pages base URL

## 🔗 Repository

**GitHub:**
https://github.com/diaamohamed26/games-website-angular

**Live Demo:**
https://diaamohamed26.github.io/games-website-angular/

## 👨‍💻 Author

**Diaa Mohamed**

* GitHub: https://github.com/diaamohamed26
* LinkedIn: https://linkedin.com/in/diaa-mohamed-a50460125

## 📄 License

This project is available for educational and portfolio purposes.
