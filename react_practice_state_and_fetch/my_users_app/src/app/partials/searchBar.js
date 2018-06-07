import React, { Component } from "react"

export class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText =""
        }
    }



    inputHandler = (event) => {
        const inputText = event.target.value;
        this.setState({
            inputText
        })
    }

    renderSearch(){
        return <input type = "text"
            onChange = {this.inputHandler}
            value = {this.state.inputText}
        />
    }
}