/** @format */

let players = [
	{
		username: "user5",
		fortnite: 435,
		minecraft: 894,
		crossfire: 9093,
	},
	{
		username: "use2",
		fortnite: 530,
		minecraft: 1149,
		crossfire: 5904,
	},
	{
		username: "user4",
		fortnite: 3930,
		minecraft: 2749,
		crossfire: 8004,
	},
	{
		username: "user6",
		fortnite: 9230,
		minecraft: 450,
		crossfire: 300,
	},
	{
		username: "user7",
		fortnite: 2701,
		minecraft: 7620,
		crossfire: 5804,
	},
	{
		username: "user",
		fortnite: 9130,
		minecraft: 1649,
		crossfire: 5704,
	},
];

let total_points = []

for (let i = 0; i < players.length; i++) {
	let total = 0;
	for (let key in players[i]) {
		if (key != "username") {
			total += players[i][key];
		}
	}
	total_points.push(total);
	console.log(players[i].username + " has total points " + total);
	// player with fortnite more points will be ranked higher
	if (i > 0) {
		if (total_points[i] == total_points[i - 1]) {
			if (players[i].fortnite > players[i - 1].fortnite) {
				let temp = players[i];
				players[i] = players[i - 1];
				players[i - 1] = temp;
			}
		}
	}

	// player with minecraft more points will be ranked higher
	if (i > 0) {
		if (total_points[i] == total_points[i - 1]) {
			if (players[i].fortnite == players[i - 1].fortnite) {
				if (players[i].minecraft > players[i - 1].minecraft) {
					let temp = players[i];
					players[i] = players[i - 1];
					players[i - 1] = temp;
				}
			}
		}
	}

	// player with crossfire more points will be ranked higher
	if (i > 0) {
		if (total_points[i] == total_points[i - 1]) {
			if (players[i].fortnite == players[i - 1].fortnite) {
				if (players[i].minecraft == players[i - 1].minecraft) {
					if (players[i].crossfire > players[i - 1].crossfire) {
						let temp = players[i];
						players[i] = players[i - 1];
						players[i - 1] = temp;
					}
				}
			}
		}
	}

	// check if players has the same total points and same other points will be ordered by username
	if (i > 0) {
		if (total_points[i] == total_points[i - 1]) {
			if (players[i].fortnite == players[i - 1].fortnite) {
				if (players[i].minecraft == players[i - 1].minecraft) {
					if (players[i].crossfire == players[i - 1].crossfire) {
						if (players[i].username > players[i - 1].username) {
							let temp = players[i];
							players[i] = players[i - 1];
							players[i - 1] = temp;
						}
					}
				}
			}
		}
	}
}



let ranking = [];
for (let i = 0; i < total_points.length; i++) {
    let rank = 1;
    for (let j = 0; j < total_points.length; j++) {
        if (total_points[i] < total_points[j]) {
            rank++;
        }
    }
    ranking.push(rank);
    console.log(players[i].username + " has rank " + rank);
}
