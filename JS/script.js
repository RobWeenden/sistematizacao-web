let tempoRotacao = 3000,
indexImageMont = 0,
imagens =document.querySelectorAll("#slider img")
max = imagens.length;

function proximaImage(){
    imagens[indexImageMont].classList.remove("selecao")

    indexImageMont++

    if(indexImageMont >= max){
        indexImageMont = 0
    }
    imagens[indexImageMont].classList.add("selecao")
}
function inicar(){
   setInterval(()=> {
       //troca de image
       proximaImage()
   }, tempoRotacao)
}
window.addEventListener("load", inicar)