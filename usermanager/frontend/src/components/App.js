import React from "react";
import ReactDOM from "react-dom";
import TableFunctionBased from "./tablefunctionbased";
import AddFunctionBased from "./addfunctionbased";
import EditFunctionBased from "./editfunctionbased";


import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component {
  apiURL = "http://localhost:8000/api/pokemons/";
  api = '';
  contact = {};
  state = {
    List: [],
  };

  componentDidMount() {
    this.updateService();
  }
  onChangeBackgroundImage(){
    var body = document.getElementsByTagName('body')[0];
    if (body.classList == ''){
      body.classList.add('second-wallpaper');
    }
    else {
      body.classList.remove('second-wallpaper');
    }
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
        console.log(response)
      })
      .catch((err) => console.log(err.message));
  };

  onEditItem = (id) => {
    fetch(this.apiURL + id, {
      method: "GET",
    })
    .then((response) => {
      this.updateService();
      console.log(response)
    })
    .catch((err) => console.log(err.message));
    var res = this.state.List
    for(var i =0; i<res.length; i++){
      if(res[i].id == id){
        this.contact=res[i]
      }
    }
    this.api = this.apiURL + id
  };

  render() {
    return (
      <Router>
        <Switch>
            <Route path="/" exact render={() => (<TableFunctionBased List={this.state.List} onChangeBackgroundImage={this.onChangeBackgroundImage} onEditItem ={this.onEditItem} apiURL={this.apiURL} onDeleteItem={this.onDeleteItem}/>
            )}/>
            <Route path="/add" exact render={() => (<AddFunctionBased onChangeBackgroundImage={this.onChangeBackgroundImage}/>
            )}/>
            <Route path="/edit" exact render={() => (<EditFunctionBased List={this.state.List} updateService={this.updateService} currentContact={this.state.currentContact} contact={this.contact} api={this.api}/>
            )}/>
        </Switch>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));