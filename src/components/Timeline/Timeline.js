import { StyledTimeline } from "./TimelineCSS";

export default function Timeline(props) {
    console.log(props.playlists)
    const playlistNames = Object.keys(props.playlists)


    // statement e retorno por expressão

    return (
        <StyledTimeline>
            {playlistNames.map((playlistNames) => {
                const videos = props.playlists[playlistNames];
                
                return (
                    <section>
                        <h2>{playlistNames}</h2>

                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />

                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}