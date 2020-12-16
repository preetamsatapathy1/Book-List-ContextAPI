import { connect } from "react-redux";
import { removeBook } from "../redux/action";

const BookList = (props) => {
    const handleRemove = (id) => {
        props.removeBook(id)
    }

    return ( 
        <div className='book-list'>
            <ul>
            {
                props.books.map(book => {
                    return(
                    <li key={book.id} onClick={() => handleRemove(book.id)}>
                        <div className='title'>{book.book}</div>
                        <div className='author'>{book.author}</div>
                    </li>
                    )
                })
            }
            </ul>
        </div>
     );
}
 
const mapStateToProps = (state) => {
    return{
        books:state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        removeBook: (id) => dispatch(removeBook(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);