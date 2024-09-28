const themeSelector = document.body.querySelector("#themeSelector");
function changeTheme() {
    let selectorValue = themeSelector.value;
    let imageLogo = document.querySelector("footer img");

    if (selectorValue === "dark") {
        document.body.classList.add("dark");
        imageLogo.setAttribute("src", "./byui-logo_white.png");
    } else if (selectorValue === 'light') {
        document.body.classList.remove('dark');
        imageLogo.setAttribute('src', './byui-logo_blue.webp');
    }

}
themeSelector.addEventListener('change', changeTheme);