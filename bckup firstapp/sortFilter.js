import React,{Component} from 'react';
import axios from 'axios';

const sorturl="https://restrnt.herokuapp.com/restaurantList/1?sort=-1";


class sortFilter extends Component{
    sortFilter = (event) => {
        let sortType = event.target.value;
        let mealType = sessionStorage.getItem('mealid');
        sorturl=`${sorturl}/${mealType}?cuisine=${sortType}`
        axios.get(sorturl)
        .then((response) => {this.props.sortdata(response.data)})
    
    }
    
    render(){
        return(
            <React.Fragment>
                <center>Sort Filter</center>
                <div onChange={this.cuisinefilter}>
                    <label className="radio">
                        <input type="radio" value="1" name="sort"/>Low to High
                    </label>
                    <label className="radio">
                        <input type="radio" value="-1" name="sort"/>High to Low
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default sortFilter;