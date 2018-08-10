import React from 'react';

const  TablaObraSocial = (props) => (
    <div className="container-fluid">
        <table id="TablaObrasSociales" className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">OBRA SOCIAL</th> 
                </tr>
            </thead>
            <tbody>
                {
                    props.ObraSocial.map((obrasocial, i) => {
                        return (
                            <tr key={obrasocial._id}> 
                                <td>{i+1}</td>
                                <td>{obrasocial.Nombre}</td>
                            </tr>
                        )
                    })
                    
                }                  
            </tbody>
        </table>
    </div>
)
export default TablaObraSocial;

 