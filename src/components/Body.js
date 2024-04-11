import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react"
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] =useState("");   
  const [filteredRestaurants, setfilteredRestaurants]= useState("");
  
  useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async(res)=>
    {
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        
        setlistOfRestaurants(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants);
            setfilteredRestaurants(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants);
    };
    if (listOfRestaurants.length===0){
        return <h1>loading...</h1>
    }

  return (
    <div>
      <div className="body">
        <div className="filter">
          <input 
          type="text"
          className="search-box" 
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}       
          />
          <button onClick={()=>{
           const filteredRes=listOfRestaurants.filter((res)=>
           res.info.name.toLowerCase().includes(searchText.toLowerCase()));
           setfilteredRestaurants(filteredRes);
          }}>Search</button>
          <button
            className="btn btn-success m-2"
            onClick={() => {
              const filteredList = filteredRestaurants.filter(
                (res) => res.info.avgRatingString > 4.4
              );
              setfilteredRestaurants(filteredList);
            }}>
            Top Rated Restaurant
          </button>
        </div>
        <div className="d-flex flex-wrap">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id}
             resData={restaurant?.info} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
