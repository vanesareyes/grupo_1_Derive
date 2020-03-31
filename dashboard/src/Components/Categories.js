import React, { Component } from 'react';

class Categories extends Component {
    
    
       
       render() {
         
           return (

            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <h4 className="mt-3">Cantidad de Categoría: <br></br><mark className="total-dashboard-panel">10</mark></h4>
                  </div>
                </div>
                <div className="col-md-8">
                  <div>
                    <table className="table">
                        <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Nombre</th>
                              <th scope="col">Cantidad de Productos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Escapadas</td>
                              <td>135</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Aventura</td>
                              <td>278</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Salud</td>
                              <td>4</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
              )
           
         }
       }
    

        
export default Categories;