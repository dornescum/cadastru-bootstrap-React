import ImageTop from '../../img/harta.jpg'
import React from "react";
const TopImage =(props)=>{
    return (<section className="cover-background">
        <img src="ImageTop" alt="ImageTop"/>
        <div className="container position-relative h-100">
            <div className="header-text display-table h-100 z-index-1 width-100">
                <div className="display-table-cell vertical-align-middle text-center">
                    <h3 className="head-home">
                        {props.title}
                    </h3>
                </div>
            </div>
        </div>
    </section>)
}
export default TopImage;