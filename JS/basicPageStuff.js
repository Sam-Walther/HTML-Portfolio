// theme code stuff https://www.geeksforgeeks.org/javascript/how-to-switch-between-multiple-css-stylesheets-using-javascript/

function toggleTheme() {
    // Select the <link> element
    let theme = document.getElementById('theme');

    // Toggle between light.css and dark.css
    if (theme.getAttribute('href') == 'CSS/alt-style.css') {
        theme.setAttribute('href', 'CSS/style.css');
    } else {
        theme.setAttribute('href', 'CSS/alt-style.css');
    }
}

function clickForbiddenButton() {
    //selects the button of knowledge
    let button = document.getElementById('artButton');
    let img = document.getElementById('artImg');

    //unlocks the terrible secret behind the pixelated fortress
    console.log('i should uh yeah' + button);
    img.style.display = 'block';
    button.style.display = 'none';

}