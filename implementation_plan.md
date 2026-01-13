# Implementation Plan - Indian Luxury Wedding Event Management Platform

## 1. Executive Summary
This project aims to build a production-grade, mobile-first web application for planning Indian weddings. The platform connects families with vendors, manages budgets, guests, and timelines, all wrapped in a luxury, high-end aesthetic. The architecture enforces strict separation of concerns, scalability, and security.

## 2. Technology Stack

### Frontend (Client)
- **Framework**: React (Vite)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (CSS Modules) with extensive use of CSS variables for theming (Luxury Palette).
- **Animation**: Framer Motion (Page transitions, micro-interactions).
- **State Management**: React Context / Zustand (for simple global state like Auth).
- **Routing**: React Router DOM.
- **Icons**: Lucide React / Heroicons.

### Backend (Server)
- **Framework**: NestJS (TypeScript)
- **Runtime**: Node.js
- **API**: REST (clean, versioned).
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Auth**: JWT (Passport.js strategy), handling Email/Password & Google OAuth.

## 3. Architecture & Project Structure
The project will use a standard monorepo-style folder structure (without Lerna/Nx for simplicity unless needed):
```
/prathyush
  /client         # React Frontend
  /server         # NestJS Backend
  /shared         # Shared types (optional)
  /docs           # Documentation
  implementation_plan.md
  task.md
```

## 4. Database Schema (Preliminary)

### Users
- `id` (UUID)
- `role` (USER, VENDOR, ADMIN)
- `email`, `phone`, `password_hash`
- `googleId`

### Profiles
- `VendorProfile`: services, pricing, city, rating.
- `UserProfile`: links to active wedding.

### Weddings
- `id` (UUID)
- `userId` (One-to-One with User)
- `date`, `budget` (planned vs actual)

### Ceremonies
- `id`, `weddingId`
- `type` (Haldi, Mehendi, Sangeet, Wedding, Reception)
- `date`, `location`

### Guests
- `id`, `weddingId`
- `name`, `phone`, `status` (Invited, Confirmed, etc.)
- `rsvp_status`

### Vendors & Bookings
- `VendorService`: type, cost.
- `Booking`: `weddingId`, `vendorId`, `status`, `amount`.

## 5. Visual Design Language (Luxury Indian)
- **Colors**: Deep Royal Red (`#8B0000`), Gold (`#D4AF37`), Cream/Ivory backgrounds, Midnight Blue accents for dark mode.
- **Typography**: Serif headings (e.g., Playfair Display) for elegance, Sans-serif body (e.g., Lato/Inter) for readability.
- **Texture**: Subtle ornamental patterns (mandalas) in backgrounds with low opacity.

## 6. Implementation Roadmap

### Phase 1: Setup & Core Infrastructure (Current)
- Initialize Client (Vite+React+TS) & Server (NestJS).
- Configure ESLint/Prettier.
- Set up PostgreSQL & Prisma.

### Phase 2: Authentication & User Management
- Implement JWT Auth (NestJS).
- Build Login/Signup Screens (Client) with animations.
- Google OAuth integration.

### Phase 3: Core Wedding Features
- Wedding onboarding flow (Date, Budget, Name).
- Dashboard (Timeline view).
- Guest Management.

### Phase 4: Vendor Marketplace
- Vendor listing & Profile creation.
- Booking flow.

### Phase 5: Polish & AI
- Framer Motion transitions.
- AI Checklist & Budget generation.
