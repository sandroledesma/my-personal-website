const h2 = document.createElement("h2")
h2.textContent = "This content is added by JavaScript";

document.querySelection("body").appendChild(h2);

document.addEventListener("DOMContentLoaded", function() {    

    var imageFigures = document.querySelectorAll('.gallery figure');

    imageFigures.forEach(function(figure) {
        figure.addEventListener('click', function() {
            console.log('Image clicked: ' + figure.querySelector('figcaption').textContent);
        });
    });

});

document.addEventListener("DOMContentLoaded", function() {
    var colorChangeParagraph = document.getElementById('colorChange');
    
    colorChangeParagraph.addEventListener('mouseover', function() {
        colorChangeParagraph.style.color = 'blue';
    });

    colorChangeParagraph.addEventListener('mouseout', function() {
        colorChangeParagraph.style.color = 'black';
    });
});