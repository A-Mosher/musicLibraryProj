import React, { Component } from 'react';
//import NavBar from './NavigationBar/navBar';
import MusicTable from './MusicTable/musicTable';
//import SearchBar from './SearchBar/searchBar';
import axios from 'axios';
import SearchBar from './SearchBar/searchBar';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            music: [],
            searchValue: ""
        }
       

    
}    
    componentDidMount(){
        axios.get("http://www.devcodecampmusiclibrary.com/api/music").then(response =>{
            console.log(response.data);
            this.setState({music: response.data})
        }) 

    }

    onChangeInput = (event) =>{
        //set state of searchValue see below!
    }
    //send in state music data as a prop into music table

//create function to handle on change event, use it to set the value of searchValue ie searchValue : event.target.value
//create a filter before render... ie this.state.music.filter(song => return song.title.includes(this.state.searchValue))

    render() {
        //see filter code
        return (
            <>
            <SearchBar searchBoxChange = {this.onChangeInput}/>
            <MusicTable music={this.state.music}/>
            </>
        )
    }


}
export default App;

//create componentDidMount function
//make an axios call to the api and console log the response
//Then, save the response into state