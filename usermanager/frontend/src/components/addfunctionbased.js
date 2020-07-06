import React from 'react';
import NewOneForm from "./addform";

const AddFunctionBased = ({onChangeBackgroundImage}) =>{
    return(<NewOneForm
    onChangeBackgroundImage = {() => onChangeBackgroundImage()} // for new features in future
    />
    )
}

export default AddFunctionBased