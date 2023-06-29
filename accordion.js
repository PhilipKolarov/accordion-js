function toggle() {
    const spanButton = document.getElementsByClassName('button')[0];
    const neededDiv = document.getElementById('extra');

    if (spanButton.textContent === 'More') {
        spanButton.textContent = 'Less';
        neededDiv.style.display = 'block';
    } else {
        spanButton.textContent = 'More';
        neededDiv.style.display = 'none';
    }
}