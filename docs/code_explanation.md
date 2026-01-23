# Code Architecture: Personal Finance Dashboard

This is a lightweight **Next.js 14** application consisting of a central dashboard and detail pages.

## Core Components
- **`app/page.tsx`**: The main entry point. Defines the `assets` array (data model) and renders the grid of `Card` components.
- **`components/ui/*`**: Reusable UI elements (Cards, Buttons) powered by Tailwind CSS.

## Data Model
Assets are defined with:
- `title`: Display name.
- `href`: Route to detail page.
- `icon`: Lucide React icon.
- `description`: Short summary.
- `risk`: Text label (e.g., "Extreme").

## Routing
The app uses file-based routing:
- `/` -> `app/page.tsx`
- `/crypto` -> `app/crypto/page.tsx` (assumed structure based on links)
- etc.
