import React, { Component, Fragment } from "react";

class TableItem extends Component {
  state = {
    id: this.props.id,
    pokemon_name: this.props.pokemon_name,
    pokemon_type: this.props.pokemon_type,
    evolution_form: this.props.evolution_form,
    description: this.props.description,
    catched_up_in: this.props.catched_up_in,
  };
  
  render() {
    const { pokemon_name, evolution_form, description, catched_up_in, pokemon_type} = this.state;
    const pokemon_types = ['default', 'Nature', 'Water', 'Fire', 'Electricity', 'Earth', 'Air','Telecinesis', 'Darkness', 'Light', 'Ice', 'Cosmic', 'Time'];
    for(let i = 0; i<pokemon_types.length; i++){
        if(this.props.pokemon_type == i){
            var textify = pokemon_types[i]
        }
    }

    if (this.props.evolution_form == 0){
        var evo = 'N/E'
    }
    else (evo = this.props.evolution_form)

    return (
      <Fragment>
        <tr className="priority-200">
          <td className="name">{pokemon_name}</td>
          <td className="delete">{evo}
          </td>
          <td className={textify}>{textify}</td>
          <td className="priority">{description}</td>
          <td className="impressions">{catched_up_in}</td>
          <td className="delete">
            <button className="edit-btn" onClick={this.props.onEditItem}>
              <i className="fas fa-pencil-alt" title="edit row"></i>
            </button>
          </td>
          <td className="delete">
            <button className="delete-btn" onClick={this.props.onDeleteItem}>
              <i className="fas fa-trash-alt" title="delete row"></i>
            </button>
          </td>
        </tr>
      </Fragment>
    );
  }
}
export default TableItem;
