# Leads Management Frontend

This is the frontend for the **Leads Management System**, built with React 19 using Vite. It provides an intuitive UI/UX for managing homecare leads, including lead submission, validation, error handling, and displaying lead data in a structured format.

## Features
- Lead submission form with validation
- Lead data table


## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Setup Instructions

### 1. Clone the repository
```sh
git clone https://github.com/ahmedbashir-dev/leads-management-frontend.git
cd leads-management-frontend
```

### 2. Install Dependencies
```sh
npm install  # or yarn install
```

### 3. Configure environment variables
Create a .env file in the root directory and add the necessary variables:
```sh
VITE_API_BASE_URL=https://leadsmanagement-production.up.railway.app
```

Adjust the VITE_API_BASE_URL as needed for development or production.

### 4. Run the project
#### Development Mode
```sh
npm run dev # or yarn dev
```

The app will be accessible at http://localhost:5173/ (or a different port if specified by Vite).

#### Production Build
To create an optimized production build:
```sh
npm run preview  # or yarn preview
```


