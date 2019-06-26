function palindromo(cad)
{
    //palindromo
    var pal=cad.replace(/ /g,"").split("").reverse().join("") === cad.replace(/ /g,"") ;
  return pal;
}

function palabras(cad){
    // palabras en la cadena 
    var palabra=cad.split(" ").length;
    return palabra;
}

function letras(cad){
    //nume letras
    var letras= cad.replace(/ /g,"").length;
    return letras;
}

function vc(cad){
    //num vocales
    var voc=cad.replace(/ /g,"");
    var nv=0;
    for(i =0;i<=voc.length-1;i++)
    {
        if(voc.charCodeAt(i)===97 ||voc.charCodeAt(i)===101 
        || voc.charCodeAt(i)===105 || voc.charCodeAt(i)===111 || voc.charCodeAt(i)===117
        || voc.charCodeAt(i)===65 || voc.charCodeAt(i)===69 || voc.charCodeAt(i)===73
        || voc.charCodeAt(i)===79 || voc.charCodeAt(i)===85)
        {
            nv++;
        }
    }
    return nv;
}
function vc2(cad){
    //num vocales
    var voc=cad.replace(/ /g,"");
    var nc=0;
    for(i =0;i<=voc.length-1;i++)
    {
        if(voc.charCodeAt(i)===97 ||voc.charCodeAt(i)===101 
        || voc.charCodeAt(i)===105 || voc.charCodeAt(i)===111 || voc.charCodeAt(i)===117
        || voc.charCodeAt(i)===65 || voc.charCodeAt(i)===69 || voc.charCodeAt(i)===73
        || voc.charCodeAt(i)===79 || voc.charCodeAt(i)===85)
        {
           // nv++;
        }
        else
        nc++;
    }
    return nc;
}
module.exports.palindromo = palindromo;
module.exports.palabras = palabras;
module.exports.letras = letras;
module.exports.vc = vc;
module.exports.vc2 = vc2;