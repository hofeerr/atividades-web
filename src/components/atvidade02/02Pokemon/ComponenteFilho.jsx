import { useContext } from "react"
import ComponenteNeto from "./ComponenteNeto"
import idContext from "./Context"

const ComponenteFilho = () => {

    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const id = useContext(idContext) 

    return (
        <div>
            <h4>Pokemon Filho!</h4>
                <img
                    src = { url + (id + 1) +".png" }
                    alt = "Pokemon"
                    width = {150}
                />
            <ComponenteNeto />
        </div>
    )
}

export default ComponenteFilho