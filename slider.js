const circles = document.querySelectorAll('.circle-item');
const items = document.querySelectorAll('#items');
let i = items.length;


circles.forEach(( element, index)=>{
    element.addEventListener('click', ()=>{
        // unset
        next() = undefined;
        items.forEach(item=>{
            item.classList.remove('active');
        })
        circles.forEach(circle=>{
            circle.classList.remove('active');
        })
        element.classList.add('active');
        items[index].classList.add('active');

    })
})
function next() {
    items[i-1].classList.remove('active');
    circles[i-1].classList.remove('active');

    if (i < items.length) {
        i++;
        // i = 5 
    }else{
        i = 1;
    }

    items[i-1].classList.add('active');
    circles[i-1].classList.add('active');
}

setInterval('next()', 3000);