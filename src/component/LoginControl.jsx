import React, { Component } from "react";
import Logoutbtn from "./Logoutbtn";
import Loginbtn from "./Loginbtn";
import Greeting from "./Greeting";

class LoginControl extends Component{
    constructor(props){
        super(props);
        this.state={isLoggedin: false}
    }

     handleLoginClick =()=>{
        this.setState({isLoggedin:true});
    }

    handleLogoutClick =()=>{
        this.setState({isLoggedin:false});
    }

    render(){
        const isLoggedin = this.state.isLoggedin;

        let button;
        if(isLoggedin){
            button = <Logoutbtn onClick ={this.handleLogoutClick}/>
        }else{
            button =<Loginbtn onClick={this.handleLoginClick}/>
        }
        return(
            <>
                <Greeting isLoggedin={isLoggedin}/>{button}
            </>
        )
    };
};

export default LoginControl;