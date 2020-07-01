import React from "react";
import ReactDOM from "react-dom";
import UserTable from "./table";

class App extends React.Component {
    state = {
        List: [
            {
                id:1,
                name:"pikatchu",
                evolution: 1,
                description: "electro",
                catched: "27/12/1989"
            },
            {
                id:2,
                name:"bulbasaur",
                evolution: 1,
                description: "nature",
                catched: "27/12/1989"
            },
            {
                id:3,
                name:"squirtle",
                evolution: 1,
                description: "waterguy",
                catched: "27/12/1989"
            },
            {
                id:4,
                name:"charmander",
                evolution: 1,
                description: "fire salamander",
                catched: "27/12/1989"
            }
        ]
    };
    render() {
    return (
        <div className="outer-container">
            <h1>Pokemons Table</h1>
            <UserTable
                List={this.state.List}
            >
            </UserTable>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));