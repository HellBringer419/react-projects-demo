import Counter from './components/Counter';
import CurrencyConvertor from './components/CurrencyConvertor';

const OnPress = () => {
	window.alert("I was clicked");
}

const App = () => {
	return (
		<div>
			<Counter />
			<button value="welcome" onClick={(event) => window.alert(event.target.value)}>Say Welcome</button>
			<br />
			<button onClick={OnPress}>Click on me</button>
			<CurrencyConvertor />
		</div>
	);
}

export default App;
