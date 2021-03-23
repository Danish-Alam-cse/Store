import React from 'react';
import { Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Product = (props) => {
    return (
        <React.Fragment>
            <Card>
                <img src={props.img} alt =""/>
                <Card.Body>
                        <h4>{props.price}</h4>
                        <h6>{props.title}</h6>
                        <p className="small">{props.catgeory}</p>
                </Card.Body>
                <Card.Footer>
                    <Link to={`product/${props.id}`}>
                    <Button variant="info">View Product</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </React.Fragment>
    );
}

export default Product;
