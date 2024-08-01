const showItembtn = document.getElementById("mainImg");

showItembtn.addEventListener("click",()=>{
    document.getElementById("showItem").classList.toggle("hide");
    
})


document.querySelectorAll('.dropdown-content div').forEach(item => {
    item.addEventListener("click", function(e) {
        const selectedValue = e.currentTarget.getAttribute('data-value');
        document.getElementById('output').textContent = `You selected:${selectedValue}`;
    });
});




console.log("Script running...");

document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger_logo').addEventListener("click", () => {
        document.querySelector(".sidebar").style.height="109vh"
    document.querySelector('.sidebar').classList.toggle('sidebarGo'); 
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    } else {
        document.querySelector('.ham').style.display = 'none';
        document.querySelector('.cross').style.display = 'inline';

    }
});

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdownmenu');

    dropdownToggle.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('Nav-items')[0]

toggleButton.addEventListener('click',() =>{
    navbarLinks.classList.toggle('active')
})


// let subManu= document.getElementById("subManu");

// function togglepic(){
//     subManu.classList.toggle("open-manu");
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const userOptions = document.getElementById('user-options');

//     userOptions.addEventListener('change', () => {
//         const selectedOption = userOptions.value;
//         if (selectedOption === 'settings') {
//             window.location.href = '/settings'; // Adjust the URL as needed
//         } else if (selectedOption === 'logout') {
//             // Handle logout action
//             alert('Logging out...');
//             // Implement actual logout logic here
//         }
//     });
// });


