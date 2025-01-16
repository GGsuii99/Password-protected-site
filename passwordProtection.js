function checkPassword() {
    const password = prompt("Enter the password:");
    const correctPassword = 'yourPassword'; // Change this to your desired password

    if (password === correctPassword) {
        localStorage.setItem('accessGranted', 'true');
        window.location.href = 'guidygvyjydgfygdufgduyfgudbytuybf.html'; // Redirect to the specified page
    } else {
        alert('Incorrect password. Access denied.');
    }
}

function protectPage() {
    if (localStorage.getItem('accessGranted') !== 'true') {
        // If access is not granted, redirect to the password page
        window.location.href = 'index.html'; // Redirect to password page
    }
}
