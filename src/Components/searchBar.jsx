import React from "react"
import { Paper, TextField } from "@material-ui/core"

class SearchBar extends React.Component {
    state = {
        term: ""
    }

    handleChange = (event) => {
        this.setState({ term: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { term } = this.state
        const { formSubmit } = this.props

        formSubmit(term)
    }

    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField label="Search...." fullWidth onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar