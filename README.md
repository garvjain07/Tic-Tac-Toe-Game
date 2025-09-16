# Modern Tic Tac Toe Game

A beautiful, responsive Tic Tac Toe game built with React and modern CSS3. Features both multiplayer and AI opponent modes with multiple difficulty levels.

![Modern Tic Tac Toe](https://img.shields.io/badge/React-18.3.1-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.1.5-646CFF.svg)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6.svg)

## ✨ Features

### Game Modes
- **👥 Player vs Player**: Play locally with a friend
- **🤖 Player vs Computer**: Challenge an AI opponent

### AI Difficulty Levels
- **Easy**: Makes some random moves for beginners
- **Medium**: Balanced gameplay with occasional mistakes
- **Hard**: Uses minimax algorithm for optimal moves

### Modern Design
- **🎨 Beautiful gradient backgrounds**: Eye-catching color schemes
- **✨ Smooth animations**: CSS3 transitions and transforms
- **📱 Responsive design**: Works on desktop, tablet, and mobile
- **🌟 Interactive hover effects**: Enhanced user experience
- **🎯 Visual feedback**: Winning animations and state indicators

### Additional Features
- **📊 Score tracking**: Persistent score board for multiple rounds
- **🔄 Quick restart**: Easy game reset functionality
- **⚡ Fast performance**: Built with Vite for lightning-fast development
- **♿ Accessibility**: Proper focus states and keyboard navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd tic-tac-toe-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/` to play the game!

## 🎮 How to Play

### Starting a Game
1. Choose your game mode from the main menu:
   - **Player vs Player**: Take turns with a friend
   - **Player vs Computer**: Play against the AI

2. If playing against the computer, select your preferred difficulty level

### Game Rules
- Players alternate turns placing their marks (❌ for Player 1, ⭕ for Player 2/Computer)
- First player to get three marks in a row (horizontally, vertically, or diagonally) wins
- If all 9 squares are filled without a winner, the game is a draw

### Controls
- **Click** any empty cell to place your mark
- **New Game** button to start a fresh game
- **Reset Scores** button to clear the score board
- **Back to Menu** button to return to mode selection

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── GameBoard.jsx    # Main game board and logic
│   ├── GameBoard.css    # Game board styling
│   ├── Cell.jsx         # Individual game cell
│   ├── Cell.css         # Cell styling with animations
│   ├── GameMenu.jsx     # Mode selection menu
│   ├── GameMenu.css     # Menu styling
│   ├── ScoreBoard.jsx   # Score tracking display
│   └── ScoreBoard.css   # Score board styling
├── utils/
│   └── gameLogic.js     # Game logic and AI algorithms
├── App.jsx              # Main app component
├── App.css              # Global app styling
├── index.css            # Global CSS and variables
└── main.jsx             # App entry point
```

## 🧠 AI Algorithm

The computer opponent uses the **Minimax algorithm** with alpha-beta pruning for optimal gameplay:

- **Minimax**: Evaluates all possible game states to find the best move
- **Alpha-Beta Pruning**: Optimizes performance by eliminating unnecessary branches
- **Difficulty Levels**: 
  - Easy: 70% random moves, 30% optimal
  - Medium: 40% random moves, 60% optimal  
  - Hard: 100% optimal moves

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Purple to blue (`#667eea` → `#764ba2`)
- **Secondary Gradient**: Teal to green (`#11998e` → `#38ef7d`)
- **Accent Colors**: Modern, accessible color palette

### Animations
- **Cell interactions**: Smooth hover and click effects
- **Winning celebrations**: Pulsing animation for winning cells
- **Transitions**: 300ms ease transitions throughout
- **Loading states**: Visual feedback for AI thinking

### Responsive Breakpoints
- **Desktop**: Full feature set with larger components
- **Tablet** (≤768px): Adjusted spacing and sizes
- **Mobile** (≤480px): Stacked layouts and touch-optimized controls

## 🛠️ Built With

- **React 18.3.1** - UI library with hooks
- **Vite 7.1.5** - Build tool and dev server
- **CSS3** - Modern styling with custom properties
- **JavaScript ES6+** - Game logic and algorithms

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- **🔊 Sound effects**: Audio feedback for moves and wins
- **🏆 Tournament mode**: Best of 3/5 series
- **💾 Save game state**: Resume games after browser refresh  
- **🌐 Online multiplayer**: Real-time multiplayer functionality
- **📈 Statistics**: Detailed gameplay statistics and history
- **🎨 Themes**: Multiple color schemes and visual themes

---

**Enjoy playing!** 🎮✨+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
