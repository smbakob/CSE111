function validateForm(event) {
  const theForm = event.target;
  const errors = [];
  let isValid = true;

  const name = theForm.fullName.value.trim();
  const creditCard = theForm.creditCard.value.trim();
  const paymentMethod = theForm.paymentMethod.value;

  // Only allow name = Bob
  if (name.toLowerCase() !== "bob") {
    isValid = false;
    errors.push("Only users named 'Bob' can submit the form.");
  }

  // Only allow valid credit card number = 1234123412341234
  if (paymentMethod === "creditCard" && creditCard !== "1234123412341234") {
    isValid = false;
    errors.push("Invalid credit card number. Use 1234123412341234 for testing.");
  }

  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}

function togglePaymentDetails(e) {
  const theForm = document.getElementById("checkoutForm");
  const creditCardContainer = document.getElementById("creditCardContainer");
  const paypalContainer = document.getElementById("paypalContainer");
  const paymentMethod = theForm.paymentMethod.value;

  // Hide both
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");

  // Remove required
  theForm.creditCard.required = false;
  theForm.paypalUsername.required = false;

  // Show and require the selected method
  if (paymentMethod === "creditCard") {
    creditCardContainer.classList.remove("hide");
    theForm.creditCard.required = true;
  } else if (paymentMethod === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalUsername.required = true;
  }
}

function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

// Event listeners
document
  .getElementById("paymentMethod")
  .addEventListener("change", togglePaymentDetails);

document
  .getElementById("checkoutForm")
  .addEventListener("submit", validateForm);
