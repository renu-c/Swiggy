import React, {useEffect, useState} from 'react'
const RestaurantMenu = () => {
  const [resInfo, setResInfo]= useState(null);
  useEffect(()=>{
    fetchMenu();
  },[])
  const fetchMenu =async()=>{
    const data= await fetch
    ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=788303&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setResInfo(json.data)
  }
  const {name, cuisines,  costForTwoMessage}
   = resInfo?.cards[0]?.card?.card?.info;
  // const{itemCards}= resInfo?.cards[2]?.groupedCard?.cardGroupMap
  // ?.REGULAR?.card[1]?.card?.card;
  return (
    <div className='menu'>
        <h1>{name}</h1>
        <h3>{cuisines.join(",")}</h3>
        <h3>{costForTwoMessage}</h3>
        <ul>
          <li></li>
            {/* <li>{itemCards[0].card.info.name}</li> */}
        </ul>
    </div>
  )
}

export default RestaurantMenu