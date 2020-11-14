import React from "react"
import { Paper, Typography } from "@material-ui/core"

class VideoDetails extends React.Component {

    render() {
        const { video } = this.props
        if (!video)
            return <div>Loading......</div>
        const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`

        return (
            <React.Fragment>
                <Paper elevation={6} style={{ height: '70%' }}>
                    <iframe frameBorder="0" src={videoURL} height="100%" width="100%" title="Main Video" />
                </Paper>
                <Paper elevation={6}>
                    <Typography variant="h5">{video.snippet.title}</Typography>
                    <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>
            </React.Fragment>
        )
    }
}

export default VideoDetails