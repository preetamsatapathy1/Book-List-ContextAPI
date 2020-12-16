import { useState } from 'react';
import { connect } from 'react-redux';
import {addBook} from '../redux/action'

const BookForm = (props) => {

    const [book, setBook] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = () => {
        console.log(book,author)
        props.addBook(book,author);
        setBook('');
        setAuthor('')
    }

    return ( 
        <div className='form'>
            <input type="text" onChange={(e) => setBook(e.target.value)} value={book} placeholder='Book Name'/>
            <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} placeholder='Author Name'/>
            <button className='submit' onClick={handleSubmit}>Submit</button>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        books: state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addBook: (name,author) => dispatch(addBook(name,author))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);