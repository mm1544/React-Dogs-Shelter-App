import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom';

class Navbar extends Component {

    render() {
        const dogLinks = this.props.dogs.map(dog =>(
            <li className='nav-item' key={dog.name}>
                {/* "exact" marks link as active only when it is hit */}
                <NavLink exact to={`/dogs/${dog.name}`} className='nav-link'>
                    {dog.name}
                </NavLink>
            </li>
        ));
        return(
            // "navbar-expand-lg" meaning of this class: it should
            // be !!colapsed at xs sm md and it should 
            // !!expand at lg
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='navbar-brand' to='/dogs'>
                    Dog App
                </Link>
                <button className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'/>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink exact to='/dogs' className='nav-link'>Home</NavLink>
                        </li>
                        {dogLinks}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;