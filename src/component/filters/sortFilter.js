import React,{Component} from 'react';
import axios from 'axios';

let sortUrl='https://restrnt.herokuapp.com/restaurantList';



class SortFilter extends Component{
    sortfilter = (event) => {
        let sortType =Number(event.target.value);
        let mealType = sessionStorage.getItem('mealtype');
       
       let srtUrl=`${sortUrl}/${mealType}?sort=${sortType}`
        axios.get(srtUrl)
        .then((response)=>{this.props.sortdata(response.data)})
    }

    render(){
        return(
            <React.Fragment>
                <center>Sort Filter</center>
                <div onChange={this.sortfilter}>
                    
                    <label className="radio">
                        <input type="radio" value="1" name="sort"/>Low To High
                    </label>
                    <label className="radio">
                        <input type="radio" value="-1" name="sort"/>High To Low
                    </label>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default SortFilter;