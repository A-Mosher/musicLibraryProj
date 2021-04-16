import React, { Component } from 'react';
import NavBar from './NavigationBar/navBar';
import MusicTable from './MusicTable/musicTable';
import SearchBar from './SearchBar/searchBar';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {}
       

    }

    componentDidMount(){
        this.setState({

        })
    }
    



    render() {
        return (
            <MusicTable/>
        )
    }
}

export default App;

//create componentDidMount function
//make an axios call to the api and console log the response
//Then, save the response into state