# MERN Skincare Store - EverGlow
A full-stack, microservices-based skincare e-commerce platform built using **React**, **Node.js**, **Spring Boot**, and **PostgreSQL**. This project aims to deliver a smooth and modern shopping experience for skincare products, while demonstrating clean architecture with scalable backend services.

---

## Tech Stack

### Frontend
- **React.js**
- **Material UI** 
- **React Router DOM** 
- **Axios**

### Backend
- **Node.js**
- **Spring Boot** 

#### Microservices (Spring Boot)
- **Product Service** – Manages product catalog
- **Cart Service** – Handles cart operations
- **User Service** – Manages user accounts and profiles
- **Order Service** - Manages orders

#### BFF (Backend For Frontend) Layer
- Built in **Node.js (Express)**
- Aggregates and simplifies data from multiple microservices
- Serves as a secure API gateway for the frontend

### Database
- **PostgreSQL** – Used by all backend services for data persistence

---

## Features (Completed)

- View product listings and categories
- Add/remove products from cart
- User registration and authentication (basic)
- Microservices architecture with inter-service communication
- Fast and modern UI with Material UI
- BFF layer for efficient frontend-backend integration
- Dynamic product detail page with quantity options
- Loading states with Skeleton placeholders

---

## Project Structure (Monorepo Style)
```
mern-skincare-store/
│
├── client/                    # React + MUI frontend
├── bff/                       # Node.js backend-for-frontend layer
├── microservices/             # All Spring Boot microservices
│   ├── product-service/       # Product microservice
│   ├── cart-service/          # Cart microservice
│   ├── user-service/          # User microservice
│   ├── notification-service/  # (Planned) Email notification service
│   ├── recommendation-service/# (Planned) Product recommendation service
│
└── README.md                  # Project documentation
```

---

## Installation Guide

### Prerequisites
- Node.js (v18+)
- Java (v17+)
- PostgreSQL
- Docker (optional)

---

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/senudyl/mern-skincare-store.git
cd mern-skincare-store
```

### 2️⃣ Set Up PostgreSQL
Create databases for each microservice (or use Docker Compose for all services).

### 3️⃣ Start Microservices
Go to each microservice folder and run:

```bash
mvn spring-boot:run
```
Ensure that:

* product-service is running on localhost:8081

* cart-service on localhost:8082

* user-service on localhost:8083

### 4️⃣ Start the BFF Layer
```
cd bff
npm install
npm start
```
Default: `http://localhost:3001`

### 5️⃣ Start the React Client
```
cd client
npm install
npm start
```
Default: `http://localhost:3000`

### Environment Variables
Create .env files in relevant folders:

For BFF (bff/.env)
```
PRODUCT_SERVICE_URL=http://localhost:8081/api/products
CART_SERVICE_URL=http://localhost:8082/api/cart
USER_SERVICE_URL=http://localhost:8083/api/users
```

For React Client (client/.env)
```
REACT_APP_BFF_URL=http://localhost:3001
```

### Screenshots

### Contact
For any suggestions, issues, or contributions:




