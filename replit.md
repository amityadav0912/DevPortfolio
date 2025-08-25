# Portfolio Website

## Overview

This is a full-stack portfolio website for Amit Yadav, a Full Stack Developer currently working at Accenture. The application showcases professional experience, projects, skills, and achievements through a modern, responsive web interface. It's built as a single-page application with a React frontend and Express.js backend, featuring a contact form system and portfolio data management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: Shadcn/ui components built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Theme System**: Custom theme provider supporting light/dark modes with localStorage persistence

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API endpoints for contact form submissions and portfolio data retrieval
- **Data Layer**: In-memory storage implementation with interface abstraction for easy database migration
- **Validation**: Zod schemas shared between frontend and backend for consistent validation
- **Development**: Hot module replacement with Vite integration for seamless full-stack development

### Data Storage Solutions
- **Current Implementation**: In-memory storage using JavaScript Maps for development and testing
- **Database Ready**: Drizzle ORM configured for PostgreSQL with migration support
- **Schema Design**: Structured data models for users, contacts, and portfolio information using JSON columns for flexible content storage

### External Dependencies
- **Database**: Neon Database (PostgreSQL) configured but not yet implemented
- **UI Components**: Extensive Radix UI component library for accessible, unstyled primitives
- **Fonts**: Google Fonts integration (Inter, DM Sans, Fira Code, Geist Mono)
- **Icons**: Lucide React for consistent iconography
- **Development Tools**: ESBuild for production builds, TSX for development server, Drizzle Kit for database operations