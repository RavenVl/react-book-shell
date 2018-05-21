import { connect } from 'react-redux';
import {addBook,editBook,deleteBook} from '../actions';
import ListBook from '../ListBook';

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return {
        delete: id => dispatch(deleteBook(id)),
        edit: id => dispatch(editBook(id))
    };
}

const ListBookContainer = connect(mapStateToProps, mapDispatchToProps)(ListBook);

export default ListBookContainer;