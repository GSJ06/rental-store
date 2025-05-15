# User Profile Management System

A modern, responsive user profile management system built with React, TypeScript, and Tailwind CSS. 

## Features

-  Profile information management
-  Password change functionality
-  Fully responsive design
-  Real-time form validation
-  Email notification and Dark mode preferences

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Form Management**: React Hook Form
- **Form Validation**: Zod
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/GSJ06/rental-store.git
   cd rental-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── assets/         # Static assets
├── components/     # React components
├── types/         # TypeScript types and schemas
├── data/          # Mock data and constants
└── App.tsx        # Main application component
```

## Key Decisions

1. **Component Architecture**
   - Modular components for better maintainability
   - Clear separation of concerns

2. **Form Handling**
   - React Hook Form for efficient form management
   - Zod for type-safe validation
   - Real-time validation feedback

3. **Styling**
   - Tailwind CSS for rapid development
   - Mobile-first responsive design
   - Dark mode support

4. **Type Safety**
   - TypeScript for better development experience
   - Zod schemas for runtime validation
   - Proper type definitions for all data

## License

This project is licensed under the MIT License.

