import "../css/styles.css";

import mainImage from '../images/main.jpg';

img.src = mainImage; // '/dist/151cfcfa1bd74779aadb.png'

var Logger = function(message){
    console.log(new Date(Date.now()), " - ", message);
}

//update content of greeting element when DOM has been loaded. Using arrow function.
document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('greeting').innerHTML = "Hello my friend!";
    Logger("Greeting has been updated");

    
let imageInsert = document.getElementById('hg');
imageInsert.innerHTML = `<p>Hola</p>
<img src="${img.src}" alt="imagen template de recetas" class="template-image">`;

})
