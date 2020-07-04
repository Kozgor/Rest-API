import React from 'react';
import TableItem from './items';
import {Link} from "react-router-dom";

const UserTable = ({List, onDeleteItem}) => {
    const item = List.map(item => {
        return (<TableItem
            key = {item.id}
            id = {item.id}
            pokemon_name = {item.pokemon_name}
            residence = {item.residence}
            pokemon_type = {item.pokemon_type}
            evolution_form = {item.evolution_form}
            description = {item.description}
            catched_up_in = {item.catched_up_in}
            onDeleteItem = {() => onDeleteItem(item.id)}
        />
        );  
    });

    return (
        <div className="outer-container">
            <h1>Pokemons Table</h1>
            <div className="btn-div">
                <Link to='/add'>
                    <button className="btn effect04" data-sm-link-text="CLICK" target="_blank"><span>Add</span></button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Pokemon</th>
                        <th>Evo</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Live in</th>
                        <th>Edit</th>
                        <th>Del</th>
                    </tr>
                </thead>
                <tbody>
                    {item}
                </tbody>
            </table>
        </div>
    )
};
export default UserTable;