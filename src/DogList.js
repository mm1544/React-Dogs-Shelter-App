import React, { Component } from 'react'
import './DogList.css';
import {Link} from 'react-router-dom';

class DogList extends Component {
    render() {
        return(
            <div className='DogList'>
                {/* "mt" - Bootstrap class for margin-top
                    "mb" - ... margin botom
                    "my" - ... margin top and bottom */}
                <h1 className='display-1 text-center mt-3 mb-5'>Dog List</h1>
                {/* will use Bootstrap grid system */}
                <div className='row'>
                    {this.props.dogs.map(d => 
                        // untill reaching lg size screen will be split to 3x4
                        // at screen < large, it will be split 2x6

                        <div className='Dog col-lg-4 text-center' key={d.name}>
                            <img src={d.src} alt={d.name}></img>
                            <h3 className="mt-3">
                                <Link className='underline' to={`/dogs/${d.name}`}>{d.name}</Link>
                            </h3>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default DogList;