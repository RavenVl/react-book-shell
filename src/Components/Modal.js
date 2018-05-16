import React from 'react';

class  Modal extends React.Component{
    handleAdd = (e)=>{
        let book = {
            book: this.editbook.value,
            autor: this.editautor.value,
            year:  this.ediyear.value,
            cover: this.editcover.value
        };
        this.props.add(book);
    };
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldUpdate');
        console.log(nextProps.edit);
        if(nextProps.edit!==-1){
            console.log(this.props.books);
            this.editbook.value =nextProps.books[nextProps.edit].book;
            this.editautor.value = nextProps.books[nextProps.edit].autor;
            this.ediyear.value = nextProps.books[nextProps.edit].year;
            this.editcover.value = nextProps.books[nextProps.edit].cover;
        }
        return true;


    }
    render (){
        if(this.props.edit!==-1){
            console.log(this.props.books);
            this.editbook.value =this.props.books[this.props.edit].book;
            this.editautor.value = this.props.books[this.props.edit].autor;
            this.ediyear.value = this.props.books[this.props.edit].year;
            this.editcover.value = this.props.books[this.props.edit].cover;
        }
        else{
            this.editbook.value ='';
            this.editautor.value ='';
            this.ediyear.value = '';
            this.editcover.value = '';
        }
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
                                           placeholder="Enter name book"
                                            ref={(val)=>this.editbook=val}
                                    >

                                    </input>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="modal-autor">Name autor</label>
                                    <input type="text"
                                           className="form-control"
                                           id="modal-autor"
                                           ref={(val)=>this.editautor=val}
                                           placeholder="Enter name autor">
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="modal-year">Year</label>
                                    <input type="text"
                                           className="form-control"
                                           id="modal-year"
                                           ref={(val)=>this.ediyear=val}
                                           placeholder="Enter name autor">
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="modal-cover">Cover</label>
                                    <input type="text"
                                           className="form-control"
                                           id="modal-cover"
                                           ref={(val)=>this.editcover=val}
                                           placeholder="Enter cover url">
                                    </input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.handleAdd} data-dismiss="modal" >Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Modal;