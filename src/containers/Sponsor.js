import React, { Component } from 'react';

class Sponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sponsorForm: {
                firstname: props.firstname,
                lastname: props.lastname,
                phone: props.phone,
                email: props.email,
                street: props.street,
                city: props.city,
                province: props.province,
                postal: props.postal,
                country: props.country,
                description: props.description,
                money: props.money,
                sponsor: props.sponsor
            }
        }
    }
    handleFirstName = (e) => {
        var sponsorForm = this.state.sponsorForm;
        sponsorForm.firstname = e.target.value;

        this.setState({ sponsorForm: sponsorForm });
    }
    handleLastName = (e) => {
        var sponsorForm = this.state.sponsorForm;
        sponsorForm.lastname = e.target.value;

        this.setState({ sponsorForm: sponsorForm });
    }
    handlePhone = (e) => {
        var sponsorForm = this.state.sponsorForm;
        sponsorForm.phone = e.target.value;

        this.setState({ sponsorForm: sponsorForm });
    }
    handleEmail = (e) => {
        var sponsorForm = this.state.sponsorForm;
        sponsorForm.email = e.target.value;

        this.setState({ sponsorForm: sponsorForm });
    }
    handleStreet = (e) => {
        var sponsorForm = this.state.sponsorForm;
        sponsorForm.street = e.target.value;

        this.setState({ sponsorForm: sponsorForm });
    }
    handleCity = (e) => {
        var sponsorForm = this.state.sponsorForm;
        sponsorForm.city = e.target.value;

        this.setState({ sponsorForm: sponsorForm });
    }
    handleProvince = (e) => {
        var sponsorForm = this.state.sponsorForm;
        sponsorForm.province = e.target.value;

        this.setState({ sponsorForm: sponsorForm });
    }
    handlePostal = (e) => {
        var sponsorForm = this.state.sponsorForm;
        sponsorForm.postal = e.target.value;

        this.setState({ sponsorForm: sponsorForm });
    }
    handleCountry = (e) => {
        var sponsorForm = this.state.sponsorForm;
        sponsorForm.country = e.target.value;

        this.setState({ sponsorForm: sponsorForm });
    }
    handleDescription = (e) => {
        var sponsorForm = this.state.sponsorForm;
        sponsorForm.description = e.target.value;

        this.setState({ sponsorForm: sponsorForm });
    }
    handleSkill = (e) => {
        var sponsorForm = this.state.sponsorForm;
        sponsorForm.sponsor = e.target.value;

        this.setState({ sponsorForm: sponsorForm });
    }
    handleMoney = (e) => {
        var sponsorForm = this.state.sponsorForm;
        sponsorForm.money = e.target.value;

        this.setState({ sponsorForm: sponsorForm });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        var name = `${this.state.sponsorForm.firstname} - ${this.state.sponsorForm.lastname}`;
        var num = this.state.sponsorForm.phone;
        var em = this.state.sponsorForm.email;
        var st = this.state.sponsorForm.street;
        var ct = this.state.sponsorForm.city;
        var pr = this.state.sponsorForm.province;
        var post = this.state.sponsorForm.postal;
        var cntry = this.state.sponsorForm.country;
        var dscr = this.state.sponsorForm.description;
        var address = `${st} ${ct} ${pr} ${post} ${cntry}`;
        alert('Message sent, We will respond shortly. Thank you. Please go back to the Home page');
        console.log(`${name} - ${num} - ${em} - ${address} - \n\n${dscr}`);
    }
    render() {
        return (
            <div id="sponsor" className="text-center">
                <div className="container">
                    <div className="section-title">
                        <h2>Sponsor <span>Us</span></h2>
                        <h5>Do you love the work that we do?</h5>
                        <h5>Do you want to help us grow and gain a greater reach?</h5>
                        <h3>Sponsor us on our next event or any of our programs.</h3>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <form name="sponsorApp" onSubmit={this.handleSubmit} validate>
                                <h4>What would you like to sponsor us with?</h4>
                                <select className="form-control" onChange={this.handleSkill} name="skills" id="skills">
                                    <option value="null">Please Select an option</option>
                                    <option value="financial">Financially</option>
                                    <option value="coaching">Coaching</option>
                                    <option value="mentoring">Mentoring</option>
                                    <option value="counseling">Counseling</option>
                                    <option value="psychology">Psychology</option>
                                </select>
                                {
                                    this.state.sponsorForm.sponsor === "financial"
                                    ? <div>
                                        <input 
                                            id='money'
                                            type="text"
                                            placeholder="* Amount"
                                            className="form-control"
                                            required
                                            onChange={this.handleMoney}
                                        />
                                        <br />
                                    </div>
                                    : <br />
                                }
                                <input
                                    id='firstname'
                                    type="text"
                                    placeholder="* First Name"
                                    className="form-control"
                                    required
                                    onChange={this.handleFirstName}
                                />
                                <p className='help-block text-danger'></p>
                                <input
                                    id='lastname'
                                    type="text"
                                    placeholder="* Last Name"
                                    className="form-control"
                                    required
                                    onChange={this.handleLastName}
                                />
                                <p className='help-block text-danger'></p>
                                <input
                                    id='phone'
                                    type="number"
                                    placeholder="* Phone Number"
                                    className="form-control"
                                    required
                                    onChange={this.handlePhone}
                                />
                                <p className='help-block text-danger'></p>
                                <input
                                    id='email'
                                    type="email"
                                    placeholder="* Your Email"
                                    className="form-control"
                                    required
                                    onChange={this.handleEmail}
                                />
                                <p className='help-block text-danger'></p>

                                <input
                                    id='street'
                                    type="text"
                                    placeholder="Street Address"
                                    className="form-control"
                                    required
                                    onChange={this.handleStreet}
                                />
                                <p className='help-block text-danger'></p>
                                <input
                                    id='city'
                                    type="text"
                                    placeholder="City/Town"
                                    className="form-control"
                                    required
                                    onChange={this.handleCity}
                                />
                                <p className='help-block text-danger'></p>
                                <input
                                    id='province'
                                    type="text"
                                    placeholder="Province"
                                    className="form-control"
                                    required
                                    onChange={this.handleProvince}
                                />
                                <p className='help-block text-danger'></p>
                                <input
                                    id='postal'
                                    type="text"
                                    placeholder="Postal Code"
                                    className="form-control"
                                    required
                                    onChange={this.handlePostalCode}
                                />
                                <p className='help-block text-danger'></p>
                                <input
                                    id='country'
                                    type="text"
                                    placeholder="Country"
                                    className="form-control"
                                    required
                                    onChange={this.handleCountry}
                                />
                                <p className='help-block text-danger'></p>
                                
                                <button className="btn-custom">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="col-xs-12 col-md-6 spon-pic">
                            {' '}
                            <img src="img/footer.jpg" className="img-responsive" alt="Sponsors" />
                            {' '}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sponsor;