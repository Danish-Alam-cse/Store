import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Side from './components/Side';
import ProductLayout from './components/ProductLayout';
import ViewProduct from './components/ViewProduct';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  
  return(
    <Router>
 <React.Fragment>
  
      <Header/>
      <Container fluid>
          <Row>
              <Col lg={3}><Side/></Col>

              <Col lg={9}>

              <Switch>
                <Route exact path="/product/:id">
                <ViewProduct title="Earphone" price="600" category="electronic" desc="nccnjdch"/>
                </Route>
                <Route exact path="/" component={ProductLayout}>
                <ProductLayout />
                </Route>
                </Switch>
                </Col>    
          </Row>
        </Container> 
      </React.Fragment>
      </Router>
  );
}

export default App;
