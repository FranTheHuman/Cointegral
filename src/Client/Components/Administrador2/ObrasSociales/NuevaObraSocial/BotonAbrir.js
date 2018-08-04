import React, { Component } from 'react';

class BotonAbrir extends Component {
    render() {
        return(
            <form className="form-inline">
                <div className="form-group mt-3 ml-3">
                    <button className="btn btn-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#ModalAltaObraSocial">Nuevo</button>
                </div>
            </form>   
        )
    }
}

export default BotonAbrir;