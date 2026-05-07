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