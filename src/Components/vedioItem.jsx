import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core"

const VideoItem = ({ video, id, onClick }) => {
    console.log(video)

    const handleClick = (e) => {
        e.preventDefault()
        onClick(id)
    }

    return (
        <Grid item xs={12}>
            <Paper style={{ display: "flex", cursor: "pointer" }} onClick={handleClick}>
                <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" style={{ marginRight: "20px" }} />
                <Typography variant="subtitle2">{video.snippet.title}</Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem