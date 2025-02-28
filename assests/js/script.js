
const toggleButton=document.getElementById("toggleButton")
const navbar=document.getElementById("NavBar")

toggleButton.addEventListener('click', () => {
    // Toggle the display of the navbar
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
});