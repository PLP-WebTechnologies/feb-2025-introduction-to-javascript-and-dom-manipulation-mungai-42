// Function to Change Text Content Dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('dynamicText').textContent = 'Text has been changed!';
});

// Function to Modify CSS Styles
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('dynamicText').style.color = 'blue';
    document.getElementById('dynamicText').style.fontSize = '20px';
});

// Function to Add a New Element
document.getElementById('changeTextBtn').addEventListener('click', function() {
    let newElement = document.createElement('div');
    newElement.textContent = 'I am a new element!';
    document.body.appendChild(newElement);
});
