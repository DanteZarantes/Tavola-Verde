# Tavola Verde - Restaurant Website

Modern restaurant website built with Next.js, React, and TypeScript featuring an online menu, shopping cart, and user profile system.

## Features

- 🍽️ **Online Menu** - Browse through categorized menu items
- 🛒 **Shopping Cart** - Add items to cart with quantity management
- 👤 **User Profiles** - Register, login, and manage your profile
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Clean and elegant design with custom color scheme

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
tavola-verde/
├── app/
│   ├── menu/          # Menu page
│   ├── cart/          # Shopping cart page
│   ├── profile/       # User profile page
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
├── components/
│   └── Header.tsx     # Navigation header
├── lib/
│   ├── menuData.ts    # Menu items data
│   ├── CartContext.tsx # Cart state management
│   └── AuthContext.tsx # Authentication state
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Context API** - State management

## Color Scheme

- Primary: `#1E4D4D` (Dark teal)
- Gold: `#D4AF37` (Gold accent)
- Cream: `#E8D5B7` (Light background)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

Private project for Tavola Verde restaurant.
