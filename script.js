const testElements = document.querySelectorAll('.test');

const onTestClicked = (element) => {
    const detailsElement = element.querySelector('.tests-detailed');
    if(!detailsElement)
        return;
    const isActive = detailsElement.style.display === "block";
    if(!isActive) {
        detailsElement.style.display = "block";
    }
    else {
        detailsElement.style.display = "none";
    }
}

for(let testElement of testElements) {
    testElement.addEventListener('click', () => onTestClicked(testElement))
}