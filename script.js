function toggleMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const menuIcon = document.querySelector('.menu-icon');

    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    
    // Rotate icon if the menu is open
    if (dropdownMenu.style.display === 'block') {
        menuIcon.style.transform = 'rotate(360deg)';
    } else {
        menuIcon.style.transform = 'rotate(0deg)';
    }

    // Reset the animation for the next click
    setTimeout(() => {
        if (dropdownMenu.style.display === 'block') {
            menuIcon.style.transform = 'rotate(360deg)';
        }
    }, 500); // Match this with the transition duration in CSS
}


function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const cellphone = document.getElementById('cellphone').value;

    // Create a message string for WhatsApp
    const message = `I am interested in joining Maranatha Youth with Mission.\nName: ${name}\nSurname: ${surname}\nAge: ${age}\nGender: ${gender}\nCellphone Number: ${cellphone}`;

    // WhatsApp link (URL encoding the message)
    const whatsappNumber = "0733926743";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");
}

const video = document.getElementsByClassName('intro-video');
video.addEventListener('click', function() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
});


