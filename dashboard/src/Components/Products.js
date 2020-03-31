import React, { Component } from 'react';

class Products extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          count: "",
          products:[]
        }
    }

    componentDidMount() {
      console.log('Me monte')
      fetch("http://localhost:3001/api/products")
        .then(response => response.json())
        .then(
          (data) => {
            this.setState({
              isLoaded: true,
              count: data.meta.count,
              products: data.products
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
        )
       }
       
       render() {
         const {error,isLoaded, count, products} = this.state;
         if(error) {
         return <div>Error: {error.message}</div>;
         } else if (!isLoaded) {
           return <div>Loading...</div>;
         } else {
           return (
            
            
            <div>
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <h4 className="mt-3">Cantidad de <br></br>Productos:<br></br><mark className="total-dashboard-panel">{count}</mark></h4>
                  </div>
                </div>
                <div className="col-md-8">
                  
                  
                    <table className="table">
                        <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Producto</th>
                              <th scope="col">Categoria</th>
                              <th scope="col">Localidad</th>
                              <th scope="col">Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map((product,i) => (
                            <tr>
                              <th scope="row" key={product.id + i}>{product.id}</th>
                              <td key={product.name + i}>{product.name}</td>
                              <td key={product.category.category + i}>{product.category.category}</td>
                              <td key={product.location.location + i}> {product.location.location}</td>
                              <td key={product.description + i}>{product.description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                  
                  
                </div>
                </div>
                </div>
              
              
           )
         }
       }
    
}
        
export default Products;