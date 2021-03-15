import React, {useState} from "react";

const Judete =(props)=>{
    // const [county, setCounty]= useState([
    //     {judet: "Alba", id: 1},
    //     {judet: "Arad", id: 2},
    //     {judet: "Arges", id: 3}
    // ])
    return (  <div className="col-sm-6 col-md-4 col-lg-2 small-cards margin-40px-bottom mobile-margin-25px-bottom">
        <a href="cauta-firma.html">
            <div className="feature-inner display-table card-1">
                <div className="display-table-cell vertical-align-middle">
                    <div className="icon-main">
                        {/*<img src="./img/judete/alba.png" alt="" className="icon-small" />*/}
                    </div>
                    <div>
                        <h5 className="font-size16">{props.title}</h5>
                        <p className="text-theme-color">{props.number}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>)
}
export default Judete;