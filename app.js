let countnumber = document.querySelector('.number'),
    buttons = document.querySelectorAll('button'),
    currentnumber = 0;

for (const button of buttons) {
    button.addEventListener('click', () => {

        let clickedbutton = button.textContent;

        if (clickedbutton.includes('increase')) {
            currentnumber++

        } else if (clickedbutton.includes('decrease')) {
            currentnumber--
        } else {
            currentnumber = 0
        }
        if (currentnumber > 0) {
            countnumber.style.color = "darkgreen";
        } else if (currentnumber < 0) {

            countnumber.style.color = "red";
        } else {
            countnumber.style.color = "black"
        }
        countnumber.textContent = currentnumber;

    }
    )
}
