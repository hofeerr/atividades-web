import React, { useState, useEffect } from 'react';

const Questao04 = () => {
  const [capitalMaiorPop, setCapitalMaiorPop] = useState('');
  const [capitalMenorPop, setCapitalMenorPop] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            //Promise interna que simula uma chamada de API
            //Poderia receber duas funções: resolve e reject. Utilizando resolve pois estou simulando uma operação bem-sucedida.
            const getData = () => {
                return new Promise((resolve) => {
                    resolve([
                        { capital: ["Dublin"], population: 4994724 },
                        { capital: ["Nicosia"], population: 1207361 },
                        { capital: ["Madrid"], population: 47351567 }
                    ])
                })
            }

            //Novamente temos uma pausa na execução da função até que a Promise seja resolvida
            const data = await getData()
        
            if (data.length > 0) {
                let maiorPop = -Infinity
                let menorPop = Infinity
                let capitalMaior = ""
                let capitalMenor = ""
                
                //Classico forEach para iterando novamente para encontrar as capitais com maior e menor população
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
  //Manter as dependências vazias para que o efeito execute apenas uma vez (como anteriormente)

  return (
    <div>
        <p><strong>Maior</strong> População: <strong>{capitalMaiorPop}</strong> </p>
        <p><strong>Menor</strong> População: <strong>{capitalMenorPop}</strong> </p>
    </div>
  )
}

export default Questao04;