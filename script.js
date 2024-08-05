
  function downloadCV() {
    const element = document.getElementById('cv');
        const options = {
            margin: 1,
            filename: 'myCV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(options).save();
  }

  // Attach the function to the download button
  document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.querySelector('.download-button');
    downloadButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default action of the link
      downloadCV(); // Call the function to download the CV
    });
  });






  // Add an event listener to the name-greeting container to open file picker
  document.querySelector('.name-greeting').addEventListener('click', function() {
    document.querySelector('.file-input').click();
});

// Add an event listener to the file input to update image source
document.querySelector('.file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.image-2-icon').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const colorDot = document.getElementById('colorDot');
    const colorPicker = document.getElementById('colorPicker');
    const languageLevelElements = document.querySelectorAll('.levellenguage div');
    const experienceBox = document.querySelector('.experience-container .experiencebox .lastjob');
    const educationBox = document.querySelector('.education-container .educationbox .lasteducation');

    // Show color picker when color dot is clicked
    colorDot.addEventListener('click', () => {
        colorPicker.click();
    });

    // Handle color change
    colorPicker.addEventListener('input', (event) => {
        const selectedColor = event.target.value;

        // Update color dot background
        colorDot.style.backgroundColor = selectedColor;

        // Apply color to language level elements
        languageLevelElements.forEach(element => {
            element.style.backgroundColor = selectedColor;
        });

        // Apply color to experience and education boxes
        experienceBox.style.backgroundColor = selectedColor;
        educationBox.style.backgroundColor = selectedColor;
    });
});






function setLanguageLevel(language, level) {
    const progressBar = document.querySelector(`.${language}progressbar`);
    if (progressBar) {
        progressBar.style.width = `${level}%`;
    }
}

function updateLanguageLevel(sliderId, levelId, language) {
    const slider = document.getElementById(sliderId);
    const levelDisplay = document.getElementById(levelId);
    
    slider.addEventListener('input', () => {
        const value = slider.value;
        levelDisplay.textContent = `${value}%`;
        setLanguageLevel(language, value);
    });
}

// Initialize sliders
updateLanguageLevel('english-slider', 'english-level', 'english');
updateLanguageLevel('malayalam-slider', 'malayalam-level', 'malayalam');
updateLanguageLevel('hindi-slider', 'hindi-level', 'hindi');

// Set initial levels
setLanguageLevel('english', 100);
setLanguageLevel('malayalam', 90);
setLanguageLevel('hindi', 30);



