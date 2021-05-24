import React from 'react';


class ProductRow extends React.Component {
    render() {
        const product = this.props.product
        const name = product.stocked ? product.name : <span style={{color:'red'}}>{product.name}</span> 

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;

        return (
            <tr>
                <th colSpan='2'>
                    {category}
                </th>
            </tr>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        const rows = []
        let lastCategory = null

        this.props.products.forEach((product) => {
            if(product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow 
                    category={product.category}
                    key={product.category} />
                )        
            }
            rows.push(
                <ProductRow 
                product={product}
                key={product.name} />
            )
            lastCategory = product.category;
        
        })

        return (
            <table>
                <thead>
                    <th>Produto</th>
                    <th>Valor</th>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type='text' placeholder='Procurar...' />
                <p>
                    <input type='checkbox' />
                    {''}
                    Mostrar apenas produtos em estoque
                </p>
            </form>
        )
    }
}

class FilterableProductTable extends React.Component {

    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable  products={this.props.products}/>
            </div>
        )
    }
}

export default FilterableProductTable;