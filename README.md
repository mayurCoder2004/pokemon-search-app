# Pokémon Dex

A simple React application that allows users to search through a collection of Pokémon using the [PokéAPI](https://pokeapi.co/).


## Features

- View a grid of Pokémon with their images, names, and IDs
- Search Pokémon by name with real-time filtering
- Responsive design that works on all device sizes
- Smooth hover animations for each Pokémon card

## Technology Stack

- React 19.0.0
- Axios for API requests
- CSS for styling and animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/pokemon-search-app.git
   cd pokemon-search-app
   ```

2. Install dependencies
   ```
   npm install
   ```
   or with yarn:
   ```
   yarn install
   ```

3. Start the development server
   ```
   npm start
   ```
   or with yarn:
   ```
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
pokemon-search-app/
├── public/                 # Public assets
├── src/                    # Source files
│   ├── components/         # React components
│   │   ├── PokemonCard.js  # Card component for each Pokémon
│   │   └── SearchBar.js    # Search input component
│   ├── App.css             # Main application styles
│   ├── App.js              # Main application component
│   ├── index.css           # Global styles
│   └── index.js            # Application entry point
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## How It Works

The app fetches data from the PokéAPI when it first loads, retrieving information for 100 Pokémon. The data is stored in state and filtered in real-time as the user types in the search bar.

Each Pokémon is displayed in a card showing:
- The Pokémon's image
- The Pokémon's name (capitalized)
- The Pokémon's ID number

## API Reference

This project uses the [PokéAPI](https://pokeapi.co/), a free RESTful Pokémon API.

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Future Enhancements

Potential improvements that could be added:
- Detailed view for each Pokémon when clicked
- Filtering by Pokémon type
- Pagination or infinite scrolling for more Pokémon
- Adding Pokémon stats and abilities
- Theme toggle (light/dark mode)

## License

This project is licensed under the MIT License.

## Acknowledgments

- [PokéAPI](https://pokeapi.co/) for providing the Pokémon data
- [Create React App](https://create-react-app.dev/) for the project setup
