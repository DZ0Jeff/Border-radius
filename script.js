const box = document.querySelector('.box')
const button = document.querySelector('#copiar')
const ranges = document.querySelectorAll('input[type=range]')

let valores = {}

function handleInput(e, direction){
    return e.target.id == direction ? e.target.value : e.target.value
}

ranges.forEach(range => {
    range.addEventListener("change", e => {
        box.style.borderRadius = `
            ${handleInput(e, "topo")}em
            ${handleInput(e, "esquerdo")}em
            ${handleInput(e, "direito")}em
            ${handleInput(e, "tarde")}em
        `
    })
})