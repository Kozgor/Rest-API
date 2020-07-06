import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';

class EditItem extends Component {
    state = {
        id: this.props.id,
        pokemon_name: this.props.pokemon_name,
        pokemon_type: this.props.pokemon_type,
        catched_up_in:this.props.catched_up_in,
        evolution_form: this.props.evolution_form,
        description: this.props.description,
        residence: this.props.residence,
        trainer: '1',
        formIsValid:true
    };
    onChangePokemon = this.onChangePokemon.bind(this);
    onChangeLocation = this.onChangeLocation.bind(this);
    onChangeDescription = this.onChangeDescription.bind(this);
    onChangePokemon_type = this.onChangePokemon_type.bind(this);
    onChangeEvol = this.onChangeEvol.bind(this);
    onChangeTrainer = this.onChangeTrainer.bind(this);
    
    onChangePokemon(event) {
        this.setState({ pokemon_name: event.target.value });
    }
    onChangeLocation(event) {
        this.setState({ residence: event.target.value });
    }
    onChangeDescription(event) {
        this.setState({ description: event.target.value });
    }
    onChangePokemon_type(event) {
        this.setState({ pokemon_type: event.target.value });
    }
    onChangeEvol(event) {
        this.setState({ evolution_form: event.target.value });
    }
    onChangeTrainer(event) {
        this.setState({ trainer: event.target.value });
    }
      
    onSubmit = () => {
        fetch(this.props.api+"/", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            pokemon_name: this.state.pokemon_name,
            residence: this.state.residence,
            description: this.state.description,
            catched_up_in: this.props.catched_up_in,
            pokemon_type: this.state.pokemon_type,
            evolution_form: this.state.evolution_form,
            trainer: this.state.trainer
          }),
        })
        this.setState({
          formIsValid: false,
        })
        alert("Обновіть сторінку що б побачити зміни")
        .catch((err) => console.log(err.message));
      };
    render() {
      if (this.state.formIsValid == false){
        return <Redirect to="/"></Redirect>
      } 
      return (
        <Fragment>
        <div className="edit-form-div">
          <form className="add-form hidden-edit" onSubmit={this.onSubmit}>
            
          <h2>Edit info for: {this.props.pokemon_name}</h2>
           <label>Ім'я</label>
          <input type="text" 
          name="pokemon_name" 
          placeholder={this.state.pokemon_name} 
          value={this.state.pokemon_name} 
          onChange={this.onChangePokemon}/>
        
        
          <label>Де знайти </label>
          <input
            type="text"
            name="residence"
            value={this.state.residence}
            onChange={this.onChangeLocation}
          />

          <label>Опис </label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.onChangeDescription}
          />

          <label>Тип покемона </label>
          <select
            name="pokemon_type"
            value={this.state.pokemon_type}
            onChange={this.onChangePokemon_type}
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
            name="evolution_form"
            value={this.state.evolution_form}
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
                <input type="submit" value="Зберегти зміни" className="submit-form-btn"/>
                <Link to="/"><input type="button" value="На головну" onClick={this.props.onChangeBackgroundImage}/></Link>
            </div>
        </form>
        
        </div>
        </Fragment>
      );
    };
  };
export default EditItem
