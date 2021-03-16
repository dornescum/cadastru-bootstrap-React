// import Dan from "../../img/Dan.jpg";
import React from "react";

import {Card} from "react-bootstrap";
const Popular =(props)=>{
    const {img, title, link}=props.item
    return (
        <div className="col-md-6 col-lg-4 margin-30px-bottom">
            <Card>
                    <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <Card.Link href={link}>{link}</Card.Link>
                </Card.Body>
            </Card>
        </div>

    )
}
export default Popular;