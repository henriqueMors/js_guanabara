let alt = document.getElementById("background")
alt.addEventListener ('mousedown', segurou)

function gerar_cor(opacidade = 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
 
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
 }
function clicou() {
    let alt = document.getElementById("background")
    alt.style.background = gerar_cor()
    
}

function segurou() {

    alt.style.background = gerar_cor()
}