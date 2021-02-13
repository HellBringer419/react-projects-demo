import React, { Component } from 'react';
import "../stylesheets/mystyles.css";

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((value) => value.length > 0 && (valid = false));
    return valid;
}

class Register extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            email: '',
            password: '',
            errors: { fullName: '', email: '', password: '' }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        const [name, value] = event.target;

        let newErrors = '';
        switch (name) {
            case "fullName":
                newErrors.fullName = value.length < 5 ? "Full Name must be 5 characters long" : '';
                break;
            
            case "email":
                const validEmailRegex = RegExp(/^/i);
                newErrors.email = validEmailRegex.test(value) ? '' : "Email is not valid";
                break;
            
            case "password":
                newErrors.password = value.length < 8 ? "Password must be 8 characters long" : '';
                break;
            
            default:
                break;
        }

        this.setState({ errors: newErrors });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (validateForm(this.state.errors)) {
            alert("Valid Form")
        }
        else {
            if (this.state.errors.fullName != '') {
                alert(this.state.errors.fullName)
            }
            if (this.state.errors.email != '') {
                alert(this.state.errors.email)
            }
            if (this.state.errors.password != '') {
                alert(this.state.errors.password)
            }
        }
    }

    render() {
        return (
            <div>
                <h2 className="header">Register Here!!!</h2>
                <form onSubmit={this.handleSubmit} className="form">
                    <label htmlFor="fullName">Name:</label>
                    <input type="text" id="fullName" name="fullName" value={this.state.fullName} onChange={this.handleChange} />

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />

                    <span></span>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Register;