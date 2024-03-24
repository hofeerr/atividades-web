import { useState } from "react"
import CompFilho from "./CompFilho"
import idContext from "./Context"



const CompAvo = () => {
    
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [contador, setContador] = useState(1);

    const incrmentaContador = () => {
        setContador(contador + 3)
    }

    return (
        <idContext.Provider value={contador}>
            <div>
                <h4>Pokemon Vovô!</h4>
                <img
                    src = { url + contador +".png" }
                    alt = "Pokemon"
                    width = {150}
                />
                <CompFilho />

                <br /><br />
                <button onClick={incrmentaContador}>Próxima Geração</button>

            </div>

        </idContext.Provider>
    )
}

export default CompAvo  