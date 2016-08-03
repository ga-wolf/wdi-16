var img = document.querySelector("img");

// Logging out the current src attribute
var currentSrc = img.getAttribute("src");
console.log( currentSrc );

// Change the src attribute
img.setAttribute( "src", "http://placecage.com/c/200/200" );

var newSrc = img.getAttribute("src");
console.log( newSrc );

// Save a variable that points to the a tag on the page
var aTag = document.querySelector("a");

// Change the text to be Hacker Typer
aTag.innerHTML = "Hacker Typer";

// Change the href attribute to be "http://hackertyper.com"
aTag.setAttribute( "href", "http://hackertyper.com" );

// Change the display property to block on the aTag
aTag.style.display = "block";

// Change the margin-bottom to be 10px
aTag.style.marginBottom = "10px";

var body = document.querySelector("body");
// Change the background-color on the body tag to be lightslategray
body.style.backgroundColor = "lightslategray";

// Change the text-align to be center
body.style.textAlign = "center";

console.log("The page is about to disappear");

document.body.innerHTML = "<h1>Hello World</h1>";
document.body.innerHTML += "<p>More content here</p>";

document.body.innerText += "<script type='text/javascript'>alert('You have been hacked');</script>";


// document.createElement to create the actual tag
  // createTextNode to set up the text to go in the new element
  // .style if you need to style the element
  // .setAttribute if you need to change attributes

  // Put them on the page
    // Put the text in the actual element
    // Put the element on the page

var newParagraph = document.createElement("p");
  // <p>New paragraph!</p>
var paragraphText = document.createTextNode("New paragraph!");
  // New paragraph!

newParagraph.style.fontFamily = "monospace";

newParagraph.appendChild( paragraphText );
document.body.appendChild( newParagraph );
