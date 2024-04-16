import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./navbar";
class App extends Component{
  constructor(){
    super();
    this.state ={
        cartCount:0,
        movies:[
            {
                title: "The Avengers",
                plot: "Supernatural poers shown in the movie",
                price: "199",
                rating: "8.9",
                stars: 0,
                fav: false,
                inCart: false,
                poster: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"
                
            },
            {
                title: "Thor",
                plot: "Thunder Power",
                price: "149",
                rating: "7.9",
                stars: 0,
                fav: false,
                inCart: false,
                poster: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"
            },
            {
                title: "End Game",
                plot: "World saving",
                price: "299",
                rating: "8.1",
                stars: 0,
                fav: false,
                inCart: false,
                poster: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"
            },
            {
                title: "Batman",
                plot: "One man army",
                price: "249",
                rating: "9.1",
                stars: 0,
                fav: false,
                inCart: false,
                poster: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"
            }
        ]
    }
}
handleStars =(movie,num) =>{
  const{movies} = this.state;
  const index = movies.indexOf(movie);
  if((num>0 && movies[index].stars>=5)||(num<0 && movies[index].stars<=0)){
      return;
  }
  
  movies[index].stars +=num;
  this.setState({
      movies:movies,
  })
}
togle =(movie,ele)=>{
  let{movies,cartCount} = this.state;
  const index = movies.indexOf(movie);
  if(ele==='fav'){
      movies[index].fav=!movies[index].fav;
      
  }else{
      if(movies[index].inCart){
        cartCount--;
      }else{
        cartCount++;
      }
      movies[index].inCart=!movies[index].inCart;
  }
  this.setState({
      cartCount,
      movies,
  }, console.log(cartCount))
  
}
  render(){
    return (
      <>
      <Navbar cartCount={this.state.cartCount}/>
      <MovieList movies={this.state.movies} handleStars={this.handleStars} 
                                    togle={this.togle} />
      </>
    )
  }
}
export default App;
