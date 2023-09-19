function validateForm(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var dateInput = document.getElementById("date");
  var message = document.getElementById("message").value;

  var nameRegex = /^[A-Za-z\s]+$/;
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var mobileRegex = /^\d{10}$/;

  var errorMessages = [];

  if (!nameRegex.test(name)) {
    errorMessages.push("Please enter a valid name.");
  }

  if (!emailRegex.test(email)) {
    errorMessages.push("Please enter a valid email address.");
  }

  if (!mobileRegex.test(mobile)) {
    errorMessages.push("Please enter a valid 10-digit mobile number.");
  }

  var currentDate = new Date();
  var selectedDate = new Date(dateInput.value);
  selectedDate.setHours(0, 0, 0, 0);

  if (selectedDate < currentDate) {
    errorMessages.push(
      "Please select a valid appointment date on or before the current date."
    );
  }

  if (message.trim() === "") {
    errorMessages.push("Please enter a message.");
  }

  if (errorMessages.length > 0) {
    alert(errorMessages.join("\n"));
  } else {
    alert("Form submitted successfully!");
  }
}
