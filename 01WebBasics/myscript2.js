// const myPElements = document.querySelector('p');
// myPElements.textContent = 'I am being changer by JS';

const myPElements = document.querySelectorAll('p');
for(i=0;i<myPElements.length;i++)
{
   console.log(myPElements[i]);
}
myPElements.forEach(function(p){
    console.log(p);
    p.textContent = 'I am changed using loop in js'
    p.remove;
})