import React from 'react';

class SelectForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {value:'coco'}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({value: event.target.value})
    }

    handleSubmit (event) {
        alert('Seu sabor é: ' + this.state.value )
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Escolha um sabor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value='laranja'>Laranja</option>
                        <option value='coco'>Coco</option>
                        <option value='limao'>Limão</option>
                        <option value='manga'>Manga</option>
                        <option value='maca'>Maça</option>
                    </select>
                </label>
                <input type='submit' value='enviar' />
            </form>
        )
    }
}

export default SelectForm