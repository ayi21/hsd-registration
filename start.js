function updateLineup(team, player) {
            const lineup = document.getElementById(`lineup-${team}`);
            if (lineup.children.length < 6) {
                let playerItem = document.createElement('li');
                playerItem.textContent = player;
                playerItem.classList.add('list-group-item');
                lineup.appendChild(playerItem);
            } else {
                alert("You can only select 6 players.");
    }
}
