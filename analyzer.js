const analyzer = {
  getWordCount: (text) => {
    if (text === '') {
      return 0;
    }
    const cadenaDeTexto = text.trim().split(' ').length

    return cadenaDeTexto
  },

  getCharacterCount: (text) => {
    if (text === '') {
      return 0;
    }
    return text.length
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    if (text === '') {
      return 0;
    }
    const caracSinEspacios = text.replace(/[\s.,/#!$%^&*;:{}=\-_~()]/g, '').length
    return caracSinEspacios
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    if (text === '') {
      return 0;
    }

    const arrayWord = text.trim().split(' ')
    //console.log (arrayWord)
    let contador = 0

    for (let i = 0; i < arrayWord.length; i++) {
      //console.log (arrayWord[i].length) 
      contador = contador + arrayWord[i].length
    }

    const conversion = contador/arrayWord.length
    //console.log (conversion)
    return Number(conversion.toFixed(2))

    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    if (text === '') {
      return 0;
    }

    //PRUEBA 1
    const numSinSignos = text.match(/(?<!\w)\d+(\.\d+)?(?!\w)/g)
    return numSinSignos ? numSinSignos.length : 0; 

    //PRUEBA 3
    /*for (let i = 0; i < text.trim().split(' ').length; i++) {
    let num = text
    let numero = parseInt(text)
    }
    return numero*/

    //PRUEBA 2
    /*if (parseInt(text)){
      return text.length
    } else {
      return ''
    }*/

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    if (text === '') {
      return 0;
    }

    const sumaNum = text.match(/(?<!\w)\d+(\.\d+)?(?!\w)/g)
    return sumaNum ? sumaNum.reduce((anterior, actual) => anterior + parseFloat(actual), 0) : 0;

    //return sumaNum ? sumaNum.length : 0;

    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
