import React, { Component } from 'react';
import Form from './Form';
import List from './List';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: JSON.parse(localStorage.getItem("todo")) || []
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    // データ保存
    handleAdd(e) {
        // リダイレクト防止
        e.preventDefault();

        this.state.todo.push({title: e.target.title.value});
        this.setState(
            {
                todo: this.state.todo
            },
            () => {
                localStorage.setItem("todo", JSON.stringify(this.state.todo))
            }
        )
        // inputのvalueを空に
        e.target.title.value = '';
    }

    // データ削除
    handleRemove(i){
        // 配列のi番目から1つめのデータを削除
        this.state.todo.splice(i, 1);
        this.setState(
            {
                todo: this.state.todo
            },
            () => {
                localStorage.setItem("todo", JSON.stringify(this.state.todo))
            }
        )
    }

    render() {
        return (
            <div className="siimple-box siimple--bg-dark">
                <h1 className="siimple-box-title siimple--color-white">
                    React Todo App
                </h1>
                <Form handleAdd={this.handleAdd}/>
                <div className="siimple-rule"></div>
                <List todos={this.state.todo} handleRemove={this.handleRemove}/>
            </div>
        );
    }
}
