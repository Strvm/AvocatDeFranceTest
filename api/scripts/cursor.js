const container = document.getElementById('cursor')
const cursor = container.querySelector('.cursor-wrapper')
const cursorBody = container.querySelector('.cursor')
const pointer = container.querySelector('.pointer')
let cursorPos = {x: 0, y: 0}
let cursorOffset = {x: 0, y: 0}
let interacting = false;
const maxSize = parseInt(window.getComputedStyle(cursorBody, null).getPropertyValue("width"));

function syncCursor(elem = cursor) {
    const transform = `translate(${cursorPos.x + cursorOffset.x}px, ${cursorPos.y + cursorOffset.y}px)`
    elem.style.transform = transform
}

const defaultPointer = pointer.style.left;
document.addEventListener('mousemove', e => {
    if (interacting) {
        const width = parseInt(cursorBody.style.width);
        // pointer.style.left = pointer.style.left + (cursorBody.style.width * (cursorBody.style.width / 2));
        //console.log(parseInt(width - (width / 2)));
        pointer.style.left = width - (width / 3);
        pointer.style.top = width - (width / 1.1);
    }else{
        pointer.style.left = '-2.5pt';
        pointer.style.top = '-2.5pt';
    }
    cursorPos.x = e.clientX
    cursorPos.y = e.clientY

    syncCursor()
    syncCursor(pointer)
})

document.addEventListener('scroll', () => {
    cursorOffset.x = window.scrollX
    cursorOffset.y = window.scrollY
    syncCursor()
    syncCursor(pointer)
})
const interactables = document.querySelectorAll('.interactable');

interactables.forEach(function (item) {
    item.addEventListener('mouseover', function (event) {
        if (maxSize < parseInt(window.getComputedStyle(cursorBody, null).getPropertyValue("width"))) return;
        cursorBody.style.width = parseInt(window.getComputedStyle(cursorBody, null).getPropertyValue("width")) + (parseInt(window.getComputedStyle(item, null).getPropertyValue("width")) / 4)
        cursorBody.style.height = parseInt(window.getComputedStyle(cursorBody, null).getPropertyValue("width")) + (parseInt(window.getComputedStyle(item, null).getPropertyValue("width")) / 4)
        cursorBody.style.borderTopColor = 'transparent';
        interacting = true;

    });
});

interactables.forEach(function (item) {
    item.addEventListener('mouseleave', function (event) {
        cursorBody.style.width = maxSize
        cursorBody.style.height = maxSize
        cursorBody.style.borderTopColor = 'black';
        interacting = false;
    });
});

