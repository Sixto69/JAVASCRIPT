function clickBorde(){
    const imagen  = document.querySelector('#imgBorde')

    if (imagen.style.borderColor === 'black' ){

        imagen.style.borderColor ='transparent';
    } else {
        imagen.style.borderColor = 'black';
    }
}