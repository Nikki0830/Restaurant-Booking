import React,{Component} from 'react';
import axios from 'axios';
import RestDisplay from './RestaurantDisplay';

const url = "https://resterapp.herokuapp.com/restaurantdetails"

class RestaurantDetails extends Component{
    constructor(){
        super()
        this.state={
            details:''
        }
    }

    render(){
        return(
            <React.Fragment>
                <RestDisplay  restData={this.state.details}/>
            </React.Fragment>
        )
    }

    async componentDidMount(){
        var hotelid = this.props.match.params.id
        let response =  await axios.get(`${url}/${hotelid}`)
        this.setState({details:response.data[0]})
    }

    /*componentDidMount(){
       var hotelid = this.props.match.params.id
       axios.get(`${url}/${hotelid}`)
       .then((response) =>  {this.setState({details:response.data})})
    }*/
    
}

export default RestaurantDetails;