import React from 'react';
import { Row,Col,Container, Card, Image, Table} from 'react-bootstrap';

 const ViewProduct = (props) => {
    return(
        <React.Fragment>

            <Container>
                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col lg={4}>
                                <Card>
                                    <Image src="" />
                                </Card>

                            </Col>
                            <Col lg={8}>

                                <Table>
                                    <tr>
                                        <th>{props.title}</th>
                                        
                                    </tr>
                                    <tr>
                                        <th>{props.category}</th>
                                        
                                    </tr>
                                    <tr>
                                        <th>{props.price}</th>
                                        
                                    </tr>
                                    <tr>
                                        <th>{props.desc}</th>
                                        
                                    </tr>
                                </Table>

                            </Col>
                        </Row>

                    </Col>

                </Row>
            </Container>

        </React.Fragment>
    )
}
export default ViewProduct;