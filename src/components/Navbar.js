import { connect } from 'react-redux';

const Navbar = (props) => {
    return ( 
        <div className='nav-bar'>
            <h1>Ninja Reading List</h1>
            <p> Currently you have {props.books.length} books. </p>
        </div>
     );
}

const mapStateToProps = state => {
    return{
        books:state
    }
}
 
export default connect (mapStateToProps)(Navbar);