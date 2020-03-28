import React from 'react';


function Panels() {
    return (
        <div>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active dashboard-panel-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Usuarios</a>
                <a className="nav-item nav-link dashboard-panel-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Productos</a>
                <a className="nav-item nav-link dashboard-panel-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Categorias</a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <h4 className="mt-3">Cantidad de Usuarios Registrados:<br></br><mark className="total-dashboard-panel">10958</mark></h4>
                  </div>
                </div>
                
                <div className="col-md-8">
                  <div>
                    <table className="table">
                        <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Nombre</th>
                              <th scope="col">Apellido</th>
                              <th scope="col">eMail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Juan</td>
                              <td>de los Palotes</td>
                              <td>asiandaelmundo@parenquemebajo.com</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                              <td>Estono Melo</td>
                              <td>Esperaba</td>
                              <td>esperaba@hotmail.com</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                              <td>Elsa</td>
                              <td>Bohr de Lencuentro</td>
                              <td>unaquilmesfria@porfavor.com</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
            
            </div>
            
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

              <div className="row">
                <div className="col-md-4">
                  <div>
                    <h4 className="mt-3">Cantidad de Productos:<br></br><mark className="total-dashboard-panel">842</mark></h4>
                  </div>
                </div>
                <div className="col-md-8">
                  <div>
                    <table className="table">
                        <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Producto</th>
                              <th scope="col">Categoria</th>
                              <th scope="col">Localidad</th>
                              <th scope="col">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Escapada romántica</td>
                              <td>Escapadas</td>
                              <td>Palomar de los Pinguinos</td>
                              <td>$5000</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Rafting alocado</td>
                              <td>Aventura</td>
                              <td>Río Electrico</td>
                              <td>$12300</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Masajes paralizantes</td>
                              <td>Salud</td>
                              <td>El Spa de los Spañoles</td>
                              <td>$2345</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                </div>
              </div>


              
              
            </div>
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
          </div>
        </div>
    );
  }



export default Panels;





