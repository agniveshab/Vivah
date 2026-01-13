# Vivah - Indian Luxury Wedding Planner

**Vivah** is a premium, full-stack web application designed to simplify and elevate the Indian wedding planning experience. From discovering top-tier vendors to managing budgets and guest lists, Vivah provides a seamless, aesthetically pleasing digital assistant for modern couples.
*(Note: Replace with actual screenshot path if available, or remove this line)*

## ✨ Features

- **User Dashboard**: A central hub to manage the wedding timeline, pending tasks, and budget summary.
- **Curated Vendor Marketplace**: Browse and filter top-rated vendors (Photographers, Decorators, Makeup Artists) with a focus on luxury.
- **Visual Budget Tracker**: Keep finances on track with category-wise breakdowns and real-time summaries.
- **Guest Management**: Track RSVPs, manage guest groups, and assign strict/flexible counts.
- **Luxury Design System**: A bespoke UI built with CSS variables, featuring smooth transitions (`framer-motion`) and a persistent **Dark/Light Mode**.
- **Role-Based Access**: Specialized views for Couples and Vendors (Back-office foundation ready).

## 🛠️ Tech Stack

### Frontend (`/client`)
- **Framework**: React 19 (Vite)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Custom Design System with Variables), CSS Modules
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Routing**: React Router DOM v7

### Backend (`/server`)
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: SQLite (via Prisma ORM)
- **Authentication**: JWT Strategy (Passport.js) + BCrypt hashing
- **ORM**: Prisma Client

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js (v18+)
- npm

### 1. Clone the Repository
```bash
git clone https://github.com/agniveshab/Vivah.git
cd Vivah
```

### 2. Backend Setup
```bash
cd server
npm install

# Set up Environment Variables
cp .env.example .env
# (Update DATABASE_URL if needed, default is file:./dev.db)

# Initialize Database & Seed Dummy Data
npx prisma migrate dev --name init
npm run seed  # Seeds users: aditi@example.com / password123

# Start Server
npm run start:dev
```
The backend API will run at `http://localhost:3000`.

### 3. Frontend Setup
Open a new terminal in the root directory:
```bash
cd client
npm install

# Start Development Server
npm run dev
```
The application will be accessible at `http://localhost:5173`.

## 📂 Project Structure

```
Vivah/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components (Buttons, Inputs, ThemeToggle)
│   │   ├── pages/          # Dashboard, Vendors, Auth, Landing
│   │   ├── store/          # Zustand state stores
│   │   └── ...
│   └── ...
├── server/                 # NestJS Backend
│   ├── src/
│   │   ├── auth/           # Authentication logic (JWT, Local)
│   │   ├── users/          # User management
│   │   ├── vendors/        # Vendor profile management
│   │   └── prisma/         # Database connection service
│   └── prisma/
│       ├── schema.prisma   # Database schema
│       └── seed.ts         # Database seeder
└── ...
```

## 🔐 Demo Credentials

Use these credentials to explore the app:

| Role | Email | Password |
|------|-------|----------|
| **Couple** | `aditi@example.com` | `password123` |
| **Vendor** | `recall@pictures.com` | `password123` |

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any features or bug fixes.

---
**Crafted with ❤️ for the Modern Indian Wedding.**
