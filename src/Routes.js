// rcc
import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

export default class Routes extends Component {
    
    render() {
        const getDog = passedProps => {
            // extracting "name" from routeParams
            let name = passedProps.match.params.name;
            let currentDog =this.props.dogs.find(
              dog => dog.name.toLowerCase() === name.toLowerCase() 
            );
            // "{...passedProps}" - passing all the props that was received
            return <DogDetails {...passedProps} dog={currentDog} />
          }
        return (
            <Switch>
                <Route exact path='/dogs' render={() => <DogList dogs={this.props.dogs}/>}/>
                {/* Route is automaticaly passing routeProps into getDog fn */}
                <Route exact path='/dogs/:name' render={getDog}/>
                {/* NOTE: if we don't define arrow fn in "render", "render" will automaticaly pass in routeProps for us */}

                {/* For all unexpected cases */}
                <Redirect to='/dogs'/>
            </Switch>
        );
    }
}
