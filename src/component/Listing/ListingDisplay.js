import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from "react-js-pagination";
import './Listing.css';

    const renderList = (props,data) =>{
        if(data){
            var limit = props.limit;
            var page = props.activePage;
            data = data.slice((page - 1) * limit, (page - 1) * limit + limit);
            return data.map((item) => {
                
                return(
                    
                    <div className="item" key={item._id}>
                        
                        
                        <div className="row">
                            
                            <div className="col-md-6">
                                <img className="image" src={item.thumb}/>
                            </div>
                            <div className="col-md-6">
                                <div className="hotel_name">
                                    <Link to={`/details/${item._id}`}>{item.name}</Link> 
                                </div>
                                <div className="city_name">{item.city_name}</div>
                                <div className="city_name">{item.locality}</div>
                                <div className="city_name">{item.address}</div>
                                <div className="city_name">
                                    <br/>
                                    <div className="row">
                                        <div className="col-md-4">
                                        <span class="glyphicon glyphicon-glass"></span> &nbsp;
                                        <span class="glyphicon glyphicon-cutlery"></span>
                                        </div>
                                    </div>      
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="cuisine_block">Cuisine</div>
                                <div className="cuisine_block">Cost Per Two </div>
                            </div>
                            <div className="col-sm-9">
                               <div className="cuisine_out">{item.Cuisine[0].name}, {item.Cuisine[1].name}</div>
                               <div className="cuisine_out">Rs.{item.cost}</div> 
                            </div>
                            <div>
                            
                            </div>
                        </div>
                    </div>
                )
            })
        }else{
            return(
                <div>
                    <img src="https://i.ibb.co/0thvBjH/loader.gif"/>
                </div>
            )
        }
    }
    const handlePageChange = (props, pageNumber) => {
        props.pageNumber(pageNumber);
        var data = props.listData;
        renderList(props, data);
    }
    
    const ListingDisplay = (props)=> {
        console.log(props)
    return(
        <div>
            <div className="row">
                <div className="col-md-6">
                {renderList(props,props.listdata)}
                </div>
            </div>
            <center>
                <Pagination
                activePage={props.activePage}
                itemsCountPerPage={props.limit}
                totalItemsCount={props.totalNoOfItems}
                pageRangeDisplayed={5}
                onChange={(pageNumber) => {handlePageChange(props,pageNumber)}}
                />
            </center>
        </div>
    )
}
export default ListingDisplay;