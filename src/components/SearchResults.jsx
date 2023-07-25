import React,{useState} from "react";
import { SingleContent } from "./SingleContent";
import { getData } from "../utils";
import {useQuery} from 'react-query';

export const SearchResults = ({searchText,type}) => {
    const [page,setPage] = useState(1);
  const urlSearch = `https://api.themoviedb.org/3/search/${type}?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&query=${searchText}&page=${page}`;
  const { data, status } = useQuery(["searchedItems", urlSearch], getData);
  status == "success" && console.log(data.results, data.total_pages);
  return (
    <div className="content">
      {status == "success" &&
        data.results.map((obj) => (
          <SingleContent
            key={obj.id}
            id={obj.id}
            poster={obj.poster_path}
            title={obj.title || obj.name}
            type={obj.media_type}
            date={obj.release_date || obj.first_air_date}
            vote={obj.vote_average}
          />
        ))}
      {status == "success" &&
        data.results.length == 0 &&
        (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
    </div>
  );
};
