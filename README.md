# 🎴 Card Game Score Tracker

A fun and interactive web application to track wins and maintain leaderboards for card game sessions with friends! Built as a learning project to practice web development fundamentals.

## ✨ Features

- **Multi-Player Support**: Track scores for up to 4 players (Ujjwal, Rudresh, Deepu, Shiven)
- **Weekly Progression**: Navigate through different weeks of gaming sessions
- **Animated Score Updates**: Smooth number animations when scores change
- **Real-Time Leaderboard**: Dynamic ranking system with podium display
- **Card Game Theme**: Beautiful card suit symbols (♥️♠️♦️♣️) for visual appeal
- **Responsive Design**: Works on desktop and mobile devices

## 🎯 Live Demo

Check out the live application: [Fun Web Dev](https://ujjwal238.github.io/Fun_web_dev/)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling and responsive design
- **JavaScript (ES6+)**: Interactive functionality and animations
- **GitHub Pages**: Hosting and deployment

## 🎮 How It Works

### Player Management
The application tracks wins for four players:
- **U** (Ujjwal) - ♥️ Hearts
- **R** (Rudresh) - ♠️ Spades  
- **D** (Deepu) - ♣️ Clubs
- **S** (Shiven) - ♦️ Diamonds

### Weekly Tracking
- Navigate between different weeks using the week selector
- Each week maintains separate win counts
- Historical data is preserved across sessions

### Leaderboard System
- **Podium Display**: Top 3 players shown with 🥇🥈🥉 rankings
- **Full Leaderboard**: Complete ranking table with total wins
- **Real-Time Updates**: Rankings update automatically as scores change

### Animation Features
- Smooth number transitions when scores update
- 1-second duration animations for visual feedback
- Prevents animation conflicts with proper state management

## 📁 Project Structure

```
Fun_web_dev/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── .gitignore         # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript (for modifications)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Ujjwal238/Fun_web_dev.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Fun_web_dev
   ```

3. Open `index.html` in your web browser:
   ```bash
   open index.html
   # or
   python -m http.server 8000  # For local server
   ```

## 💡 Usage

### Adding Wins
1. Click on a player's win counter to increment their score
2. Watch the animated number update
3. See real-time leaderboard changes

### Week Navigation
1. Use the week selector to switch between different time periods
2. Each week maintains independent scoring
3. Leaderboard calculates total wins across all weeks

### Viewing Rankings
- Check the podium for top 3 players
- View the complete leaderboard table below
- Rankings update automatically based on total wins

## 🔧 Customization

### Adding New Players
1. Update the `weeklyScores` array in `script.js`
2. Add corresponding HTML elements in `index.html`
3. Update the player arrays in JavaScript functions

### Styling Changes
- Modify `styles.css` for visual customizations
- Card suit themes can be changed in CSS
- Color schemes and animations are easily adjustable

### Additional Features
- Add more weeks by expanding the `weeklyScores` array
- Implement local storage for data persistence
- Add export functionality for sharing results

## 📊 Technical Implementation

### Data Structure
```javascript
const weeklyScores = [
    { ujjwal: 0, rudresh: 0, deepu: 0, shiven: 0 },  // Week 1
    { ujjwal: 0, rudresh: 0, deepu: 0, shiven: 0 },  // Week 2
    // ... more weeks
];
```

### Key Functions
- `displayWeekScores()`: Updates UI with current week data
- `animateNumber()`: Handles smooth score transitions
- `updateLeaderboard()`: Calculates and displays rankings
- `changeWeek()`: Navigation between time periods

## 🎨 Design Philosophy

This project embraces a **playful card game aesthetic** with:
- Card suit symbols for visual identity
- Clean, readable typography
- Smooth animations for user engagement
- Responsive design for all devices
- Intuitive user interface

## 🐛 Known Issues

- Scores reset on page refresh (no persistence)
- Limited to 4 predefined players
- Week navigation is manual only

## 🚀 Future Enhancements

- [ ] Local storage for data persistence
- [ ] Add/remove players dynamically
- [ ] Export scores to CSV/JSON
- [ ] Game history and statistics
- [ ] Sound effects for score updates
- [ ] Dark/light theme toggle
- [ ] Mobile app version

## 🤝 Contributing

This is a personal learning project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ujjwal** - [GitHub Profile](https://github.com/Ujjwal238)

## 🙏 Acknowledgments

- Built as a fun learning project to practice web development
- Inspired by classic card game scoring systems
- Thanks to friends for testing and feedback

---

*Happy Gaming! 🎮*
