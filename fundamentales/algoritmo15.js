const cadenasPalabras = (a, b) => {
   
    return  b.split(a).length - 1
}


console.log( cadenasPalabras('h', 'how many times does the character occur in this sentence?'));