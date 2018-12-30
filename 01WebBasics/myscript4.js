document.querySelector('button').addEventListener('click', (event) => {
    console.log(event);
    event.target.textContent = 'I was Clicked'
})
