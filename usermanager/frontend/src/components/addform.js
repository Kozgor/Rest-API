import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class NewOneForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: "",
      location: "",
      des: "",
      typoff: "",
      evol: "0",
      trainer: "1",
    };
    this.onChangePokemon = this.onChangePokemon.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDes = this.onChangeDes.bind(this);
    this.onChangeTypoff = this.onChangeTypoff.bind(this);
    this.onChangeEvol = this.onChangeEvol.bind(this);
    this.onChangeTrainer = this.onChangeTrainer.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangePokemon(event) {
    this.setState({ pokemon: event.target.value });
  }
  onChangeLocation(event) {
    this.setState({ location: event.target.value });
  }
  onChangeDes(event) {
    this.setState({ des: event.target.value });
  }
  onChangeTypoff(event) {
    this.setState({ typoff: event.target.value });
  }
  onChangeEvol(event) {
    this.setState({ evol: event.target.value });
  }
  onChangeTrainer(event) {
    this.setState({ trainer: event.target.value });
  }
  onSubmit = () => {
    fetch("http://localhost:8000/api/pokemons/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        pokemon_name: this.state.pokemon,
        residence: this.state.location,
        description: this.state.des,
        pokemon_type: this.state.typoff,
        evolution_form: this.state.evol,
        trainer: this.state.trainer
      }),
    })
      .catch((err) => console.log(err.message));
  };

  render() {
    return (
      <Fragment>
      <div className="big-div-form ">
        <form className="add-form" onSubmit={this.onSubmit}>
          <h2>Add new pokemon to base</h2>
          <label>Покемон </label>
          <input
            type="text"
            name="pokemon"
            value={this.state.pokemon}
            onChange={this.onChangePokemon}
          />

          <label>Де знайти </label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.onChangeLocation}
          />

          <label>Опис </label>
          <input
            type="text"
            name="des"
            value={this.state.des}
            onChange={this.onChangeDes}
          />

          <label>Тип покемона </label>
          <select
            name="typoff"
            value={this.state.typoff}
            onChange={this.onChangeTypoff}
          >
            <option value="1">Nature</option>
            <option value="2">Water</option>
            <option value="3">Fire</option>
            <option value="4">Electricity</option>
            <option value="5">Earth</option>
            <option value="6">Air</option>
            <option value="7">Telecinesis</option>
            <option value="8">Darkness</option>
            <option value="9">Light</option>
            <option value="10">Ice</option>
            <option value="11">Cosmic</option>
            <option value="12">Time</option>
          </select>

          <label>Форма еволюції</label>
          <select
            name="evol"
            value={this.state.evol}
            onChange={this.onChangeEvol}
          >
            <option value="0">N/E</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <input
            type="hidden"
            name="trainer"
            value={this.state.trainer}
            onChange={this.onChangeTrainer}
          />
        <div className="send-form-div">
          <input type="submit" value="Додати екземпляр" className="submit-form-btn" />
          <Link to="/"><input type="button" value="На головну"/></Link>
        </div>
        </form>
        </div>
      </Fragment>
    );
  }
}
export default NewOneForm;
