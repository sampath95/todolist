import React, { Component } from "react";
import './checkbox.css';

 
class TodoItems extends Component {
    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
        this.state = { isChecked: props.isChecked || false,};
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange() {
        this.setState({ isChecked: !this.state.isChecked })
      }
 
      
  createTasks(item) {
    
    return <li key={item.key}>{item.text}
    <button onClick={(evt) => {evt.stopPropagation();
      this.props.supprimerItem(this.props.index)}}>Supprimer</button>
      <div id="toogle"><label className="switch">
      <input type="checkbox" value={this.state.isChecked} onChange={this.handleChange} />
      <div className="slider"></div> 
      </label>
      </div>
    </li>
}
   
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};


export default TodoItems;