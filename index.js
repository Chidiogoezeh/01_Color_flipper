// Change the attributes in the body of an element in a html document programmatically in javascript

const body = document.getElementsByTagName("body")[0];    // document. is used to access all the elements in a html documents in using javascript

function setColor(name) {   // name is any parameter we want to set setColor to
    body.style.backgroundColor = name;
}

function randomColor() {    // create a function that enables us to change the color of the background to a random color
    const red = Math.round(Math.random() * 255)   //.round, rounds the random math number called to a float and not a decimal
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`   // Use string manipulation to set the background color to a random value: Use bakticks not single quotation mark
    body.style.backgroundColor = color;

}
randomColor()
