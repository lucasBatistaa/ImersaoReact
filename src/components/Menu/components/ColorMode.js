import React from "react";

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => {alert("Configurar primeiro")},
    toggleMode: () => ( alert("Configurar primeiro!"))
})

export default function ColorModeProvider(props) {

    const [mode, setMode] = React.useState(props.initialMode)

    function toggleMode() {
        if (mode === "dark") {
            setMode("light")
        } else {
            setMode("dark")
        }
    }

    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}> 
            {props.children}
        </ColorModeContext.Provider>
    )
}

// 73904f576b956c8a95454cb612f8cb16
