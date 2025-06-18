let participantCount = 1;

document.getElementById("add").addEventListener("click", () => {
  participantCount++;

  const original = document.querySelector(".participant1");
  const clone = original.cloneNode(true);

  clone.className = `participant${participantCount}`;
  clone.querySelector("p").textContent = `Participant ${participantCount}`;

  const inputs = clone.querySelectorAll("input, select");
  inputs.forEach((input) => {
    const oldId = input.getAttribute("id");
    const oldName = input.getAttribute("name");

    if (oldId) input.setAttribute("id", `${oldId}${participantCount}`);
    if (oldName) input.setAttribute("name", `${oldName}${participantCount}`);

    input.value = ""; 
  });


  const addButton = document.getElementById("add");
  addButton.insertAdjacentElement("beforebegin", clone);
});

const form = document.querySelector("form");
const summary = document.getElementById("summary");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 


  const feeInputs = document.querySelectorAll("input[name^='fee']");
  let totalFees = 0;

  feeInputs.forEach((input) => {
    const fee = parseFloat(input.value);
    if (!isNaN(fee)) {
      totalFees += fee;
    }
  });

  const adultName = document.getElementById("adult_name").value || "Adult";


  form.style.display = "none";
  summary.style.display = "block";
  summary.innerHTML = `
    <h2>Thank you, ${adultName}, for registering.</h2>
    <p>You have registered ${participantCount} participant(s) and owe $${totalFees.toFixed(2)} in fees.</p>
  `;
});
