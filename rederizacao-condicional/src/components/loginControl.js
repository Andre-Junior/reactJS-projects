import React from 'react';

function UserGreeting(props) {
    return <h1>Bem-vindo de volta!</h1>
}

function GuestGreeting(props) {
    return <h1>Por favor, inscreva-se.</h1>
}

function Greeting (props) {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
        return <UserGreeting />
    } 
    return <GuestGreeting />
}

function LoginButton (props) {
    return (
        <button onClick={props.onClick}>
            Entrar
        </button>
    )
}

function LogoutButton(props) {
    return(
        <button onClick={props.onClick}>
            Sair
        </button>
    )
}

class LoginControl extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            isLoggedIn: false
        }
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this) 
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }


    render() {
        const isLoggedIn = this.state.isLoggedIn
        let button

        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }


        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}

export default LoginControl;