import React from 'react';

//Função Arrow
const Questao01A = () => {
    
    const lista = [
        { a: 10, b: 3, c: 7 },
        { a: 5, b: -3, c: 9 },
        { a: 1, b: 9, c: 40 }
    ]
    
    return (
    <div>
        <h6>Chamando componente Questao01B & Passando via props a lista para ele...</h6>
        <Questao01B lista={lista} />
    </div>
    )
}

//Function clássica + descontrução de props para pegar a lista
function Questao01B({ lista }) {

    const maxValuePerObject = (items) => {
        return items.map(item => {
            //O método Math.max() retorna o maior número de uma sequência de números e é função padrão do JavaScript
            return Math.max(item.a, item.b, item.c);
        })
    }
    
    //Busca os maiores valores
    const maxValues = maxValuePerObject(lista);
    

    //Iterando sobre os valores máximos e remderizando cada valor em um elemento <div> se utilizando do método map
    return (
    <div>
        <h4>Maiores Valores:</h4>
            {maxValues.map((value, index) => (
                <div key={index}> 
                    <strong>Objeto {index + 1} = </strong>
                    {value}
                </div>
                )
            )}
        
    </div>
    )
}

export default Questao01A;