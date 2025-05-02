# ReactDex
A modern Pokedex application built with React and TypeScript, featuring a clean UI and comprehensive Pokemon information.

## 🚀 Features
- **Pokemon Grid**: Displays the first generation of Pokemon (151) in a responsive grid layout
- **Search Functionality**: Find Pokemon by name with real-time filtering
- **Detailed View**: 
  - Pokemon image and basic information
  - Height, weight, and base experience
  - Type information with visual indicators
  - Comprehensive stats display in a clean, rounded container
- **Responsive Design**: 
  - Sticky Pokemon details panel
  - Mobile-friendly layout
  - Smooth scrolling experience

## 🛠️ Technologies Used
- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with modern features
- **API**: PokeAPI for Pokemon data
- **Code Quality**: ESLint for linting and code standards

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-pokedex.git
   cd react-pokedex
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

## 📁 Project Structure
```
react-pokedex/
├── src/
│   ├── pokemon_grid/          # Main Pokemon grid component and related files
│   │   ├── components/        # Reusable components
│   │   ├── model/            # Type definitions and models
│   │   └── PokemonGrid.tsx   # Main grid component
│   ├── header/               # Header components
│   ├── assets/              # Static assets
│   ├── fonts/               # Custom fonts
│   └── index.css            # Global styles
├── public/                  # Public assets
└── package.json            # Project dependencies and scripts
```

## 🎮 Usage

### Viewing Pokemon
- Scroll through the grid to browse Pokemon
- Click on a Pokemon to view its detailed information
- The details panel will stick to the top while scrolling

### Searching Pokemon
- Use the search bar at the top to filter Pokemon by name
- The grid updates in real-time as you type

### Pokemon Details
Each Pokemon's details include:
- Pokemon number and name
- Front sprite image
- Type information
- Physical attributes (height, weight)
- Base experience
- Detailed stats in a rounded container

## 🧪 Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

### Code Style
- Follows ESLint configuration
- Uses TypeScript for type safety
- Implements React best practices

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
