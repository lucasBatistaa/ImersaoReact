import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline/Timeline";

import config from '../config.json';
import { CSSReset } from "../src/css/CSSReset";
import Menu from "../src/components/Menu";

function HomePage() {
    return (
        <div>

            <CSSReset />

            <div
                style={{ display: "flex", flexDirection: "column", flex: 1 }}
            >
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </div>
    )
}

export default HomePage