import { useContext } from "react"
import idContext from "./Context"

const CompNeto = () => {
    
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const contador = useContext(idContext)

    return (
        <div>
            <h4>Pokemon Neto!</h4>
            <img
                src = { url + (contador + 2) +".png" }
                alt = "Pokemon"
                width = {150}
            />
        </div>

    )
}

export default CompNeto