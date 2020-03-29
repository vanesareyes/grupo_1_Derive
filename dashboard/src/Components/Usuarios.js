import React, { Component } from 'react';

class Usuarios extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          count: "",
          users:[]
        }
    }

    componentDidMount() {
      console.log('Me monte')
      fetch("http://localhost:3001/api/users")
        .then(response => response.json())
        .then(
          (data) => {
            this.setState({
              isLoaded: true,
              count: data.meta.count,
              users: data.users
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
         const {error,isLoaded, count, users} = this.state;
         if(error) {
         return <div>Error: {error.message}</div>;
         } else if (!isLoaded) {
           return <div>Loading...</div>;
         } else {
           return (
            <div className="tab-content" id="nav-tabContent">
            
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
             <div className="row">
               <div className="col-md-4">
                 <div>
                   <h4 className="mt-3">Cantidad de Usuarios Registrados:<br></br>
                   <mark className="total-dashboard-panel">{count}</mark>
                   </h4>
                 </div>
               </div>
               
               <div className="col-md-8">
                 <div>
                 {users.map(user => (
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
                             <th scope="row">{user.id}</th>
                             <td>{user.name}</td>
                             <td>{user.surname}</td>
                             <td>{user.email}</td>
                           </tr>
                       </tbody>
                   </table>
                 ))}
                 </div>
               </div>
             </div>               
           </div>
          
           </div>

           )
         }
       }
    
}
        
export default Usuarios;