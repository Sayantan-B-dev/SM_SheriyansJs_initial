// Helper function to render dots inside the dice box
function renderDice(containerId, value) {
    const dice = document.getElementById(containerId);
    dice.innerHTML = ""; // Clear previous dots

    const dotPositions = {
        1: [4],
        2: [0, 8],
        3: [0, 4, 8],
        4: [0, 2, 6, 8],
        5: [0, 2, 4, 6, 8],
        6: [0, 2, 3, 5, 6, 8]
    };

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        if (dotPositions[value].includes(i)) {
            cell.classList.add("dot");
        }
        dice.appendChild(cell);
    }
}

// Score tracking
let p1Score = 0, p2Score = 0;

// Roll Dice
document.getElementById("roll-btn").addEventListener("click", () => {
    const p1Roll = Math.floor(Math.random() * 6) + 1;
    const p2Roll = Math.floor(Math.random() * 6) + 1;

    renderDice("dice1", p1Roll);
    renderDice("dice2", p2Roll);

    if (p1Roll > p2Roll) {
        p1Score++;
        document.getElementById("dice-result").textContent = "Player 1 Wins!";
    } else if (p2Roll > p1Roll) {
        p2Score++;
        document.getElementById("dice-result").textContent = "Player 2 Wins!";
    } else {
        document.getElementById("dice-result").textContent = "It's a Draw!";
    }

    document.getElementById("player1-score").textContent = `Score: ${p1Score}`;
    document.getElementById("player2-score").textContent = `Score: ${p2Score}`;
});

// Reset Game
document.getElementById("reset-dice").addEventListener("click", () => {
    p1Score = 0;
    p2Score = 0;

    document.getElementById("player1-score").textContent = "Score: 0";
    document.getElementById("player2-score").textContent = "Score: 0";
    renderDice("dice1", 1);
    renderDice("dice2", 1);
    document.getElementById("dice-result").textContent = "";
});

// Initialize dice faces on page load
renderDice("dice1", 1);
renderDice("dice2", 1);
document.getElementById("roll-btn").addEventListener("click", () => {
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");

    dice1.classList.add("rolling");
    dice2.classList.add("rolling");

    let rollAnimation = 0;
    const rollInterval = setInterval(() => {
        const temp1 = Math.floor(Math.random() * 6) + 1;
        const temp2 = Math.floor(Math.random() * 6) + 1;
        renderDice("dice1", temp1);
        renderDice("dice2", temp2);
        rollAnimation++;
        if (rollAnimation >= 5) {
            clearInterval(rollInterval);

            const p1Roll = Math.floor(Math.random() * 6) + 1;
            const p2Roll = Math.floor(Math.random() * 6) + 1;

            renderDice("dice1", p1Roll);
            renderDice("dice2", p2Roll);

            // Remove rolling animation after result
            setTimeout(() => {
                dice1.classList.remove("rolling");
                dice2.classList.remove("rolling");
            }, 300);

            if (p1Roll > p2Roll) {
                p1Score++;
                document.getElementById("dice-result").textContent = "Player 1 Wins!";
            } else if (p2Roll > p1Roll) {
                p2Score++;
                document.getElementById("dice-result").textContent = "Player 2 Wins!";
            } else {
                document.getElementById("dice-result").textContent = "It's a Draw!";
            }

            document.getElementById("player1-score").textContent = `Score: ${p1Score}`;
            document.getElementById("player2-score").textContent = `Score: ${p2Score}`;
        }
    }, 100); // Interval for animation frames
});


const teams = [
    {
      name: "Chennai Super Kings",
      captain: "MS Dhoni",
      mvp: "Ruturaj Gaikwad",
      titles: 5,
      color: "#f1c40f",
      logoText: "CSK"
    },
    {
      name: "Mumbai Indians",
      captain: "Hardik Pandya",
      mvp: "Suryakumar Yadav",
      titles: 5,
      color: "#2980b9",
      logoText: "MI"
    },
    {
      name: "Royal Challengers Bangalore",
      captain: "Faf du Plessis",
      mvp: "Virat Kohli",
      titles: 0,
      color: "#e74c3c",
      logoText: "RCB"
    },
    {
      name: "Kolkata Knight Riders",
      captain: "Shreyas Iyer",
      mvp: "Andre Russell",
      titles: 2,
      color: "#8e44ad",
      logoText: "KKR"
    },
    {
      name: "Rajasthan Royals",
      captain: "Sanju Samson",
      mvp: "Jos Buttler",
      titles: 1,
      color: "#9b59b6",
      logoText: "RR"
    },
    {
      name: "Sunrisers Hyderabad",
      captain: "Pat Cummins",
      mvp: "Heinrich Klaasen",
      titles: 1,
      color: "#d35400",
      logoText: "SRH"
    },
    {
      name: "Delhi Capitals",
      captain: "Rishabh Pant",
      mvp: "David Warner",
      titles: 0,
      color: "#3498db",
      logoText: "DC"
    },
    {
      name: "Lucknow Super Giants",
      captain: "KL Rahul",
      mvp: "Marcus Stoinis",
      titles: 0,
      color: "#16a085",
      logoText: "LSG"
    },
    {
      name: "Gujarat Titans",
      captain: "Shubman Gill",
      mvp: "Rashid Khan",
      titles: 1,
      color: "#34495e",
      logoText: "GT"
    },
    {
      name: "Punjab Kings",
      captain: "Shikhar Dhawan",
      mvp: "Liam Livingstone",
      titles: 0,
      color: "#c0392b",
      logoText: "PBKS"
    }
  ];
  
  document.getElementById("pick-team-btn").addEventListener("click", () => {
    const randomTeam = teams[Math.floor(Math.random() * teams.length)];
    
    document.getElementById("team-name").textContent = randomTeam.name;
    document.getElementById("team-captain").textContent = randomTeam.captain;
    document.getElementById("team-mvp").textContent = randomTeam.mvp;
    document.getElementById("team-titles").textContent = randomTeam.titles;
    
    const logo = document.getElementById("team-logo-placeholder");
    logo.style.backgroundColor = randomTeam.color;
    logo.textContent = randomTeam.logoText;
  
    document.getElementById("team-details").classList.remove("hidden");
  });
  
  document.getElementById("reset-team").addEventListener("click", () => {
    document.getElementById("team-details").classList.add("hidden");
    document.getElementById("team-name").textContent = "";
    document.getElementById("team-captain").textContent = "";
    document.getElementById("team-mvp").textContent = "";
    document.getElementById("team-titles").textContent = "";
    const logo = document.getElementById("team-logo-placeholder");
    logo.style.backgroundColor = "#ccc";
    logo.textContent = "";
  });
  