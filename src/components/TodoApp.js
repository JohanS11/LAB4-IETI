import React, {Component} from 'react';
import './TodoApp.css';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Dialog from './Dialog';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';



export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [{text:"Tarea1",status:"ready",dueDate:moment(),responsible:'Johan'}], text: '', status: '', dueDate: moment(), responsible:'',isOpen:false};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleRespChange = this.handleRespChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOpen = this.handleOpen.bind(this);

    }


    render() {

        return (
                 
            <div className="App">
                <TodoList todoList={this.state.items}/>
                <Dialog 
                handleTextChange = {this.handleTextChange}
                handleStatusChange = {this.handleStatusChange}
                handleDateChange = {this.handleDateChange}
                handleRespChange = {this.handleRespChange}
                handleSubmit = {this.handleSubmit}
                handleOpen = {this.handleOpen}
                open = {this.state.isOpen}
                state = {this.state}
                > </Dialog>
                <Fab aria-label='Add' onClick={() => this.handleOpen()} color='primary' style = {{right: '-45%'}}>  
                    <AddIcon/>   
                </Fab>
                
            </div>
        );
    }

    handleOpen(){
        this.setState({
            isOpen : !this.state.isOpen
        });
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleRespChange(resp) {
        this.setState({
            responsible: resp.target.value
        });
    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
        if (!this.state.text.length || !this.state.status.length || !this.state.dueDate || !this.state.responsible.length){
            alert("Debe llenar todos los campos");
            return;}

        const newItem = {
            text: this.state.text,
            status: this.state.status,
            dueDate: this.state.dueDate,
            responsible : this.state.responsible,
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            status: '',
            dueDate: null,
            responsible :''
        }));
        this.handleOpen();
    }

}

