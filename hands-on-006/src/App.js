import {
	EvenPlayers,
	IndianPlayers,
	ListofIndianPlayers,
	OddPlayers,
} from "./components/IndianPlayers";
import { ListofPlayers, ScoreBelow70 } from "./components/ListofPlayers";

const players = [
	{ name: "MS Dhoni", score: 75 },
	{ name: "Virat Kohli", score: 60 },
	{ name: "Rohit Sharma", score: 65 },
	{ name: "Hardik Pandaya", score: 20 },
	{ name: "Rishabh Pant", score: 40 },
	{ name: "Yuvraj Singh", score: 35 },
	{ name: "Sachin Tendulkar", score: 95 },
	{ name: "Sourav Ganguly", score: 38 },
	{ name: "Kuldeep Yadav", score: 24 },
	{ name: "Washington Sundar", score: 22 },
	{ name: "Kapil Dev", score: 85 },
];

const IndianTeam = [
	"Sachin1",
	"Dhoni2",
	"Virat3",
	"Rohit4",
	"Yuvraj5",
	"Raina6",
];

function App() {
	let flag = false;
	if (flag) {
		return (
			<div>
				<h2> List of Players </h2>
				<ListofPlayers players={players} />
				<hr />
				<h2> List of Players having Scores Less than 70</h2>
				<ScoreBelow70 players={players} />
			</div>
		);
	} else {
		return (
			<div>
				<h2> Indian Team</h2>
				<h2>Odd Players</h2>
				<ul>{OddPlayers(IndianTeam)}</ul>
				<hr />
				<h2>Even Players</h2>
				<ul>{EvenPlayers(IndianTeam)}</ul>
				<hr />
				<h2>List of Indian Players Merged:</h2>
				<ListofIndianPlayers IndianPlayers={IndianPlayers} />
			</div>
		);
	}
}

export default App;
