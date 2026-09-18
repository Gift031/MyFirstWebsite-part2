// I know JavaScript is not requird as yet but here's a little something

const enquiryForm = document.querySelector("#enquiry-form");

if (enquiryForm) {
	const statusMessage = document.querySelector("#form-status");

	enquiryForm.addEventListener("submit", (event) => {
		event.preventDefault();

		if (!enquiryForm.checkValidity()) {
			statusMessage.textContent = "Please complete the required fields before sending your enquiry.";
			statusMessage.classList.add("is-error");
			enquiryForm.reportValidity();
			return;
		}

		statusMessage.classList.remove("is-error");
		statusMessage.textContent = "Thank you. Your enquiry is ready to be sent, and our team will be in touch within 3 working days.";
		enquiryForm.reset();
	});
}
