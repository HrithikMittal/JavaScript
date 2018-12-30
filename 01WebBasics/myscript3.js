const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'

document.querySelector('body').appendChild(myNewPara);