import React, { Component } from "react";

import TodoItems from './TodoItems'
import './TodoTache.css'
 
class TodoTache extends Component {
   constructor(props) {
     super(props);
      this.state = {
       items: []
      };
      this.addItem = this.addItem.bind(this);
      this.supprimerItem = this.supprimerItem.bind(this);
      }
    addItem(e) {
      if (this._inputElement.value !== "") {
        var newItem = {
           text: this._inputElement.value,
           key: Date.now()
        };
        this.setState((prevState) => {
           return { 
            items: prevState.items.concat(newItem) 
           };
         });
        this._inputElement.value = "";
         }
        console.log(this.state.items);
        e.preventDefault();
        }
        supprimerItem(length){
         console.log(length)
         let items = this.state.items;
         items.splice(length,1);
         this.setState({items})
        }

        render() {
            return (
              <div className="TodoTacheMain">
                <div className="header">
                  <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a} 
                            placeholder="Votre Tâche">
                    </input>
                    <button type="submit">Ajouter</button>
                  </form>
                </div>
                <div className="button">
                <TodoItems entries={this.state.items}
            
                supprimerItem={this.supprimerItem.bind(this)}
                /></div>
                 </div>
            );
          }
  }

export default TodoTache;