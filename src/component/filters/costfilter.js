import React,{Component} from 'react';
import axios from 'axios';

const costUrl = "https://restrnt.herokuapp.com/restaurantList"


class CostFilter extends Component{

    costfilter = (event) => {
        let costvalue = (event.target.value).split(',');
        let lcost = Number(costvalue[0]);
        let hcost = Number(costvalue[1]);
        let mealType = sessionStorage.getItem('mealtype');

        let curl;
        if(costvalue==''){
            curl= `${costUrl}/${mealType}`
        }else{
            curl= `${costUrl}/${mealType}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(curl)
        .then((response) => {this.props.costdata(response.data)})
    
    }
    render(){
        return(
            <React.Fragment>
                <center>Cost Filter</center>
                <div onChange={this.costfilter}>
                    <label className="radio">
                        <input type="radio" value="" name="cost"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="100,300" name="cost"/>100-300
                    </label>
                    <label className="radio">
                        <input type="radio" value="301,500" name="cost"/>301-500
                    </label>
                    <label className="radio">
                        <input type="radio" value="501,800" name="cost"/>501-800
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CostFilter;