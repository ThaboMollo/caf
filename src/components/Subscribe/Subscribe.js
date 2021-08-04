import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Subscribe.css';

class Subscribe extends Component{
    constructor(props) {
        super(props);
        this.state = {
            subscribeForm: {
                email: props.email,
            }
        }
    }
    handleEmail = (e) => {
        var subscribeForm = this.state.subscribeForm;
        subscribeForm.email = e.target.value;

        this.setState({subscribeForm: subscribeForm});
    }
    handleSubscribe = (e) => {
        // e.preventDefault();
        // var em = this.state.subscribeForm.email;
        alert("Welcome to the Courageous Act Foundation family. We will email you next time we have an event.");
        // this.props.history.push('/events');
        return <Redirect to="/events" />
    }
    render() {
        return(
            <div className="wrapper">
                <input type="checkbox" className="viz" id="click"/>
                <label className="btn-1" for="click">
                    Subscribe
                </label>
                <div className="field">
                    <form name="subscribe" onSubmit={this.handleSubscribe} validate>
                        <input id="email" onChange={this.handleEmail} type="email" placeholder="Email Address" required />
                        <button for="click" className="btn-2">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Subscribe;

// ns5.za-dns.com
// ns3.za-dns.com