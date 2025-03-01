// Weekly scores data structure
const weeklyScores = [
    // Week 1
    {
        ujjwal: 0,
        rudresh: 0,
        deepu: 1,
        shiven: 0
    }
    // Week 2
    
    // // Week 2
    // {
    //     ujjwal: 1,
    //     rudresh: 0,
    //     deepu: 99,
    //     shiven: 0
    // },
    // {
    //     ujjwal: 100,
    //     rudresh: 0,
    //     deepu: 679,
    //     shiven: 0
    // }
    // Add more weeks by copying and modifying the above structure
];

let currentWeek = 0;

// Function to show selected tab
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`button[onclick="showTab('${tabName}')"]`).classList.add('active');
    
    if (tabName === 'leaderboard') {
        updateLeaderboard();
    } else {
        displayWeekScores();
    }
}

// Function to change week
function changeWeek(delta) {
    const newWeek = currentWeek + delta;
    if (newWeek >= 0 && newWeek < weeklyScores.length) {
        currentWeek = newWeek;
        displayWeekScores();
    }
}

// Function to display scores for current week
function displayWeekScores() {
    document.getElementById('weekTitle').textContent = `Week ${currentWeek + 1}`;
    const scores = weeklyScores[currentWeek];
    
    // Force complete any ongoing animations
    const playerNames = ['ujjwal', 'rudresh', 'deepu', 'shiven'];
    playerNames.forEach(player => {
      const element = document.getElementById(`${player}-score`);
      if (element) {
        // Clear any previous animation
        if (element._animationFrame) {
          cancelAnimationFrame(element._animationFrame);
          element._animationFrame = null;
        }
        
        // Get the current displayed score
        const oldScore = parseInt(element.textContent || '0');
        
        // Get the new score from the current week
        const newScore = scores[player] || 0;
        
        // Update with animation
        animateNumber(element, oldScore, newScore);
      }
    });
  }

// Function to animate number changes
function animateNumber(element, start, end) {
    // Cancel any existing animation
    if (element._animationFrame) {
      cancelAnimationFrame(element._animationFrame);
    }
  
    const duration = 1000;
    const startTime = performance.now();
    
    const updateNumber = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentValue = Math.round(start + (end - start) * progress);
      element.textContent = currentValue;
      
      if (progress < 1) {
        element._animationFrame = requestAnimationFrame(updateNumber);
      } else {
        // Ensure final value is exactly right
        element.textContent = end;
        element._animationFrame = null;
      }
    };
    
    element._animationFrame = requestAnimationFrame(updateNumber);
  }

// Function to calculate total scores and update leaderboard
function updateLeaderboard() {
    const gamesWon = {};
    
    // Initialize wins
    ['ujjwal', 'rudresh', 'deepu', 'shiven'].forEach(player => {
        gamesWon[player] = 0;
    });
    
    // Calculate total games won
    weeklyScores.forEach(week => {
        Object.entries(week).forEach(([player, wins]) => {
            gamesWon[player] += wins;
        });
    });
    
    // Sort players by games won
    const sortedPlayers = Object.entries(gamesWon)
        .sort(([,a], [,b]) => b - a)
        .map(([player]) => player);
    
    // Update podium
    for (let i = 0; i < 3; i++) {
        const position = ['first', 'second', 'third'][i];
        const player = sortedPlayers[i];
        const element = document.getElementById(`${position}-place`);
        element.querySelector('.player-name').textContent = player.charAt(0).toUpperCase() + player.slice(1);
        element.querySelector('.podium-base').textContent = gamesWon[player];
    }
    
    // Update leaderboard table
    const leaderboardRows = document.getElementById('leaderboard-rows');
    leaderboardRows.innerHTML = '';
    
    sortedPlayers.forEach((player, index) => {
        const row = document.createElement('div');
        row.className = 'leaderboard-row';
        row.innerHTML = `
            <span>${index + 1}</span>
            <span>${player.charAt(0).toUpperCase() + player.slice(1)}</span>
            <span>${gamesWon[player]} wins</span>
        `;
        leaderboardRows.appendChild(row);
    });
}

// Initialize the display
displayWeekScores();
