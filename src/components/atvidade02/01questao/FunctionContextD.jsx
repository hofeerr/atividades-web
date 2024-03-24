
import ColorTheme from "./MyColorContext"

const FunctionContextD = () => {
    return (
        <ColorTheme.Consumer>
            {
                (colors) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: colors.bkgD, color: "black" }}>
                                Contexto D
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextD