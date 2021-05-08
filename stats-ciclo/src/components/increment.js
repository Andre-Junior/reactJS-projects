import React from 'react';

class Increment extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            numb: 0
        }
    }

    incrementNumb () {
            const currentNumb = this.state.numb

            this.setState({
            numb:  currentNumb + 1
    })
}

    render() {
        return (
            <div>
                <h1>Número: {this.state.numb}</h1>
                <button onClick={() => this.incrementNumb()} >Adicionar mais 1</button>
            </div>
        )
    }

}

export default Increment;
