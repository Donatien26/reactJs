import React, { Component } from 'react'

export default class TodoList extends Component {
    constructor() {
        super();
        this.state={
            userInput : '',
            items : []
        };
    }
    onChange(event){
        this.setState(
            {
                userInput : event.target.value
            }, () => console.log(this.state.userInput)
        )
    }
    addTodo(event){
        event.preventDefault();
        this.setState({
            items : [...this.state.items, this.state.userInput],
            userInput : ''
        }, () => console.log(this.state.items)
        )
    }
    deleteTodo(event){
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index,1);
        this.setState({
            items : array
        })
    }

    renderTodos(){
        return this.state.items.map((item) => {
            return(
            <div key = {item} className= "list-group-item">
                {item} | <button className="btn btn-danger" onClick={this.deleteTodo.bind(this)}>X</button>
            </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 align= "center">Ma todoList</h1>
                <form className="form-row align-items-center">
                    <input className="form-control mb-2" value = {this.state.userInput} type= "text" placeholder = "Renseigner un item" onChange = {this.onChange.bind(this)}/>
                    <button className="btn btn-primary" onClick = {this.addTodo.bind(this)}>Ajouter à ma liste</button>
                </form>
                <div className = "list-group">
                    {this.renderTodos()}
                </div>
            </div>
        )
    }
}
