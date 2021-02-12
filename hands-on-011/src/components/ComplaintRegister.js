import React, { Component } from 'react';
import '../stylesheets/mystyle.css';

class ComplaintRegister extends Component {
    constructor() {
        super();
        this.state = {
            ename: '',
            complaint: '',
            NumberHolder: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calculateTransaction = this.calculateTransaction.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        var msg = "Thanks " + this.state.ename + "\n Your Complaint was Submitted. \nTransaction id is: " + this.state.NumberHolder;
        window.alert(msg);
        event.preventDefault();
    }

    calculateTransaction() {
        const min = 1000;
        const max = 9999;
        const randomNumber = Math.floor(Math.random() * (max - min) + min);
        this.setState({ NumberHolder: randomNumber });
    }

    render() {
        return (
            <div>
                <h2 className="heading"> Register your complaints here!!! </h2>
                <form onSubmit={this.handleSubmit} className="form">
                    <label htmlFor="ename">Name</label>
                    <input type="text" id="ename" name="ename" value={this.state.ename} onChange={this.handleChange} />

                    <label htmlFor="complaint">Complaint</label>
                    <textarea id="complaint" name="complaint" value={this.state.complaint} onChange={this.handleChange}></textarea>

                    <span></span>
                    <input type="submit" onClick={this.calculateTransaction} />
                </form>
            </div>
        );
    }
}

export default ComplaintRegister;