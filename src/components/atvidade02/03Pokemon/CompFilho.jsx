import { useContext } from "react"
import CompNeto from "./CompNeto"
import idContext from "./Context"

const CompFilho = () => {

    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const contador = useContext(idContext) 

    return (
        <div>
            <h4>Pokemon Filho!</h4>
                <img
                    src = { url + (contador + 1) +".png" }
                    alt = "Pokemon"
                    width = {150}
                />
            <CompNeto />
        </div>
    )
}

export default CompFilho