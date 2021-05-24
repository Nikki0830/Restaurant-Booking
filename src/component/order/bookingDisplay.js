import React from 'react';
import {withRouter} from 'react-router-dom';

const OrderView = (props) => {
    console.log("functional>>",(props.location.search).split('=')[1])
    const renderTable = ({orderdata}) => {
        if(orderdata){
            return orderdata.map((item) => {
                return(
                    <tr>
                        <td>{item._id}</td>
                         <td>{item.rest_name}</td>
                         <td>{item.name}</td>
                         <td>{item.phone}</td>
                         <td>{item.address}</td>
                         <td>{item.person}</td>
                    </tr>
                )
            })
        }
    }

    return(
    
        <div className="container">
            <alert className="alert alert-success">
                {(props.location.search).split('=')[1]}
            </alert>
            <center><h3>Orders Details</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Restaurant Name</th>
                        <th>Name</th>
                        <th>Phone number</th>
                        <th>Address</th>
                        <th>No. Person</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default withRouter(OrderView);