import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {

  let  [Keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

   function search (event) {
     event.preventDefault();
     
     let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${Keyword}`;
     axios.get(apiUrl).then(handleResponse);
   }

   let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${Keyword}`;
  


   function handleKeywordChange (event){
     setKeyword(event.target.value);

   }
      return (
      <div className="Dictionary">
          <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange}/>
          </form>
      </div>
    );
}
