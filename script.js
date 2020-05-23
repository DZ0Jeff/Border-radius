const container = document.querySelector('.box-container')
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
    // Get CSS value
    const style = getComputedStyle(box)
    let borderCSS = style.borderRadius

    // Create input
    const cssOutput = document.createElement('input')
    cssOutput.value = borderCSS
    container.appendChild(cssOutput)
    const border_radius = cssOutput.value 
    
    // Copy
    cssOutput.select()
    const sucess = document.execCommand('copy')
    
    // Remove HTML element after copy
    container.removeChild(cssOutput)

    sucess ? alert(`Copiado! valor: ${border_radius}`) : alert(`Erro! :(`)
})