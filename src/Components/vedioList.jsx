import React from "react"
import VideoItem from "./vedioItem"
import { Grid } from "@material-ui/core"

const VideoList = ({ video, onClick, no }) => {
    if (!video)
        return "Loading....."
    const videolist = video.map((item, id) => id !== no ? <VideoItem key={id} id={id} video={item} onClick={onClick} /> : null)
    return (
        <Grid container spacing={2}>
            {videolist}
        </Grid>
    )
}

export default VideoList