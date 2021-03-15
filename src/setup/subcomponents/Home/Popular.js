import Dan from "../../img/Dan.jpg";
import React from "react";

const Popular =(props)=>{
    console.log(props)
    return (  <div className="col-md-6 col-lg-4 margin-30px-bottom">
        <a href="#">
            <img src={Dan} alt="" className="card-img" />
            <div className="mt-auto position-relative z-index-9">
                <h5 className="text-white">{props.job}</h5>
                <hr className="border-color-light-white" />
                <div className="position-relative z-index-9 text-white"><span
                    className="ti-location-pin text-primary"></span> 6 Locations
                </div>
            </div>
        </a>
    </div>
    )
}
export default Popular;