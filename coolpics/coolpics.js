const menuButton = document.querySelector("#menu-button");
console.log("Menu button selected", menuButton)
function toggleMenu() {
    const menu = document.querySelector("#menu");
    console.log("Menu button clicled, toggling visibility");
    menu.classList.toggle("hide");
}

function handleResize() {
    const menu = document.querySelector("#menu");
    if (window.innerWidth > 1000) {
        console.log("Large screen detected, showing menu");
        menu.classList.remove("hide");
    } else {
        console.log("Small screen detected, hiding menu.")
        menu.classList.add("hide");
    }
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer"> 
    <button class="close-viewer">X</button><img src="${pic}" alt="${alt}"></div>`;
}

function viewHandler(event) {
    const clickedEvent = event.target;

    if (clickedEvent.tagName === "IMG") {
        const imageSrc = clickedEvent.src.split('-');
        const fullImagePath = `${imageSrc[0]}-full.jpeg`;
        const altText = clickedEvent.alt;

        const viewer = viewerTemplate(fullImagePath, altText);
        document.body.insertAdjacentHTML("afterbegin", viewer);

        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}


handleResize();

document.querySelector("#menu-button").addEventListener("click", toggleMenu);

window.addEventListener("resize", handleResize);

document.querySelector(".gallery").addEventListener("click", viewHandler);
