import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos"

export default function Dictionary(props) {

  let  [Keyword, setKeyword] = useState(props.defaultKeyword);
  let  [results, setResults] = useState(null);
  let  [loaded, setLoaded] = useState(false);
  let  [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
   setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
     let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${Keyword}`;
     axios.get(apiUrl).then(handleDictionaryResponse);

     const pexelsApiKey = "563492ad6f917000010000014e6ec226362e4b6d94be6c9d5eafa0c9";
     const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${Keyword}&per_page=9`;
     let headers = { Authorization: `Bearer ${pexelsApiKey}`}
     axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

   }
 

   function handleSubmit (event) {
     event.preventDefault();
     search();
      }
    

  


   function handleKeywordChange (event){
     setKeyword(event.target.value);
    }

    function load() {
      setLoaded(true);
      search();
    }
   
   if (loaded){
      return (
      <div className="Dictionary">
        <section className="form">
          <h1>What would you like to look up today?</h1>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
          </form>
          </section>
          <Results results= {results} />
          <Photos photos= {photos} />
      </div>
    );
   } else {
     load();
     return "Loading";
   }
}
