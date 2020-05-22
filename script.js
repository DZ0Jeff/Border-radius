const box = document.querySelector('.box')
const button = document.querySelector('#copiar')
const ranges = document.querySelectorAll('input[type=range]')

ranges.forEach(range => {
    range.addEventListener('input', e => {
        document.documentElement.style.setProperty(
            `--${e.target.name}`,
            e.target.value
        )
    })
});

button.addEventListener("click", () => {
    const style = getComputedStyle(box)
    let borderCSS = style.borderRadius
    
    console.log(borderCSS)
})