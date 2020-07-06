import React from 'react';
import EditItem from "./editform";

const EditFunctionBased = ({currentContact, onEditItem, api, contact}) =>{
    return (<EditItem
        key = {contact.id}
        id = {contact.id}
        pokemon_name = {contact.pokemon_name}
        residence = {contact.residence}
        pokemon_type = {contact.pokemon_type}
        evolution_form = {contact.evolution_form}
        description = {contact.description}
        catched_up_in = {contact.catched_up_in}
        currentContact = {() => currentContact()}
        onEditItem = {() => onEditItem()}
        api = {api}
        contact ={contact}
    />
    );
}

export default EditFunctionBased