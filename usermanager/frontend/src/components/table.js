import React from 'react';
import TableItem from './items';

const UserTable = ({List, onDeleteItem}) => {
    const item = List.map(item => {
        return (<TableItem
            key = {item.id}
            id = {item.id}
            pokemon_name = {item.pokemon_name}
            pokemon_type = {item.pokemon_type}
            evolution_form = {item.evolution_form}
            description = {item.description}
            catched_up_in = {item.catched_up_in}
            onDeleteItem = {() => onDeleteItem(item.id)}
        />
        );
    
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Pokemon</th>
                    <th>Evo</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Catched in</th>
                    <th>Edit</th>
                    <th>Del</th>
                </tr>
            </thead>
            <tbody>
                {item}
            </tbody>
        </table>
    )
};
export default UserTable;