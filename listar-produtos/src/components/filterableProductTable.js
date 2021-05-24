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

        const filterText = this.props.filterText
        const inStockOnly = this.props.inStockOnly

        this.props.products.forEach((product) => {
            if(product.name.indexOf(filterText) === -1) {
                return
            }
            if (inStockOnly && !product.stocked) {
                return
            }
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
        const filterText = this.props.filterText
        const inStockOnly = this.props.inStockOnly

        return (
            <form>
                <input type='text' placeholder='Procurar...' value={filterText} />
                <p>
                    <input type='checkbox' checked={inStockOnly} />
                    {''}
                    Mostrar apenas produtos em estoque
                </p>
            </form>
        )
    }
}

class FilterableProductTable extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }


    render() {
        return (
            <div>
                <SearchBar 
                filterText = {this.state.filterText} //passando o state como uma prop
                inStockOnly = {this.state.inStockOnly}
                />
                <ProductTable  
                filterText = {this.state.filterText}
                inStockOnly = {this.state.inStockOnly}
                products={this.props.products}/>
            </div>
        )
    }
}

export default FilterableProductTable;