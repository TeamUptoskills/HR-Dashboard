document.addEventListener("DOMContentLoaded", function() {
	const Credit = document.getElementById("credits");
	const previousCoins = document.getElementById("previous-coins");
	const creditSection = document.querySelector(".credit-section");
	const previousSection = document.querySelector(".previous-section");

	creditSection.style.display = "block";
	Credit.classList.add("active");

	Credit.addEventListener("click", function() {
		creditSection.style.display = "block";
		previousSection.style.display = "none";
		Credit.classList.add("active");
		previousCoins.classList.remove("active")
		blueBox.style.left = "0";
	});

	previousCoins.addEventListener("click", function() {
		creditSection.style.display = "none";
		previousSection.style.display = "block";
		previousCoins.classList.add("active")
		Credit.classList.remove("active");
		blueBox .style.left = `${index * 150 + 10}px`;
    });
  });

  const headings = document.querySelectorAll('.heading');
const sections = document.querySelectorAll('.section');

sections[0].classList.add('active');
headings[0].classList.add('active');

headings.forEach((heading, index) => {
  heading.addEventListener('click', () => {
    headings.forEach((h) => h.classList.remove('active'));
    heading.classList.add('active');

    sections.forEach((section) => {
      section.classList.remove('active');
    });
    sections[index].classList.add('active');
  });
});

const viewTransactionButtons = document.querySelectorAll('.view-transaction');

sections[0].classList.add('active');
headings[0].classList.add('active');

headings.forEach((heading, index) => {
  heading.addEventListener('click', () => {
    headings.forEach((h) => h.classList.remove('active'));
    heading.classList.add('active');

    sections.forEach((section) => {
      section.classList.remove('active');
    });
    sections[index].classList.add('active');
  });
});

viewTransactionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    headings[0].click();
  });
});