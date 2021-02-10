export const ListofPlayers = ({ players }) => {
	return (
		<div>
			<ul>
				{players.map((item, index) => {
					return (
						<li key={index}>
							Mr. {item.name} <span> {item.score} </span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export const ScoreBelow70 = ({ players }) => {
	return (
		<ul>
			{players
				.filter((item) => item.score < 70)
				.map((item, index) => {
					return (
						<li key={index}>
							Mr. {item.name} <span> {item.score} </span>
						</li>
					);
				})}
		</ul>
	);
};
