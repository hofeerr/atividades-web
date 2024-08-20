import React, { useState } from 'react';

//Utilizando function de forma clássica
function Questao02() {

    //template: [variável, função que eu quero] = UseState(estado ini)
    //displayFront refere-se ao estado inicial do pokemon, que é a frente, por isso é setado como "true", pois queremos que ele inicialize de frente
    const [displayFront, setdisplayFront] = useState(true);
    
    // Imagens do Pokemon sendo guardadas em variáveis
    const frontImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    
    const backImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'
    
    //Função alterna o estado de displayFront entre true e false a cada clique no botão
    const toggleImage = () => {
        setdisplayFront(prevdisplayFront => !prevdisplayFront);
    };
    
    return (
    <div>
      <img 
        src={displayFront ? frontImage : backImage} 
        alt="Pokemon"
        style={{ width: '200px', height: '200px' }} 
      />
    <button onClick={toggleImage}>
        vira vira virou! 
    </button>

    </div>
  );
}

export default Questao02;