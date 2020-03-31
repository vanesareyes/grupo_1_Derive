import React from 'react';
import Usuarios from './Usuarios';
import Products from './Products';
import Categories from './Categories';
import LastProduct from './LastProduct';

function Panels() {
    return (
        <div>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active dashboard-panel-link" id="nav-home-tab" data-toggle="tab" href="#nav-users" role="tab" aria-controls="nav-home" aria-selected="true">Usuarios</a>
                <a className="nav-item nav-link dashboard-panel-link" id="nav-profile-tab" data-toggle="tab" href="#nav-products" role="tab" aria-controls="nav-profile" aria-selected="false">Productos</a>
                <a className="nav-item nav-link dashboard-panel-link" id="nav-contact-tab" data-toggle="tab" href="#nav-categories" role="tab" aria-controls="nav-contact" aria-selected="false">Categorias</a>
                <a className="nav-item nav-link dashboard-panel-link" id="nav-contact-tab" data-toggle="tab" href="#nav-last-product" role="tab" aria-controls="nav-contact" aria-selected="false">Último Producto Cargado</a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            
          <div className="tab-pane fade show active" id="nav-users" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="row">
              
                <Usuarios/>
              
            </div>
          </div>   



          <div className="tab-pane fade" id="nav-products" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="row">
              
                <Products/>
              
            </div>
          </div> 


          <div className="tab-pane fade" id="nav-categories" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="row">
              
                <Categories/>
              
            </div>
          </div>

          <div className="tab-pane fade" id="nav-last-product" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="row">
              
                <LastProduct/>
              
            </div>
          </div>



            

            
          </div>
        </div>
        
        
    );
  }



export default Panels;





