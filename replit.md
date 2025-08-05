# Adiyuvaa Foundation NGO Website

## Overview

This is a full-stack web application for the Adiyuvaa Foundation, an Indian NGO focused on youth empowerment through education, skills development, and food relief programs. The application features a modern, responsive design showcasing the organization's mission, programs, impact stories, news updates, and a contact system for community engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The client-side application is built using **React** with **TypeScript** and follows a component-driven architecture:

- **UI Framework**: React with TypeScript for type safety and modern component patterns
- **Styling**: Tailwind CSS with a custom design system featuring NGO-specific color palette (orange, blue, green themes)
- **Component Library**: Shadcn/ui components providing consistent, accessible UI elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

The frontend follows a single-page application (SPA) pattern with modular components organized by feature:
- `components/` - Reusable UI components and page sections
- `pages/` - Route-level components  
- `hooks/` - Custom React hooks for shared logic
- `lib/` - Utility functions and configuration

### Backend Architecture

The server-side application uses **Express.js** with **TypeScript** in an ESM module setup:

- **API Framework**: Express.js with RESTful endpoints for contact submissions and news retrieval
- **Request Handling**: JSON body parsing with comprehensive error handling and logging middleware
- **Development Environment**: Vite middleware integration for seamless development experience
- **Static Serving**: Production-ready static file serving with Vite build output

The backend implements a simple layered architecture:
- **Routes** (`server/routes.ts`) - API endpoint definitions and request/response handling
- **Storage Layer** (`server/storage.ts`) - Data access abstraction with in-memory implementation
- **Server Configuration** (`server/index.ts`) - Express app setup, middleware, and error handling

### Data Storage Solutions

The application uses a **PostgreSQL** database accessed through **Drizzle ORM**:

- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Schema Management**: Centralized schema definitions in `shared/schema.ts` with Zod validation
- **Development Storage**: In-memory storage implementation for development/testing

Database schema includes:
- **Contacts**: User inquiries and contact form submissions
- **News Articles**: Dynamic content management for organizational updates

### Authentication and Authorization

Currently implements a **public-facing** architecture without user authentication:
- All content is publicly accessible
- Contact form submissions are stored without user accounts
- Admin functionality is implicit through direct database access

### Build and Development Tools

- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Full type safety across client, server, and shared code
- **Package Management**: npm with lockfile for dependency consistency
- **Development Workflow**: Hot module replacement and error overlays for efficient development

## External Dependencies

### Database Services
- **Neon Database** - Serverless PostgreSQL hosting via `@neondatabase/serverless`
- **Drizzle Kit** - Database migrations and schema management

### UI Libraries
- **Radix UI** - Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS** - Utility-first CSS framework with custom design tokens
- **Lucide React** - Consistent icon library for UI elements

### Development Tools
- **Vite** - Build tool and development server
- **Replit Integration** - Runtime error handling and development banner via Replit plugins

### Form and Validation
- **React Hook Form** - Performant form handling with minimal re-renders
- **Zod** - TypeScript-first schema validation for forms and API data
- **Hookform Resolvers** - Integration layer between React Hook Form and Zod

### Utility Libraries
- **date-fns** - Date manipulation and formatting
- **clsx & class-variance-authority** - Conditional CSS class composition
- **cmdk** - Command palette functionality (prepared for future features)

The architecture prioritizes developer experience with TypeScript throughout, modern tooling, and a clear separation of concerns between client and server code while sharing type definitions and validation schemas.