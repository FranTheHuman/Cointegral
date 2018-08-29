import React from 'react';

const ModalDesbloqueo = () => (
            <div className="modal fade" id="exampleModalDESBLOQUEO" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" id="MODAL">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Desbloquear</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Desbloquear</button>
                        </div>
                    </div>
                </div>
            </div>
        )
        
export default ModalDesbloqueo;