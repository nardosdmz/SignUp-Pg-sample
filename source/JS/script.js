
let user = document.getElementById("username");
console.log(user);
let email = document.getElementById("email");
let pass = document.getElementById("password");
let pass2 = document.getElementById("password2");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (user.value === "") {
		setErrorFor(user, "username required");
	} else {
		setSuccess(user);
	}
	//-----------------
	if (email.value === "") {
		setErrorFor(email, "email required");
	} else {
		setSuccess(email);
	}
	//-----------------
	if (pass.value === "") {
		setErrorFor(pass, "password required");
	} else {
		setSuccess(pass);
	}
	//-----------------
	if (pass2.value === "") {
		setErrorFor(pass2, "password required");
	} else if (pass.value.length < 5) {
		setErrorFor(pass, " 5 or more characters");
	} else if (pass2.value !== pass.value) {
		setErrorFor(pass2, "password does not match");
	} else {
		setSuccess(pass2);
		alert(
			`you entered:\nUsername: ${user.value}\nEmail: ${email.value}\nPassword: ${pass.value}`
		);
	}
});

//********************************* */
function setErrorFor(input, message) {
	input.parentElement.classList.add("error");
	input.parentElement.classList.remove("success");
	input.nextElementSibling.textContent = message;
}
function setSuccess(input) {
	input.parentElement.classList.add("success");
	input.parentElement.classList.remove("error");
	input.nextElementSibling.textContent = "";
}
