# COM668: Project Review Report
**Project Title**: Fresh Grocer - Premium MERN E-Commerce Platform
**Module**: COM668
**Date**: April 2026

---

## 1. Introduction
This document serves as the final Project Review Report for the "Fresh Grocer" e-commerce platform. The project aimed to deliver a state-of-the-art, responsive, and robust grocery delivery application utilizing the MERN stack (MongoDB, Express, React, Node.js). The application was designed with a focus on premium User Interface/User Experience (UI/UX), secure backend architecture, and realistic e-commerce functionalities including localized delivery validation, dynamic cart management, and a robust promo engine.

---

## 2. Software Realisation

### 2.1 Architecture & Technology Stack
The application employs a decoupled client-server architecture:
*   **Frontend (Client)**: Built with React (via Vite) for optimal performance. State management is handled efficiently using Zustand, avoiding the boilerplate of Redux while maintaining predictability. React Router DOM is utilized for seamless Single Page Application (SPA) navigation.
*   **Backend (API)**: A RESTful API built with Node.js and Express. It follows the MVC (Model-View-Controller) pattern, ensuring clean separation of concerns.
*   **Database**: MongoDB (via Mongoose) provides a flexible, document-based NoSQL schema ideal for managing dynamic product catalogs and order histories.

### 2.2 Key Features Implemented
*   **Premium UI/UX**: The frontend features a bespoke design system (`index.css`) utilizing glassmorphism, fluid animations, and a modern color palette, fulfilling the requirement for high visual fidelity.
*   **Role-Based Access Control (RBAC)**: Distinct dashboards and permissions for Standard Users, Delivery Drivers, and Administrators.
*   **Promo Engine**: A fully integrated server-side coupon validation system that dynamically recalculates order totals at checkout.
*   **Data Analytics**: The Admin Dashboard integrates `recharts` to provide visual, real-time analytics on revenue trends and order volumes.

### 2.3 Security Measures
Security was integrated proactively throughout the development lifecycle:
*   **Authentication**: Stateless authentication using JSON Web Tokens (JWT) stored securely in HTTP headers (Bearer tokens).
*   **Data Sanitization**: `express-mongo-sanitize` is deployed with a custom compatibility layer to safely prevent NoSQL injection attacks.
*   **API Hardening**: `helmet` is used to set secure HTTP headers, and `express-rate-limit` mitigates DDoS and brute-force attacks by restricting excessive requests.
*   **Password Hashing**: User passwords are encrypted using `bcrypt` before database storage.

---

## 3. Quality Assurance

A rigorous Quality Assurance strategy was adopted to ensure application stability and reliability.

### 3.1 Automated Testing
Unit testing was introduced using **Vitest** and **jsdom** for the frontend state management. Specifically, the `useCartStore.test.js` suite validates the integrity of the shopping cart logic, ensuring that item addition, removal, and cart clearing function correctly independently of the UI components. This automated verification guarantees that core e-commerce functions remain stable during future iterations.

### 3.2 Manual Validation & Defensive Programming
*   **Frontend Validation**: HTML5 constraints and React-controlled components ensure valid user input before form submission.
*   **Backend Error Handling**: A centralized `asyncHandler` middleware catches unhandled promise rejections, preventing server crashes and returning standardized, sanitized JSON error messages to the client.
*   **State Persistence**: Zustand stores are synced with `localStorage` to ensure cart and user session persistence across browser refreshes, enhancing UX and preventing data loss.

---

## 4. Critical Appraisal

### 4.1 Achievements
The project successfully met and exceeded its primary objectives. The implementation of advanced features like the Driver Dashboard and the interactive analytics charts elevates the platform beyond a standard CRUD application. The bespoke CSS design system resulted in a highly polished, professional product that aligns with modern industry standards.

### 4.2 Limitations & Future Enhancements
*   **Payment Gateway Integration**: Currently, the checkout flow simulates a Stripe transaction. A full integration using the Stripe Elements SDK would be the next step for a production environment.
*   **Test Coverage**: While critical store logic is unit-tested, extending coverage to include Integration Tests (using Cypress or Playwright) for the entire checkout flow would further solidify the application's reliability.
*   **Image Optimization**: Implementing a cloud-based image transformation service (like Cloudinary) would reduce payload sizes and improve load times for product images.

---

## Appendix A: Code Manifest

The following is a high-level summary of the codebase structure and key files authored for this project.

### Frontend (`/frontend/src/`)
*   **`pages/`**: Contains top-level views.
    *   `HomeScreen.jsx`: Landing page with dynamic product grid and delivery validation widget.
    *   `CheckoutScreen.jsx`: Multi-step checkout process with integrated Promo Engine.
    *   `AdminDashboard.jsx`: Analytics and management portal using `recharts`.
    *   `DriverDashboard.jsx`: Dedicated view for delivery personnel.
*   **`store/`**: Zustand state management.
    *   `useCartStore.js`: Global cart state.
    *   `useAuthStore.js`: Authentication state and API calls.
*   **`__tests__/`**: Quality assurance files.
    *   `useCartStore.test.js`: Vitest suite for cart logic.

### Backend (`/backend/`)
*   **`models/`**: Mongoose database schemas.
    *   `User.js`, `Product.js`, `Order.js`, `Coupon.js`.
*   **`controllers/`**: Business logic.
    *   `orderController.js`: Handles order creation, stock reduction, and driver assignment.
    *   `couponController.js`: Validates promo codes and minimum spend rules.
    *   `adminController.js`: Aggregates database statistics for analytics.
*   **`middleware/`**: Request interceptors.
    *   `authMiddleware.js`: Validates JWTs and verifies Admin/Driver roles.
    *   `errorMiddleware.js`: Centralized error handling.
*   **`server.js`**: Application entry point, configuring Express, MongoDB connection, and security headers.

---

## Appendix B: Database Schema Summary

1.  **User Collection**: `name`, `email`, `password` (hashed), `role` (user/admin/driver), `isVerified`.
2.  **Product Collection**: `name`, `price`, `description`, `image`, `category`, `stock`, `rating`.
3.  **Order Collection**: `user` (ref), `orderItems` (array), `shippingAddress`, `totalPrice`, `couponApplied`, `discountAmount`, `status`.
4.  **Coupon Collection**: `code`, `discountType`, `discountValue`, `minSpend`, `expiryDate`, `isActive`.
