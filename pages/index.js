import React from "react";

import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline/Timeline";

import config from '../config.json';
import { CSSReset } from "../src/css/CSSReset";
import Menu from "../src/components/Menu";

function HomePage() {

    const [valorDoFiltro, setValorDoFiltro] = React.useState("Angular");
    
    return (
        <div>

            <CSSReset />

            <div
                style={{ display: "flex", flexDirection: "column", flex: 1 }}
            >
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
            </div>
        </div>
    )
}

export default HomePage