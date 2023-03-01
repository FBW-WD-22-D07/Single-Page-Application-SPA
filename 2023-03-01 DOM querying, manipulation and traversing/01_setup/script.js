// Auswählen von Elementen auf die alte Art mit document.getElementById(<id string>)
const myElement = document.getElementById("myElement");
console.log(myElement);

// Auswählen per CSS-Abfrage: document.querySelector(<selector string>)
const myClassElement = document.querySelector(".myClass");
console.log(myClassElement);

// Mehr als ein Element abrufen: document.querySelectorAll(<selector string>)
const myClassElements = document.querySelectorAll(".myClass");
console.log(myClassElements);

// Element-Stil: CSS-Stile mit der Eigenschaft HTMLElement.style ändern
function changeBackgroundColor() {
    myElement.style.backgroundColor = "red";
}

//---------------------------------------------

// Manipulation von Klassen: Element.classList-Methoden
const element = document.getElementById("my-element");
element.classList.add("new-class");
element.classList.remove("my-class");
element.classList.toggle("active");

// Ändern des Textes innerhalb eines Elements: Die Eigenschaft HTMLElement.innerText
element.innerText = "New text";

// Ändern des HTML-Inhalts: Die Eigenschaft Element.innerHTML
element.innerHTML = "<h1>New Heading</h1><p>New paragraph</p>";

// Elemente erstellen: document.createElement(Tagname)
const newElement = document.createElement("div");
newElement.id = "new-element";
newElement.className = "new-class";
newElement.innerText = "New element created!";
document.body.appendChild(newElement);

// Hinzufügen von Elementen auf der Seite: Element.append(Element object)
const parent = document.getElementById("parent-element");
const child = parent.querySelector(".child-class");
parent.append(newElement);
child.remove();

//--------------------------------------------------------

// Node vs. Element: Vergleich von Node.previousSibling und Element.previousElementSibling
const prevSiblingNode = element.previousSibling;
const prevSiblingElement = element.previousElementSibling;

console.log(prevSiblingNode);
console.log(prevSiblingElement);

// Ermitteln des nächstgelegenen übergeordneten Elements: Element.closest(selector string)
const closestAncestor = element.closest("#parent-element");

console.log(closestAncestor);

// Testen eines Elements gegen einen Selektor: Element.matches(selector string)
const isMatch = element.matches(".new-class");

console.log(isMatch);

// Alle Kinder eines Elements ermitteln: ParentNode.children
const children = parent.children;

console.log(children);

// Auswahl bestimmter Kinder: ParentNode.querySelector(selector string)
const specificChild = parent.querySelector("#new-element");

console.log(specificChild);
