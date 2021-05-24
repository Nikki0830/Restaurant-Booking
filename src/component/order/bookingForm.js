import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const restUrl="https://restrnt.herokuapp.com/restaurantdetails";
const bookUrl="https://restrnt.herokuapp.com/placeorder";

class Placeorder extends Component{
    constructor(){
        super()

        this.state={
            order_id:Math.floor(Math.random()*10000),
            rest_name:'',
            name:'',
            phone:'',
            address:'',
            person:''
        }
    }

    handleChangeName = (event) =>{
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }
    handleChangePhone = (event) =>{
        console.log(event.target.value)
        this.setState({phone:event.target.value})
    }
    handleChangeAddress = (event) =>{
        console.log(event.target.value)
        this.setState({address:event.target.value})
    }
    handleChangePerson = (event) =>{
        this.setState({person:event.target.value})
    }
    handleSubmit = () =>{
        fetch(bookUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((this.props.history.push('/viewBooking?message=Success')))
    }
    async componentDidMount(){
        let restid= this.props.match.params.id;
        let response = await axios.get(`${restUrl}/${restid}`)
        this.setState({rest_name:response.data[0].name})
    }

    render(){
        console.log(this.props)
        return(
            <div className="container">
               
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4>Place Your Order</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Order_Id</label>
                            <input className="form-control" type="text" name="order_id" value={this.state.order_id} readOnly/>
                        </div>
                        <div className="form-group">
                            <label>Restaurant Name</label>
                            <input className="form-control" type="text" name="rest_name" value={this.state.rest_name} readOnly/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" type="text" name="name" value={this.state.name} onChange = {this.handleChangeName} />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input className="form-control" type="text" name="phone" value={this.state.phone} onChange = {this.handleChangePhone} />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input className="form-control" type="text" name="address" value={this.state.address} onChange = {this.handleChangeAddress} />
                        </div>
                        <div className="form-group">
                            <label>Number of Persons</label>
                            <select className="form-control" type="text" name="person" value={this.state.person} onChange = {this.handleChangePerson}>
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <Link to={`/details/${this.props.match.params.id}`} className="btn btn-danger">Back</Link> &nbsp;
                        <button className="btn btn-success" onClick = {this.handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Placeorder;