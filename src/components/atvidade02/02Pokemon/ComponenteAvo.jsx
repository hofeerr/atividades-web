import ComponenteFilho from "./ComponenteFilho"
import idContext from "./Context";


const ComponenteAvo = () => {
    
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const id = 1;

    return (
        <idContext.Provider value={id}>
            <div>
                <h4>Pokemon Vovô!</h4>
                <img
                    src = { url + id +".png" }
                    alt = "Pokemon"
                    width = {150}
                />
                <ComponenteFilho />
            </div>

        </idContext.Provider>
    )
}

export default ComponenteAvo  