import React from 'react';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const RestaurantDisplay = (props) => {
    const renderHotel = ({restData})=>{
        if(restData){
            return(
                <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{restData.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                              
                                <button type="button" data-toggle="modal" data-target="#myModal">
                                    <img className="img-responsive" src={restData.thumb}
                                    style={{width:1500,height:400}}/>
                                </button>
                                <div id="myModal" className="modal fade" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">
                                            Image Gallery For {restData.name}
                                        </h4>
                                    </div>
                                    <div className="modal-body">
                                    <div id="myCarousel" class="carousel slide" data-ride="carousel">

                                        <ol class="carousel-indicators">
                                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                            <li data-target="#myCarousel" data-slide-to="1"></li>
                                            <li data-target="#myCarousel" data-slide-to="2"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="item active">
                                            <img className="img-responsive" src={restData.thumb}
                                        style={{width:1500,height:400}}/>
                                            </div>

                                            <div class="item">
                                            <img className="img-responsive" src={restData.thumb}
                                        style={{width:1500,height:400}}/>
                                            </div>

                                            <div class="item">
                                            <img className="img-responsive" src={restData.thumb}
                                        style={{width:1500,height:400}}/>
                                            </div>
                                        </div>
                                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                            <span class="glyphicon glyphicon-chevron-left"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                            <span class="glyphicon glyphicon-chevron-right"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                        </div>
                                    </div>
                                    
                                    </div>

                                </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <h3>{restData.name}</h3>
                                <h3>{restData.locality}</h3>
                                <h3>{restData.address}</h3>
                            </div>
                        </div>
                        <div className="row">
                                <Tabs>
                                    <TabList>
                                    <Tab>About</Tab>
                                    <Tab>Contact</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <p>{restData.name}</p>
                                        <p>{restData.type[0].name} | {restData.type[1].name}</p>
                                        <p>{restData.Cuisine[0].name} | {restData.Cuisine[1].name}</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>{restData.address}</p>
                                        <p> Call Us: 9878966601</p>
                                    </TabPanel>
                                </Tabs>
                        </div>
                        <div className="row">
                            <Link to={`/list/${sessionStorage.getItem('mealid')}`} className="btn btn-danger">Back</Link>&nbsp;
                            <Link to={`/booking/${restData._id}`} className="btn btn-success">Place Order</Link>&nbsp;
                        </div>
                    </div>
                </div>
                </div>
            )
        }else{
            return(
                <div>
                     <img src="https://i.ibb.co/0thvBjH/loader.gif"/>
                </div>
            )  
        }
    }
    return(
        <React.Fragment>
           {renderHotel(props)}
        </React.Fragment>
    )
}

export default RestaurantDisplay;