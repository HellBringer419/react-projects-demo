export const OddPlayers = ([first, , third, , fifth]) => {
	return (
		<div>
			<li> First: {first}</li>
			<li> Third: {third}</li>
			<li> Fifth: {fifth}</li>
		</div>
	);
};

export const EvenPlayers = ([, second, , fourth, , sixth]) => {
	return (
		<div>
			<li> Second: {second}</li>
			<li> Fourth: {fourth}</li>
			<li> Sixth: {sixth}</li>
		</div>
	);
};

const T20Players = ["First Player", "Second Player", "Third Player"];

const RanjiTrophyPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];

export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

export const ListofIndianPlayers = ({ IndianPlayers }) => {
	return (
		<div>
			<ul>
				{IndianPlayers.map((item, index) => {
					return <li key={index}>Mr. {item}</li>;
				})}
			</ul>
		</div>
	);
};
