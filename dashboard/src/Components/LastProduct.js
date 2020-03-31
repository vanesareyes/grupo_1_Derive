import React, { Component } from 'react';

class LastProduct extends Component {
    
    
       
       render() {
         
           return (

                <div className="row">            
                <div className="col-md-4">
                  <div>
                    <h4 className="mt-3">Último Prodcuto Cargado</h4>
                  </div>
                </div>
                <div className="col-md-8">
                  <div>
                  <table class="table">
                        <tbody>
                            <tr>
                                <th>Nombre</th>
                                <td>Nombre del Producto</td>
                            </tr>
                            <tr>
                            <th>Descripción</th>
                                <td>Descripción del producto</td>
                            </tr>
                            <tr>
                            <th>Categoría</th>
                                <td>Categoría del producto</td>
                            </tr>
                            <tr>
                            <th>Locación</th>
                                <td>Locación del producto</td>
                            </tr>
                            <tr>
                            <th>Precio</th>
                                <td>Precio del producto</td>
                            </tr>
                            <tr>
                            <th>Imagen</th>
                                <td>URL de imagen del producto</td>
                            </tr>
                            <tr>
                            <th>Stock</th>
                                <td>Stock del producto</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                </div>
                </div>
              )
           
         }
       }
    

        
export default LastProduct;