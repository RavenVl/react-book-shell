import React from 'react';
import ModalContainer from './containers/ModalContainer';
import ListBookContainer from './containers/ListBookContainer';

const BooksMain = (props)=>{
    return (
        <div>
            <div className="row mt-3">
                <div className="col-10">
                    <ListBookContainer/>
                </div>
                <div className="col-2">
                    <button type="button" data-toggle="modal" data-target="#myModal">ADD Book</button>
                </div>

            </div>
            <ModalContainer/>
        </div>


    )
};
export default BooksMain;