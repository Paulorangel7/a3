// JavaScript for mouseover and mouseout effects and ensuring submenus remain visible

document.addEventListener('DOMContentLoaded', function() {
    // Example mouseover/mouseout effect: 
    // We’ll apply a simple effect to the sign in / sign up links for demonstration.

    const btnLinks = document.querySelectorAll('.btn');
    btnLinks.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            btn.style.backgroundColor = '#FFD700';
            btn.style.color = '#003366';
            btn.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        });

        btn.addEventListener('mouseout', () => {
            btn.style.backgroundColor = '';
            btn.style.color = '#FFD700';
        });
    });

    // For the submenu, we’ve handled the hover with CSS :hover. 
    // If needed, we can add JS-based interaction, but CSS should suffice 
    // for hover persistence as long as the cursor remains over the submenu.
});
