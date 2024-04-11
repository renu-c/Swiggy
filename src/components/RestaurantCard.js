import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
const {resData}=props;

 const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla
  } = resData;


    return(
      <div className="card-main" >
      <div className="container-flex">
          <div className="card ">
        <img src={CDN_URL + cloudinaryImageId} className="card-img-top" alt="res-logo"/>
        <div className="card-body">
          <h5 className="card-title">{name }</h5>
          <p className="card-text">{cuisines.join(",")}</p>
          <p className="card-text">{avgRating} stars</p>
          <p className="card-text">{costForTwo} </p>
          <p className="card-text">{sla.slaString}</p>

        </div>
      </div>
      </div>
      </div>
       
    )
}



export default RestaurantCard;