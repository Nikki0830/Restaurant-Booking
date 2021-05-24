import React,{Component} from 'react';
import axios from 'axios';

const cusineurl="https://restrnt.herokuapp.com/restaurantList";


class CuisineFilter extends Component{
    cuisinefilter = (event) => {
        let cuisineType = event.target.value;
        let mealType = sessionStorage.getItem('mealid');
        let curl;
        if(cuisineType==''){
            curl= `${cusineurl}/${mealType}`
        }else{
            curl= `${cusineurl}/${mealType}?cuisine=${cuisineType}`
        }
        axios.get(curl)
        .then((response) => {this.props.cuisinedata(response.data)})
    
    }
    
    render(){
        return(
            <React.Fragment>
                <center>Cuisine Filter</center>
                <div onChange={this.cuisinefilter}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine"/>North Indian
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="cuisine"/>South Indian
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="cuisine"/>Chinese
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="cuisine"/>Fast Food
                    </label>
                    <label className="radio">
                        <input type="radio" value="5" name="cuisine"/>Street Food
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CuisineFilter;