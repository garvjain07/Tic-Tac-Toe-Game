# Tic Tac Toe Game

A modern, responsive Tic Tac Toe game built with React and CSS. Play locally with a friend or challenge the computer in Easy, Medium, or Hard mode.

**Live demo:** https://tic-tac-toe-chi-liac.vercel.app/

![React](https://img.shields.io/badge/React-19-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7-646CFF.svg)

## Features

- Player vs Player mode
- Player vs Computer mode
- Easy, Medium, and Hard AI difficulty
- Live score tracking for players and draws
- Winning-cell highlight and game status
- Responsive, touch-friendly interface
- Reset game and reset score controls
- Keyboard-accessible buttons and focus states

## Game Rules

1. Player 1 uses `X` and Player 2 or the computer uses `O`.
2. Players alternate placing marks in empty cells.
3. The first player to place three marks in a row wins.
4. A full board without a winner is recorded as a draw.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/garvjain07/tic-tac-toe.git
cd tic-tac-toe
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:5173/`.

### Production

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build
```

## Project Structure

```text
src/
├── components/
│   ├── Cell.jsx
│   ├── GameBoard.jsx
│   ├── GameMenu.jsx
│   └── ScoreBoard.jsx
├── utils/
│   └── gameLogic.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
public/
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Deployment

This project can be deployed directly to Vercel or any static hosting service.

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes.
4. Push the branch.
5. Open a pull request.

## License

This project is open source and available under the MIT License.
