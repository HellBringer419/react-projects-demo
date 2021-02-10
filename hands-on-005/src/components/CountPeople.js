import React, { Component } from "react";
import '../stylesheets/CountPeople.css';

export class CountPeople extends Component {
	constructor() {
		super();
		this.state = {
			entryCount: 0,
			exitCount: 0,
			c: 0,
		};
	}

	updateEntry = () => {
		this.setState((prevState, props) => {
			return { entryCount: prevState.entryCount + 1 };
		});
	};

	updateExit = () => {
		this.setState((prevState, props) => {
			return { exitCount: prevState.exitCount + 1 };
		});
	};

	render() {
		return (
			<div className="container">
				<div>
					<button onClick={this.updateEntry}>Login</button>
					<span>&nbsp; {this.state.entryCount}</span> People
					Entered!!!
				</div>

				<div>
					<button onClick={this.updateExit}>Exit</button>
					<span>&nbsp;{this.state.exitCount}</span> People Left!!!
				</div>
			</div>
		);
	}
}
