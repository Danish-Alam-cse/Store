import {useState} from 'react';
import {ListGroup,ListGroupItem} from 'react-bootstrap';


const Side = () => {
    const [listdata,setListData] = useState([{data:"data1"},{data:"data2"},{data:"data3"}]);
    return(
        <ListGroup>
            {
                listdata.map((value,key) => (
                    <ListGroupItem>{value.data}</ListGroupItem>
                ))
            }
        </ListGroup>
    );
} 

export default Side;