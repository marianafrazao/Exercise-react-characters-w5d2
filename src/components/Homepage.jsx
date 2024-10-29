import axios from "axios";
import { useEffect, useState } from "react";

function Homepage(){

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://ih-crud-api.herokuapp.com/characters")
            .then((response) => {
                setCharacters(response.data)
            })
            .catch( e => {
                console.log("Error getting characters from the API...");
                console.log(e);
            } );
    }, []);
    

    return (
        <>
         <h2>List of characters in our API:</h2>

        {characters.map((characterDetails, index) => {
            return (
                <div key={index}>
                    <h3>{characterDetails.name}</h3>
                    <p>{characterDetails.occupation}</p>
                    <p>{characterDetails.weapon}</p>
                </div>
            );
        })}
        </> 
    );
}

export default Homepage