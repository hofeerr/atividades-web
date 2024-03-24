import React from "react";
import ColorTheme from "./MyColorContext";

class ClassA extends React.Component {

    render() {

        const colors = { bkgA: "green", bkgB: "white", bkgC: "yellow", bkgD: "blue" }

        return (
            <ColorTheme.Provider value= {colors}>
                <h1 style={{backgroundColor: colors.bkgA, color: "black"}}>
                    Contexto A
                </h1>
                <ClassB />
            </ColorTheme.Provider>
        )
    }
}

class ClassB extends React.Component {

    render() {
        let colors = this.context
        return (
            <div>
                <h1 style={{backgroundColor: colors.bkgB, color: "black"}}>
                    Contexto B
                </h1>
            </div>
        )
    }
}

ClassB.contextType = ColorTheme

export default ClassA