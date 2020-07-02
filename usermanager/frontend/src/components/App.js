import React from "react";
import ReactDOM from "react-dom";
import UserTable from "./table";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component {
    apiURL = "http://localhost:8000/api/pokemons/";
    state = {
        List: [],
    };

    componentDidMount(){
        this.updateService()
    }

    updateService(){
        fetch(this.apiURL)
        .then((request) => {
            return request.json();
        })
        .then((data) => {
            this.setState({
            List: data,
            });
        })
        .catch((err) => console.log(err.message));
    }

    onDeleteItem = (id) => {
        fetch(this.apiURL+id, {
            method: "DELETE",
        })
        .then((response) => {
            this.updateService();
            console.log(response);
        })
        .catch((err) => console.log(err.message)
        );
    }
    render() {
    return (
        <div className="outer-container">
            <h1>Pokemons Table</h1>
            <UserTable
                List={this.state.List}
                onDeleteItem={this.onDeleteItem}
            />
        </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));