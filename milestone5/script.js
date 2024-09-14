// // Get references to the form and display area
// const form = document.getElementById("resume-form") as HTMLFormElement;
// const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
// // Handle form submission
// form.addEventListener("submit", (event: Event) => {
//     event.preventDefault();   // prevent page reload
//     // Collect input value
//     const name = (document.getElementById("name") as HTMLInputElement).value
//     const email = (document.getElementById("email") as HTMLInputElement).value
//     const phone = (document.getElementById("phone") as HTMLInputElement).value
//     const education = (document.getElementById("education") as HTMLInputElement).value
//     const experience = (document.getElementById("experience") as HTMLInputElement).value
//     const skills = (document.getElementById("skills") as HTMLInputElement).value
//     // Generate the resume content dynamically
//     const resumeHTML = `
//     <h2><b>Editable Resume</b></h2>
//     <h3>Personal Informational</h3>
//     <p><b>Name:</b><span contenteditable="true">${name}</span></p>
//     <p><b>Email:</b><span contenteditable="true">${email}</span></p>
//     <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
//     <h3>Education</h3>
//     <p span contenteditable="true">${education}</p>
//     <h3>Experience</h3>
//     <p span contenteditable="true">${experience}</p>
//     <h3>Skills</h3>
//     <p span contenteditable="true">${skills}</p>
//     `;
//     // Display the generated resume 
//     if(resumeDisplayElement){
//         resumeDisplayElement.innerHTML = resumeHTML;
//     }else {
//         console.error('The resume display element is missing.');
//     }
// });
// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving thedata locally
    // Generate the resume content dynamically
    var resumeHTML = "\n<h2>Editable Resume</h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
