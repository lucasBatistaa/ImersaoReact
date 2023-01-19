import React from "react";
import { ThemeProvider } from "styled-components";
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/components/ColorMode";
import RegisterVideo from "../src/components/RegisterVideo";
import { CSSReset } from "../src/css/CSSReset";

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#FFF",
        backgroundLevel2: "#F0F0F0",
        borderBase: "#e5e5e5",
        textColorBase: "#222",
    },
    dark: {
        backgroundBase: "#101010",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#383838",
        borderBase: "#383838",
        textColorBase: "#FFF",
    }
}

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"light"}>
            {props.children}
        </ColorModeProvider>
    )
}

function MyApp({ Component, pageProps }) {

    const contexto = React.useContext(ColorModeContext);

    return (
        <ThemeProvider theme={theme[contexto.mode]}>
            <CSSReset />
            <Component {...pageProps} />
            <RegisterVideo />
        </ThemeProvider>
    )
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    )
}