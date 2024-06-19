 import React from "react";

 export default function Card(props) {
 
 return ( 
        <div className="card">
            <div className="card-image">
                <img src={props.item.imageUrl} className="card--image" />
            </div>
            <div className="card-text" >
                <div className="card-location">
                   <h3 className="card--location" >📍{props.item.location}</h3> 
                <a href={props.item.googleMapsUrl}>Google Maps</a>
                    
                    </div>
                <div className="card-title" ><h2 className="card--title" > {props.item.title}</h2></div>
                <div className="card-date" >
                    <h3>{props.item.startDate}</h3>
                    <p>-</p> 
                    <h3>{props.item.endDate}</h3>
                 </div>
                <div className="card-description" >
                    <p  className="card--description"  >{props.item.description}</p></div>
            </div>
        </div>
    )
}
