import React, {Component, Fragment} from 'react';

class TableItem extends Component {
    state = {
        id:this.props.id,
        name:this.props.name,
        evolution:this.props.evolution,
        description:this.props.description,
        catched:this.props.catched
    }
render(){
    const {name, evolution,description,catched} = this.state
    return (
        <Fragment>
            <tr className="priority-200">
                <td className="name">{name}</td>
                <td className="clicks"><i className="fas fa-circle"></i> {evolution}</td>
                <td className="priority">{description}</td>
                <td className="impressions">{catched}</td>
                <td className="delete"><button className="delete-btn"><i className="fas fa-trash-alt" title="delete row"></i></button></td>
            </tr>
        </Fragment>
    )
}}
export default TableItem;