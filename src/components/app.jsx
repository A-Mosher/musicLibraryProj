import React, { Component } from 'react';
//import NavBar from './NavigationBar/navBar';
import MusicTable from './MusicTable/musicTable';
//import SearchBar from './SearchBar/searchBar';
import axios from 'axios';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {}
       

    }

    componentDidMount(){
        getMusicLibrary()
        this.setState({
            musicLibrary: getMusicLibrary()
        })
    }
    



    render() {
        return (
            <MusicTable/>
        )
    }
}


async function getMusicLibrary() {
    const response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music")

    console.log(response);
}


export default App;

//create componentDidMount function
//make an axios call to the api and console log the response
//Then, save the response into state