import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import CostFilter from '../filters/costfilter';
import CuisineFilter from '../filters/cuisinefilter';
import SortFilter from '../filters/sortFilter';

const url="https://restrnt.herokuapp.com/rest?mealtype=";
const murl="https://restrnt.herokuapp.com/meal";

var limit= 2
class ListingApi extends Component{
    constructor(props){
        super()
        this.state ={
            hotelist:'',
            mealname:'',
            activePage:1,
            totalNoOfItems:1,
        }
    }
    setDataAsPerFilter(sorteddata){
        this.setState({hotelist:sorteddata})
    }
    render(){
        return(
            <div className="container">
            
                <div className="row">
                <div className="col-md-2">
                    <CostFilter costdata = {(data) =>{this.setDataAsPerFilter(data)}}/>
                    <CuisineFilter cuisinedata={(data) => {this.setDataAsPerFilter(data)} } />
                    <SortFilter sortdata={(data) => {this.setDataAsPerFilter(data)} }/>
                </div>
                <div className="col-md-10">
                    <center>
                        <h3>Your's {this.state.mealname} are:</h3>
                    </center>
                    <ListingDisplay listdata={this.state.hotelist} activePage={this.state.activePage}
                    limit={limit} totalNoOfItems={this.state.totalNoOfItems}
                    pageNumber={(data) => {this.setState({activePage:data})}}/>
                </div>
            </div>
            </div>
            
        )
    }
    componentDidMount(){
        var mealtype = this.props.match.params.id
        sessionStorage.setItem('mealtype',mealtype)
        axios.get(`${murl}`)
        .then((response)=>{
            for(var i=0;i<response.data.length;i++){
                if(response.data[i]._id === Number(mealtype)){
                    this.setState({mealname:response.data[i].name.toUpperCase()})
                    i=response.data.length
                }else{
                    this.setState({mealname:'Wrong Input'})
                }
            }
            
        })
        fetch(`${url}${mealtype}`)
        .then((res) => res.json())
        .then((data) =>  {this.setState({
         hotelist: data.slice(0, data.length - 1),
         totalNoOfItems:data.length - 1
         })})
    }
}

export default ListingApi;