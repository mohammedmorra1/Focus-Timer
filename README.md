# Focus Timer

A minimalist web-based focus timer application designed to enhance productivity during work and study sessions. Combines time tracking with ambient audio for an immersive focus experience.

![Focus Timer](https://img.shields.io/badge/React-19.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue) ![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF)

## Features

- ⏱️ **Full-featured Timer** with hours:minutes:seconds display
- 🔄 **Persistent State** - Timer automatically saves and restores across browser sessions (24-hour retention)
- ⌨️ **Keyboard Controls** - Use spacebar to start/stop timer quickly
- 🎵 **Ambient Audio Player** - Built-in brown noise with mute/unmute controls
- 📱 **Responsive Design** - Clean interface that works seamlessly across devices
- 🌈 **Animated Gradient Background** - Calming visual environment with smooth transitions

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/focus-timer.git
cd focus-timer
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Usage

1. **Timer Controls**:

   - Click "Start" to begin timing your focus session
   - Click "Stop" to pause the timer
   - Click "Reset" to clear the timer and start fresh
   - Press spacebar for quick start/stop toggle

2. **Audio Controls**:

   - Click the speaker icon to mute/unmute the brown noise
   - Audio plays automatically in a loop (muted by default)

3. **Data Persistence**:
   - Your timer state is automatically saved
   - If you close and reopen the browser within 24 hours, your timer will resume where you left off

## Technology Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Hooks with localStorage persistence
- **Audio**: HTML5 Audio API

## Project Structure

```
src/
├── components/
│   ├── Timer.tsx          # Main timer component with state management
│   ├── Player.tsx         # Audio player component
│   ├── AnimatedGradient.tsx  # Background animation
│   └── GlobalKeyListener.tsx  # Keyboard event handling
├── App.tsx                # Main application component
└── assets/                # Audio files and icons
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/) for fast development
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
