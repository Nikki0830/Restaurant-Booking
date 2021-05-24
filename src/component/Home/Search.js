import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const lurl = "https://restrnt.herokuapp.com/location";
const rurl = "https://restrnt.herokuapp.com/rest?city="

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:'',
            restaurants:''
        }
    }

     // Display city data 
    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                         {item.city_name}
                    </option>
                )
            })
        }
    }

    // Display restaurent data 
    renderRestaurant = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} || {item.locality}
                    </option>
                )
            })
        }
    }

    // Load restaurent wrt to City 
    handleCity = (event) => {
        const cityid = event.target.value
        const  rrurl = `${rurl}${cityid}`
        fetch(rrurl,{Method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {this.setState({restaurants:data})})
    }

    handleRest=(event) =>{
        this.props.history.push(`/details/${event.target.value}`)
    }

    render(){
        console.log(this.state.location);
        return(
            
            <div className="imgcontainer">
                <div className="logo">
                    e!
                </div>
                <div className="heading">
                    Find the best restaurants,cafes, bars
                </div>
                <div className="locationselector">
                    <select className="selector" onChange={this.handleCity}>
                        <option>----SELECT CITY---------</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="input" onChange={this.handleRest}>
                        <option>SELECT RESTAURANT</option>
                        {this.renderRestaurant(this.state.restaurants)}
                    </select>
                   
                </div>
            </div>
        )
    }

    // Call City Api on Page Load
    componentDidMount(){
        fetch(lurl,{Method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {this.setState({location:data})})
    }
}

   
export default withRouter(Search) ;