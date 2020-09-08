import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import { TodoApp } from './TodoApp';
import Drawer from './Drawer';
import { Redirect } from 'react-router-dom';


export class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {email:"", password:"",IsLoggedIn: false};
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePasswd = this.handleChangePasswd.bind(this);
        this.handleSend = this.handleSend.bind(this);
        localStorage.setItem("email","chan@mail.com");
        localStorage.setItem("password","chan123");
    }

    handleChangeEmail(e) {
        this.setState({
            email : e.target.value
        });
    }

    handleChangePasswd(e) {
        this.setState({
            password : e.target.value
        })
    }

    handleSend() {
        if(localStorage.getItem('email')===this.state.email  && localStorage.getItem('password')===this.state.password ){
            localStorage.setItem('IsLoggedIn', true);
            this.setState({IsLoggedIn : true})
        }
       
    }

    render(){
        if (localStorage.getItem("IsLoggedIn")){
            return <Redirect to ="/todo"> </Redirect>
        }
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <div>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input 
                                id="email" 
                                name="email" 
                                autoComplete="email" 
                                onChange={this.handleChangeEmail}
                                autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    id="password"
                                    type="password"
                                    onChange={this.handleChangePasswd}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button onClick={this.handleSend}
                                type = "submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                            >
                                Sign in
                            </Button>
                        </div>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}
