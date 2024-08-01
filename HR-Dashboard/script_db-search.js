const searchManualButton = document.querySelector('.dbsc-searchm');
const useAIButton = document.querySelector('.dbsc-useai');
const searchCandidateSection = document.querySelector('.search-candidate-section');
const aiSection = document.querySelector('.ai-section');

searchCandidateSection.style.display = 'block';
aiSection.style.display = 'none';

searchManualButton.classList.add('active');

searchManualButton.addEventListener('click', () => {
	searchManualButton.classList.add('active');
	useAIButton.classList.remove('active');
	searchCandidateSection.style.display = 'block';
	aiSection.style.display = 'none';
});

useAIButton.addEventListener('click', () => {
	useAIButton.classList.add('active');
	searchManualButton.classList.remove('active');
	searchCandidateSection.style.display = 'none';
	aiSection.style.display = 'block';
});

const radios = document.querySelectorAll('input[type="radio"]');
const sections = document.querySelectorAll('.section-form > div');

radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    sections.forEach((section) => {
      section.style.display = 'none';
    });
    switch (radio.value) {
      case 'Freshers':
        document.getElementById('sectionform1').style.display = 'block';
        break;
      case 'Experienced':
        document.getElementById('sectionform2').style.display = 'block';
        break;
      case 'Any':
        document.getElementById('sectionform3').style.display = 'block';
        break;
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var accordionHeads = document.querySelectorAll(".accordion-head");

  accordionHeads.forEach(function(accordionHead) {
      accordionHead.addEventListener("click", function() {
          this.classList.toggle("active");
          var accordionContainer = this.nextElementSibling;
          if (accordionContainer.style.display === "block") {
              accordionContainer.style.display = "none";
          } else {
              accordionContainer.style.display = "block";
          }
      });
  });
});

const tags = document.querySelectorAll('.highest-tag');
const hiddenInput = document.getElementById('education');

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    tag.classList.toggle('selected');
    if (tag.classList.contains('selected')) {
      tag.innerHTML = tag.getAttribute('data-value') + ' <span style="font-size: 18px;">&times;</span>';
    } else {
      tag.innerHTML = '+' + tag.getAttribute('data-value');
    }
    const selectedValues = [];
    tags.forEach(tag => {
      if (tag.classList.contains('selected')) {
        selectedValues.push(tag.getAttribute('data-value'));
      }
    });
    hiddenInput.value = selectedValues.join(',');
  });
});

const radioButtons = document.querySelectorAll('input[name="option"]');
const sectionforms = document.querySelectorAll('.sectionform');

radioButtons.forEach((button) => {
    button.addEventListener('change', () => {
        sectionforms.forEach((sectionform) => {
            sectionform.style.display = 'none';
        });
        const selectedId = button.value === 'Freshers' ? 'sectionform1' :
            button.value === 'Experienced' ? 'sectionform2' : 'sectionform3';
        document.getElementById(selectedId).style.display = 'block';
    });
});

const minExpSelect = document.getElementById('min-exp');
const maxExpSelect = document.getElementById('max-exp');

minExpSelect.addEventListener('change', () => {
  const minValue = parseInt(minExpSelect.value);
  const maxOptions = maxExpSelect.options;
  for (let i = 0; i < maxOptions.length; i++) {
    if (parseInt(maxOptions[i].value) < minValue) {
      maxOptions[i].disabled = true;
    } else {
      maxOptions[i].disabled = false;
    }
  }
});

maxExpSelect.addEventListener('change', () => {
  const maxValue = parseInt(maxExpSelect.value);
  const minOptions = minExpSelect.options;
  for (let i = 0; i < minOptions.length; i++) {
    if (parseInt(minOptions[i].value) > maxValue) {
      minOptions[i].disabled = true;
    } else {
      minOptions[i].disabled = false;
    }
  }
});

const minSalSelect = document.getElementById('min-sal');
const maxSalSelect = document.getElementById('max-sal');

minSalSelect.addEventListener('change', () => {
  const minValue = parseInt(minSalSelect.value);
  const maxOptions = maxSalSelect.options;
  for (let i = 0; i < maxOptions.length; i++) {
    if (parseInt(maxOptions[i].value) < minValue) {
      maxOptions[i].disabled = true;
    } else {
      maxOptions[i].disabled = false;
    }
  }
});

maxSalSelect.addEventListener('change', () => {
  const maxValue = parseInt(maxSalSelect.value);
  const minOptions = minSalSelect.options;
  for (let i = 0; i < minOptions.length; i++) {
    if (parseInt(minOptions[i].value) > maxValue) {
      minOptions[i].disabled = true;
    } else {
      minOptions[i].disabled = false;
    }
  }
});

const miniExpSelect = document.getElementById('mini-exp');
const maxiExpSelect = document.getElementById('maxi-exp');

miniExpSelect.addEventListener('change', () => {
  const minValue = parseInt(miniExpSelect.value);
  const maxOptions = maxiExpSelect.options;
  for (let i = 0; i < maxOptions.length; i++) {
    if (parseInt(maxOptions[i].value) < minValue) {
      maxOptions[i].disabled = true;
    } else {
      maxOptions[i].disabled = false;
    }
  }
});

maxiExpSelect.addEventListener('change', () => {
  const maxValue = parseInt(maxiExpSelect.value);
  const minOptions = miniExpSelect.options;
  for (let i = 0; i < minOptions.length; i++) {
    if (parseInt(minOptions[i].value) > maxValue) {
      minOptions[i].disabled = true;
    } else {
      minOptions[i].disabled = false;
    }
  }
});

const miniSalSelect = document.getElementById('mini-sal');
const maxiSalSelect = document.getElementById('maxi-sal');

miniSalSelect.addEventListener('change', () => {
  const minValue = parseInt(miniSalSelect.value);
  const maxOptions = maxiSalSelect.options;
  for (let i = 0; i < maxOptions.length; i++) {
    if (parseInt(maxOptions[i].value) < minValue) {
      maxOptions[i].disabled = true;
    } else {
      maxOptions[i].disabled = false;
    }
  }
});

maxiSalSelect.addEventListener('change', () => {
  const maxValue = parseInt(maxiSalSelect.value);
  const minOptions = miniSalSelect.options;
  for (let i = 0; i < minOptions.length; i++) {
    if (parseInt(minOptions[i].value) > maxValue) {
      minOptions[i].disabled = true;
    } else {
      minOptions[i].disabled = false;
    }
  }
});

document.querySelector('.reset-btn').addEventListener('click', () => {
  const sectionForm = document.querySelector('.section-form');
  const inputs = sectionForm.querySelectorAll('input, select');
  const highestTags = sectionForm.querySelectorAll('span.highest-tag');

  inputs.forEach((input) => {
    if (input.type === 'radio') {
      input.checked = false;
    } else if (input.type === 'checkbox') {
      input.checked = false;
    } else if (input.tagName === 'SELECT') {
      input.selectedIndex = 0;
    } else {
      input.value = '';
    }
  });

  highestTags.forEach((tag) => {
    tag.classList.remove('selected');
  });
});
