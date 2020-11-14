import React from "react"
import { Grid } from "@material-ui/core"
import youtube from "./api/youtube"
import { SearchBar, VideoDetails, VideoList } from "./Components"


class App extends React.Component {
    state = {
        videos: [],
        mainVideo: null,
        main_id: 0
    }

    componentDidMount() {
        this.handleChange('cricket')
    }

    handleChange = async (term) => {
        const data = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 6,
                key: process.env.api_key,
                q: term
            }
        })
        this.setState({ videos: data.data.items, mainVideo: data.data.items[this.state.main_id] })
        console.log(this.state.videos)
    }

    handleClick = (item) => {
        this.setState({ mainVideo: this.state.videos[item], main_id: item })
    }

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <SearchBar formSubmit={this.handleChange} />
                </Grid>
                <Grid item xs={8}>
                    <VideoDetails video={this.state.mainVideo} />
                </Grid>
                <Grid item xs={4}>
                    <VideoList video={this.state.videos} onClick={this.handleClick} no={this.state.main_id} />
                </Grid>
            </Grid>
        )
    }
}

export default App