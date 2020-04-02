import React, { Component } from 'react';

class Categories extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      categories:[]
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
          categories: data.countByCategory
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
        const {error,isLoaded, categories} = this.state;
        if(error) {
        return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
         
           return (

                <div className="row">            
                <div className="col-md-4">
                  <div>
                    <h4 className="mt-3">Cantidad de Categoría: <br></br><mark className="total-dashboard-panel">{categories.length}</mark></h4>
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
                        {categories.map((category,i) => (
                            <tr>
                              <th scope="row"key={i + 1}>{i+1}</th>
                              <td key={category.category + i}>{category.category}</td>
                              <td className="text-center" key={category.countByCategory + i}>{category.countByCategory}</td>
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
        
export default Categories;