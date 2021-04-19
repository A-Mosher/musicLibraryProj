import React, { Component } from 'react';
//import NavBar from './NavigationBar/navBar';
import MusicTable from './MusicTable/musicTable';
//import SearchBar from './SearchBar/searchBar';
import axios from 'axios';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            music: []
        }
       

    }

    componentDidMount(){
        axios.get("http://www.devcodecampmusiclibrary.com/api/music").then(response =>{
            console.log(response.data);
            this.setState({music: response.data})
        }) 

    }
    //send in state music data as a prop into music table



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