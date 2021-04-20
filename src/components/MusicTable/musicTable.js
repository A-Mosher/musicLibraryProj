
import React from 'react';

const  MusicTable = ({music}) => {
    //display the music informtion in a table using map!

    //1. set up table
    //2. use map on just the data portion
    //3. propname.map(parameter => html code to generate the rest of the table... ie if you want to show title parameter.title )
 

 
            return (
                music.map(song =>
                <tr>
                    <td>id: {song.id}</td>
                    <td>title: {song.title}</td>
                    <td>album: {song.album}</td>
                    <td>artist:{song.artist}</td>
                    <td>genre: {song.genre}</td>
                    <td>release date: {song.releaseDate}</td>
                </tr>
            ));
          
   
    }
    
    
        
export default MusicTable;

//id:
//title:
//album:
//artist:
//genre:
//release date: