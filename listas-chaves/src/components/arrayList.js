import React from 'react';

function ListItens(props) {
    return <li>{props.value}</li>
}

function NumberList(props) {
    const numbers = props.numbers

    return (
        <ul>
            { numbers.map((number) => 
                <ListItens key={number.toString()} value={number} />
            )
            }
        </ul>
    )

}

export default NumberList;