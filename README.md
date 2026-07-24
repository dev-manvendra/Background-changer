# Background Changer

A simple React app that lets you change the background color of the page by clicking on colored buttons.

## Live Demo

[View on Vercel](https://your-app.vercel.app)

## Tech Stack

- React 19
- Vite 8

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
  App.jsx              # Main component with color state
  main.jsx             # Entry point
  index.css            # Global styles
  components/
    Button.jsx         # Reusable color button component
```

## How It Works

- The `App` component holds the current background color in state.
- Each `Button` receives a color and a setter function as props.
- Clicking a button updates the state, which changes the page background.
