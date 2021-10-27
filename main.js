var images = ['lara-feliz.jpg', 'lara-neutra.jpeg', 'lara-puta1.jpg'];
var humor = ['Feliz', 'Neutra', 'Pistola'];
var i = 0;

function trocaHumor(){
    let v = document.getElementById('troca-humor')
    if(i==images.length){
        i=0;
    }
    document.getElementById('troca-img').src=images[i];
    v.innerHTML=humor[i];
    i++;
}