
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from './Product';


export default class ProductLayout extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: [
            {
                id:1,
                img:"",
                title:"clinic plus",
                price:"20",
            },
            {
                id:2,
                img:"",
                title:"Real me",
                price:"20000"
            }
        ]}
    }


render(){
    return(

        <React.Fragment>
            <Container className="mt-4">
                <Row>
                    {
                    this.state.data.map(value=>(
                        <Col lg={3}><Product id={value.id} img={value.img} title={value.title} price={value.price} /></Col>
                    ))
                    
                    }
                </Row>
            </Container>
        </React.Fragment>
    );
}
}














