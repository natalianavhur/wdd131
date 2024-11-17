const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const imageLogo = document.createElement("img");
imageLogo.setAttribute("src", "https://picsum.photos/200");
imageLogo.setAttribute("alt", "Image from picsum.");
document.body.appendChild(imageLogo);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li></ul>";
document.body.appendChild(newDiv);

const newSect = document.createElement("section");
newSect.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript!</p>";
document.body.appendChild(newSect);