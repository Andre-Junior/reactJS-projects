import React from 'react'

function FancyBorder (props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function Dialog (props) {
    return (
        <FancyBorder color='blue'>
        <h1 className='Dialog-title'>
            {props.title}
        </h1>
        <p className='Dialog-message'>
            {props.message}
        </p>
        {props.children}
    </FancyBorder>
    )
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.state = {login:''}
    }

    handleChange (e) {
        this.setState({login: e.target.value})
    }

    handleSignUp () {
        alert(`Bem-vindo, ${this.state.login}!`)
    }

    render() {
        return (
            <Dialog 
                title='Programa de exploração'
                message='Como gostaria de ser chamado?'
            >
            <input value={this.state.login}
                    onChange={this.handleChange} />
            <button onClick={this.handleSignUp}>
                Cadastre-se
            </button>
            </Dialog>        
        )
    }
}

export default SignUpDialog