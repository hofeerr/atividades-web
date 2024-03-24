import { useContext } from "react"
import idContext from "./Context"

const ComponenteNeto = () => {
    
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const id = useContext(idContext)

    return (
        <div>
            <h4>Pokemon Neto!</h4>
                <img
                    src = { url + (id + 2) +".png" }
                    alt = "Pokemon"
                    width = {150}
                />
        </div>

    )
}

export default ComponenteNeto