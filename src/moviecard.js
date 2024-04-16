import { Component } from "react";

export default class Moviecard extends Component{
    
    
    render(){
        
        const {title,plot,price,rating,stars,fav,inCart,poster} =this.props.movie;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src={poster}/>
                    </div>
                    <div className="right">
                        <div className="title"> {title}</div>
                        <div className="plot"> {plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis"> 
                            <img className="str-btn" 
                            src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" onClick={()=>{this.props.handleStars(this.props.movie,-1)}}/>
                            <img alt="star" 
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                            className="stars"/>
                            <img className="str-btn" 
                            src="https://cdn-icons-png.flaticon.com/128/748/748113.png" onClick={()=>{this.props.handleStars(this.props.movie,1)}}/>
                            <span>{stars}</span>
                            </div>
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>{this.props.togle(this.props.movie,'fav')}}>{fav?"Unfavourite":"Favourite"}</button>
                            <button className={inCart?"remove-cart-btn":"cart-btn"} onClick={()=>{this.props.togle(this.props.movie,'inCart')}}>{inCart?"Remove":"Add to cart"}</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}