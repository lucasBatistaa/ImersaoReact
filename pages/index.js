import React from "react";

import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline/Timeline";

import Menu from "../src/components/Menu/Index";

import { videoService } from "../src/services/videoService";
import Favorites from "../src/components/Favorites";

function HomePage() {
    const service = videoService()
    const [valorDoFiltro, setValorDoFiltro] = React.useState("")

    const [playlists, setPlaylists] = React.useState({})
    const [favoritos, setFavoritos] = React.useState({})


    React.useEffect(() => {
        service
            .getAllVideos()
            .then((dados) => {

                const novasPlaylists = { ...playlists }
                dados.data.forEach((video) => {
                    if (!novasPlaylists[video.playlist]) {
                        novasPlaylists[video.playlist] = []
                    }

                    novasPlaylists[video.playlist].push(video)
                })
                
                setPlaylists(novasPlaylists)
            })

        service
            .getAllFavorites()
            .then((dados) => {

                const novosFavoritos = []
                dados.data.forEach((aluratuber) => {

                    const username = aluratuber.github_user
                    novosFavoritos.push(username)
                })

                setFavoritos(novosFavoritos)
            })
    }, [])

    return (
        <div>
            <div
                style={{ display: "flex", flexDirection: "column", flex: 1 }}
            >
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={playlists} />
                <Favorites favorites={favoritos} />
            </div>
        </div>
    )
}

export default HomePage