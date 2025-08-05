# Adiyuvaa Foundation NGO Website

## Overview

This is a full-stack web application for the Adiyuvaa Foundation, an Indian NGO focused on youth empowerment through education, skills development, and food relief programs. The application features a modern, responsive design showcasing the organization's mission, programs, impact stories, news updates, and a contact system for community engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The client-side application is built as a **static React application** with **TypeScript** and follows a component-driven architecture:

- **UI Framework**: React with TypeScript for type safety and modern component patterns
- **Styling**: Tailwind CSS with a custom design system featuring NGO-specific color palette (orange, blue, green themes)
- **Component Library**: Shadcn/ui components providing consistent, accessible UI elements
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Static Data**: All content is embedded directly in components for a truly static website

The frontend follows a single-page application (SPA) pattern with modular components organized by feature:
- `components/` - Reusable UI components and page sections
- `pages/` - Route-level components  
- `hooks/` - Custom React hooks for shared logic
- `lib/` - Utility functions and configuration

### Static Website Architecture

This is now a **frontend-only static website** with the following characteristics:

- **No Backend**: All data is hardcoded within React components
- **Static Content**: News articles, testimonials, and organizational information are embedded in the codebase
- **Form Handling**: Contact form provides user feedback but does not persist data
- **Build Output**: Generates static HTML, CSS, and JavaScript files for hosting
- **Development**: Uses Vite development server for local development and hot reloading

### Data Management

The application uses **static data structures** within React components:

- **News Articles**: Hardcoded array of news items with titles, excerpts, images, and dates
- **Contact Information**: Static organization details embedded in components
- **Program Information**: Hardcoded program descriptions and features
- **Impact Statistics**: Static numbers and metrics displayed in components

### Authentication and Authorization

Implements a **public-facing static website** architecture:
- All content is publicly accessible
- No user authentication required
- Contact form provides feedback but doesn't store data
- Fully client-side application suitable for static hosting

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