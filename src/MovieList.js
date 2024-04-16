import { Component } from "react";
import Moviecard from "./moviecard";

export default class MovieList extends Component{
    
    
    render(){
        const {movies,handleStars,togle} = this.props;
        return(
            <>
            {movies.map((movie,index)=> <Moviecard movie={movie} key={index} 
                                    handleStars={handleStars} 
                                    togle={togle}/>)}
            </>
        )
    }
}

