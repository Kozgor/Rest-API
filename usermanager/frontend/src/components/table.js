import React from 'react';
import TableItem from './items';

const UserTable = ({List}) => {
    const item = List.map(item => {
        return (<TableItem
            key = {item.id}
            name = {item.name}
            evolution = {item.evolution}
            description = {item.description}
            catched = {item.catched}
        />
        );
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Pokemon</th>
                    <th>Evolution</th>
                    <th>Description</th>
                    <th>Catched</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {item}
            </tbody>
        </table>
    )
};
export default UserTable;