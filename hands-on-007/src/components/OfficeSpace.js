import React, { Component } from "react";
import "../stylesheets/OfficeSpace.css";

const element = "Office Space";

const sr =
	"https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;

const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };

export default class OfficeSpace extends Component {
	render() {
		let colors = [];

		if (ItemName.Rent <= 60000) colors.push("textRed");
		else colors.push("textGreen");

		return (
			<div className="container">
				<h1>{element} at Affordable Range</h1>
				{jsxatt}
				<h1>Name: {ItemName.Name}</h1>
				<h3 className={colors.join(' ')}>Rent: Rs {ItemName.Rent}</h3>
				<h3>Address: {ItemName.Address}</h3>
			</div>
		);
	}
}
