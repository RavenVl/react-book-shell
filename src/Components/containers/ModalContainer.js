import { connect } from 'react-redux';
import {addBook} from '../actions';
import Modal from '../Modal';

function mapStateToProps(state) {
    return {
        books: state.books,
        edit: state.editMode
    };
};

function mapDispatchToProps(dispatch) {
    return {
        add: (book)=> dispatch(addBook(book))
    }
};

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
export default ModalContainer;