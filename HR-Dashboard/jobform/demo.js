var inPersonDiv = document.getElementById("in-person");
var telephonicDiv = document.getElementById("telephonic");
var inPersonContentDiv = document.querySelector(".inperson1");
var telephonicContentDiv = document.querySelector(".telepho");

telephonicContentDiv.style.display = "block";
telephonicDiv.classList.add("active");

inPersonDiv.addEventListener("click", function() {
  inPersonDiv.classList.add("active");
  telephonicDiv.classList.remove("active");
  inPersonContentDiv.style.display = "block";
  telephonicContentDiv.style.display = "none";
});

telephonicDiv.addEventListener("click", function() {
  telephonicDiv.classList.add("active");
  inPersonDiv.classList.remove("active");
  inPersonContentDiv.style.display = "none";
  telephonicContentDiv.style.display = "block";
});

var yesDiv = document.getElementById("yes");
var noDiv = document.getElementById("no");
var yesOptionDiv = document.querySelector(".yes-option");
var noOptionDiv = document.querySelector(".no-option");

noOptionDiv.style.display = "block";
noDiv.classList.add("active");

yesDiv.addEventListener("click", function() {
  yesDiv.classList.add("active");
  noDiv.classList.remove("active");
  yesOptionDiv.style.display = "block";
  noOptionDiv.style.display = "none";
});

noDiv.addEventListener("click", function() {
  noDiv.classList.add("active");
  yesDiv.classList.remove("active");
  yesOptionDiv.style.display = "none";
  noOptionDiv.style.display = "block";
});

  const commRadioButtons = document.getElementsByName('comm');
  const sectionYes1 = document.getElementById('sectionyes1');
  const sectionYes2 = document.getElementById('sectionyes2');
  const sectionNo = document.getElementById('sectionno');

  commRadioButtons.forEach((radioButton) => {
    radioButton.addEventListener('click', () => {
      if (radioButton.value === 'yes-to-myself') {
        sectionYes1.style.display = 'block';
        sectionYes2.style.display = 'none';
        sectionNo.style.display = 'none';
      } else if (radioButton.value === 'yes-to-other') {
        sectionYes1.style.display = 'none';
        sectionYes2.style.display = 'block';
        sectionNo.style.display = 'none';
      } else if (radioButton.value === 'no-i') {
        sectionYes1.style.display = 'none';
        sectionYes2.style.display = 'none';
        sectionNo.style.display = 'block';
      }
    });
  });

function addAddressField() {
var additionalAddressesDiv = document.getElementById("additional-addresses");
var newAddressField = document.createElement("input");
newAddressField.type = "text";
newAddressField.name = "additional-address";
newAddressField.placeholder = "Enter office Floor / Plot no. / Shop no. (optional)";

var newAddressLabel = document.createElement("label");
newAddressLabel.textContent = "Add Floor / Plot no. / Shop no. (optional)";
additionalAddressesDiv.appendChild(newAddressLabel);

additionalAddressesDiv.appendChild(newAddressField);
additionalAddressesDiv.appendChild(document.createElement("br"));

document.getElementById("add-address-btn").style.display = "none";
}

document.getElementById("permanent-address").addEventListener("click", function() {
var permanentAddressField = document.getElementById("permanent-address-field");
if (this.checked) {
  permanentAddressField.style.display = "none";
} else {
  permanentAddressField.style.display = "block";
}
});

const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");

const today = new Date();
const oneMonthFromToday = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);

startDateInput.min = today.toISOString().split("T")[0];
startDateInput.max = oneMonthFromToday.toISOString().split("T")[0];
endDateInput.min = today.toISOString().split("T")[0];
endDateInput.max = oneMonthFromToday.toISOString().split("T")[0];

startDateInput.addEventListener("input", function() {
  const startDate = new Date(startDateInput.value);
  const minEndDate = new Date(startDate.getTime());
  minEndDate.setDate(minEndDate.getDate() + 1);
  endDateInput.min = minEndDate.toISOString().split("T")[0];
});

const walkinTimeSelect = document.getElementById("walkin-time");
const walkoutTimeSelect = document.getElementById("walkout-time");

walkinTimeSelect.addEventListener("input", function() {
const walkinTime = walkinTimeSelect.value;
const walkoutTimeOptions = walkoutTimeSelect.options;

for (let i = 0; i < walkoutTimeOptions.length; i++) {
  const walkoutTimeOption = walkoutTimeOptions[i];
  if (walkoutTimeOption.value <= walkinTime) {
    walkoutTimeOption.disabled = true;
  } else {
    walkoutTimeOption.disabled = false;
  }
}
});

walkoutTimeSelect.addEventListener("input", function() {
const walkoutTime = walkoutTimeSelect.value;
const walkinTimeOptions = walkinTimeSelect.options;

for (let i = 0; i < walkinTimeOptions.length; i++) {
  const walkinTimeOption = walkinTimeOptions[i];
  if (walkinTimeOption.value >= walkoutTime) {
    walkinTimeOption.disabled = true;
  } else {
    walkinTimeOption.disabled = false;
  }
}
});

const knowopenModal = document.getElementById("know-more");
const closekModal = document.getElementById("close-kmodal");
const knowMoreBox = document.getElementById("know-more-box");
const knowOverlay = document.getElementById("know-overlay");

knowopenModal.addEventListener("click", function(event) {
	event.preventDefault();
	knowMoreBox.classList.add("show");
	knowOverlay.classList.add("show");
});

closekModal.addEventListener("click", function() {
	knowMoreBox.classList.remove("show");
	knowOverlay.classList.remove("show");
});

document.addEventListener("DOMContentLoaded", function() {
  const okayButton = document.querySelector(".okay-button");
  const knowMoreBox = document.getElementById("know-more-box");
  const knowOverlay = document.getElementById("know-overlay");

  okayButton.addEventListener("click", function() {
    knowMoreBox.classList.remove("show");
    knowOverlay.classList.remove("show");
  });
});

const backBtn = document.getElementById('back-btn');
const continueBtn = document.getElementById('continue-btn');

backBtn.addEventListener('click', () => {
  window.location.href = 'candidate.html';
});

continueBtn.addEventListener('click', () => {
  window.location.href = 'new.html';
});