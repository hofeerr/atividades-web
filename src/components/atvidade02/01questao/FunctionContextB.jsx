
import ColorTheme from "./MyColorContext"

const FunctionContextB = () => {
    return (
        <ColorTheme.Consumer>
            {
                (colors) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: colors.bkgB, color: "black" }}>
                                Contexto B
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextB