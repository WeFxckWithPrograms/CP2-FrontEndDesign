//DECLARANDO UM ARRAY DE IMAGENS

let imagens = [
    'src/assets/',
    'src/assets/',
    'src/assets/',
];

//DECLARANDO AS VARIÁVEIS

let index = 0;
let tempo = 3000;

//CRIANDO A FUNÇÃO DO SLIDESHOW

function slideShow() {
    document.getElementById('image').src = imagens[index];
    index++;
    //VERIFICAR QUANTIDADE DE IMAGENS
    if (index == imagens.length) {
        index = 0;
    }
    setTimeout("slideShow()",tempo)
}
//EXECUTA A FUNÇÃO
slideShow();