import React from "react";
import ReactDOM from "react-dom";
import UserTable from "./table";
import NewOneForm from "./addform";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component {
  apiURL = "http://localhost:8000/api/pokemons/";
  state = {
    List: [],
  };

  componentDidMount() {
    this.updateService();
  }
  
  updateService() {
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
    fetch(this.apiURL + id, {
      method: "DELETE",
    })
      .then((response) => {
        this.updateService();
        console.log(response);
      })
      .catch((err) => console.log(err.message));
  };

  render() {
    return (
      <Router>
        <Switch>
            <Route path="/" exact render={() => (<UserTable List={this.state.List} onDeleteItem={this.onDeleteItem}/>)}/>
            <Route path="/add" exact render={() => (<NewOneForm/>)}/>
        </Switch>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));