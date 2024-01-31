import React from "react";

type Props = {
    params:{
        searchTerm:string
    }
};



function SearchResults({params:{searchTerm}}: Props) {
    const searchResults = await Search(searchTerm)
  return <div>SearchResults</div>;
}

export default SearchResults;
