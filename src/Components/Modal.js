import React from 'react';

class  Modal extends React.Component{
    handleAdd = (e)=>{
        let book = {};
        this.props.add(book);
    };
    render (){
        return(
            <div className="modal" tabIndex="-1" role="dialog" id="myModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Book</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="modal-book">Naim book</label>
                                    <input type="text"
                                           className="form-control"
                                           id="modal-book"
                                           placeholder="Enter name book">

                                    </input>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="modal-autor">Name autor</label>
                                    <input type="text"
                                           className="form-control"
                                           id="modal-autor"
                                           placeholder="Enter name autor">
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="modal-year">Year</label>
                                    <input type="text"
                                           className="form-control"
                                           id="modal-year"
                                           placeholder="Enter name autor">
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="modal-cover">Year</label>
                                    <input type="text"
                                           className="form-control"
                                           id="modal-cover"
                                           placeholder="Enter cover url">
                                    </input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Modal;