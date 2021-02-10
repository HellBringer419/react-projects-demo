import React, { Component } from "react";
import "../stylesheets/Cart.css"

export class Cart extends Component {
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{this.props.item.map((item, index) => {
						return (
							<tr key={index}>
								<td> {item.itemname} </td>
								<td> {item.price} </td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}
