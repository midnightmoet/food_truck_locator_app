import React from "react";
import "./contact.css";
import Header from "../../constants/header/Header";
import Footer from "../../constants/footer/Footer";
import Backbutton from "../../constants/backbutton/BackButton";

const Contact = () => {
	return (
		<>
		<Header />
			<div>
			<section class="contact" id="contact">
				<div class="contact-form-container">
				<h2 className="contact-header">Contact Us:</h2>
					<div class="contact-form">
						<form
							action="https://formspree.io/f/mdovjavr"
							method="POST"
						>
							<div class="form-control">
								<label for="name">Name: </label>
								<input
									type="text"
									id="name"
									name="sender-name"
									placeholder="Enter Your Name"
									class="input-field"
									required
								/>
							</div>
							<div class="form-control">
								<label for="email">Email: </label>
								<input
									type="email"
									id="email"
									name="sender-email"
									placeholder="Enter Your Email"
									class="input-field"
									required
								/>
							</div>
							<div class="form-control">
								<label for="message">Message</label>
								<textarea
									id="message"
									cols="40"
									rows="10"
									placeholder="Enter Your Message"
									name="message"
									class="input-field"
									required
								></textarea>
							</div>
							<button
								className="contact-btn"
								type="submit"
								value="Submit"
								id="submit-btn"
								class="submit-btn">Submit</button>
							
						</form>
					</div>
				</div>
			</section>
		</div>
		<Backbutton />
		<Footer />
		</>
	);
};

export default Contact;
