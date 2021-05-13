import React from 'react';

class TextArea extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value:'Escreva aqui a sua mensagem'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({value: event.target.value})
    }

    handleSubmit (event) {
        alert('Enviado:' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Dissertação:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>

                <input type='submit' value='Enviar' />
            </form>
        )
    }
}

export default TextArea