import React,{Component} from 'react';
import axios from 'axios';
import SuggestionDisplay from './SuggestDispaly';

var url = "https://restrnt.herokuapp.com/restaurantList"

class SuggestionBlock extends Component{
    constructor(){
        super()

        this.state={
            suggestions:''
        }
    }

    render(){
        return(
            <div>
                <SuggestionDisplay sudata={this.state.suggestions}/>
            </div>
        )
    }

    componentDidMount(){
        let date = new Date().getDate();
        //let date = 22;
        let mealid = sessionStorage.getItem('mealid')
        let outurl;
        if(date>0 && date <11){
            outurl=`${url}/${mealid}?hcost=500&lcost=1000`
        }else if(date>10 && date <21){
            outurl=`${url}/${mealid}?hcost=300&lcost=800`
        }else if(date>20 && date <32){
            outurl=`${url}/${mealid}?hcost=100&lcost=500`
        }
        axios.get(outurl)
        .then((response) => {this.setState({suggestions:response.data})})
    }
}


export default SuggestionBlock;