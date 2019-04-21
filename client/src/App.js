import React, { Component } from "react";
import "./App.css";

const Loader = () => (
	<div className="sk-folding-cube">
		<div className="sk-cube1 sk-cube" />
		<div className="sk-cube2 sk-cube" />
		<div className="sk-cube4 sk-cube" />
		<div className="sk-cube3 sk-cube" />
	</div>
);

class App extends Component {
	state = {
		username: "",
		cardName: "",
		dateOfBirth: "",
		cardExpiryDate: "",
		loading: false,
		paymentMethod: ""
	};

	clearPage = () => {
		this.setState({
			loading: false,
			username: "",
			cardName: "",
			dateOfBirth: "",
			cardExpiryDate: ""
		});
	};

	fetchDetails = () => {
		fetch(`/api/details/${this.state.username}`)
			.then(res => res.json())
			.then(data => {
				this.setState(data);
			})
			.catch(function(err) {
				console.log("something went wrong");
			});
	};

	postOrder = () => {
		const postData = this.state;
		delete postData.loading;
		delete postData._id;
		delete postData.__v;
		let self = this;
		fetch("/api/orders", {
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(postData)
		})
			.then(res => res.json())
			.then(function(data) {
				self.clearPage();
				alert("Order placed!");
			})
			.catch(function(err) {
				console.log(err);
				self.clearPage();
				console.log("something went wrong");
			});
	};

	handleChange = event => {
		this.setState({
			[event["target"]["name"]]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			loading: true
		});
		this.postOrder();
	};

	render() {
		const disabled = !(
			this.state.username &&
			this.state.cardName &&
			this.state.dateOfBirth &&
			this.state.cardExpiryDate
		);
		// const disabled = false;
		if (this.state.loading) return <Loader />;
		return (
			<div className="container">
				<h1>Swiggy Checkout</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="field">
						<label className="label">Username</label>
						<div className="control">
							<input
								className="input"
								name="username"
								type="text"
								value={this.state.username}
								onChange={this.handleChange}
								onBlur={this.fetchDetails}
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Name on card</label>
						<div className="control">
							<input
								className="input"
								name="cardName"
								type="text"
								value={this.state.cardName}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Date of birth</label>
						<div className="control">
							<input
								className="input"
								name="dateOfBirth"
								type="date"
								placeholder="Text input"
								value={this.state.dateOfBirth}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Expiry date of the card</label>
						<div className="control">
							<input
								className="input"
								name="cardExpiryDate"
								type="text"
								placeholder="eg 11/22"
								value={this.state.cardExpiryDate}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<br />
					<h2>Select payment Method</h2>
					<br />
					<div className="columns">
						<div className="column box1">
							<input
								type="radio"
								name="paymentMethod"
								value="mongodb"
								onChange={this.handleChange}
								checked={this.state.paymentMethod === "mongodb"}
							/>
							<span>MongoDB</span>
						</div>
						<div className="column box1">
							<input
								type="radio"
								name="paymentMethod"
								value="postegresql"
								onChange={this.handleChange}
								checked={this.state.paymentMethod === "postegresql"}
							/>
							<span>PostegreSQL</span>
						</div>
						<div className="column box1">
							<input
								type="radio"
								name="paymentMethod"
								value="mysql"
								checked={this.state.paymentMethod === "mysql"}
								onChange={this.handleChange}
							/>
							<span>MySQL</span>
						</div>
					</div>
					<div className="field is-grouped">
						<div className="control">
							<button className="button is-link" disabled={disabled}>
								Order
							</button>
						</div>
						<div className="control">
							<button className="button is-text">Cancel</button>
						</div>
					</div>
				</form>
				<br />
				<pre>{JSON.stringify(this.state, true, 2)}</pre>
			</div>
		);
	}
}

export default App;
