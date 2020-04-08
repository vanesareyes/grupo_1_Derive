import React, { Component } from 'react';

class LastProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      product:[]
    }
}
componentDidMount() {
  console.log('Me monte')
  fetch("http://localhost:3001/api/products/lastProduct")
    .then(response => response.json())
    .then(
      (data) => {
        console.log(data)
        this.setState({
          isLoaded: true,
          product: data[0]
        })
      },
      (error) => {
        this.setState({
        isLoaded: true,
        error
        });
      }
    )
}
/*componentDidMount() {
  console.log('Me monte')
  fetch("http://localhost:3001/api/products")
    .then(response => response.json())
    .then(
      (data) => {
        this.setState({
          isLoaded: true,
          product: data.products.pop()
      })
      fetch(this.state.product.detail)
      .then(response => response.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            product: data
        })
      })  
      },
        (error) => {
        this.setState({
          isLoaded: true,
          error
        });
        }
    )
  }
 
        */
    
       
       render() {
        const {error,isLoaded,product} = this.state;
        if(error) {
        return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
              <div className="row">            
                <div className="col-md-4">
                  <div>
                    <h4 className="mt-3">Último Producto Cargado</h4>
                  </div>
                </div>
                <div className="col-md-8">
                  <div>
                  <table class="table">
                        <tbody>
                            <tr>
                                <th>Nombre</th>
                                <td>{product.name}</td>
                            </tr>
                            <tr>
                            <th>Descripción</th>
                                <td>{product.description}</td>
                            </tr>
                            <tr>
                            <th>Categoría</th>
                                <td>{product.category.category}</td>
                            </tr>
                            <tr>
                            <th>Locación</th>
                                <td>{product.location.location}</td>
                            </tr>
                            <tr>
                            <th>Precio</th>
                                <td>{product.price}</td>
                            </tr>
                            <tr>
                            <th>Imagen</th>
                                <td><img className="dashboard-img" src={product.img} alt=""></img></td>
                            </tr>
                            <tr>
                            <th>Stock</th>
                                <td>{product.stock}</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                </div>
                </div>
              )
           
         }
       }
    
      }

export default LastProduct;