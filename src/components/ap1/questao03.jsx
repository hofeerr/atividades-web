import React, { useState, useEffect } from 'react';

const Questao03 = () => {
    
    const [capitalMaiorPop, setCapitalMaiorPop] = useState('');
    const [capitalMenorPop, setCapitalMenorPop] = useState('');
    
    useEffect(() => {
        
        //Utilizando async, ou seja, função assíncrona, o que permite que a função seja pausada e continue depois que a Promise for resolvida
        const fetchData = async () => {
            try {

                //função fetch com await, que faz a requisição pause a função e aguarde a resposta -promisse- para continuar
                const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
                
                const data = await response.json()
                
                if (data.length > 0) {
                    let maiorPop = -Infinity
                    let menorPop = Infinity
                    let capitalMaior = ""
                    let capitalMenor = ""


                    //um clássico forEach para iterar e encontrar as capitais com maior e menor população
                    data.forEach(country => {
                        const population = country.population
                        const capital = country.capital[0]
                        
                        if (population > maiorPop) {
                            maiorPop = population
                            capitalMaior = capital
                        }
                        
                        if (population < menorPop) {
                            menorPop = population
                            capitalMenor = capital
                        }
                    })
          
                    setCapitalMaiorPop(capitalMaior)
                    setCapitalMenorPop(capitalMenor)
                }
            } catch (error) {
                console.error("Erro na busca dos dados:", error)
            }
        }

    fetchData()
  }, [])
  //Manter as dependências vazias para que o efeito execute apenas uma vez

  return (
    <div>
        <p><strong>Maior</strong> População: <strong>{capitalMaiorPop}</strong> </p>
        <p><strong>Menor</strong> População: <strong>{capitalMenorPop}</strong> </p>
    </div>
  )
}

export default Questao03;