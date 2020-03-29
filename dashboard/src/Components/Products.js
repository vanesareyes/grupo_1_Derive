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
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

              <div className="row">
                <div className="col-md-4">
                  <div>
                    <h4 className="mt-3">Cantidad de Productos:<br></br><mark className="total-dashboard-panel">{count}</mark></h4>
                  </div>
                </div>
                <div className="col-md-8">
                  <div>
                  {products.map(product => (
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
                            <tr>
                              <th scope="row">{product.id}</th>
                              <td>{product.name}</td>
                              <td>{product.category}</td>
                              <td>{product.location}</td>
                              <td>{product.description}</td>
                            </tr>
                        </tbody>
                    </table>
                  ))}
                  </div>
                </div>
              </div>
              </div>
           )
         }
       }
    
}
        
export default Products;