import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {
    const renderList = ({quickData}) =>{
        if(quickData){
            return quickData.map((item)=>{
                return(
                    <Link to={`/list/${item.mealtype}`} key={item._id}>
                        <div className="tilecontainer">
                            <div className="tileComponent1">
                                <img src={`/images/${item.name}.png`} className="imageclass"/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                            <div className="componentSubHeading">
                                Start  your day with exclusive {item.name} option
                            </div>
                            </div>
                    </div>
                    </Link>
                )
            })
        }
    }
    return(
        <React.Fragment>
            <div className="quickSearchContainer">
                <p class="quickSearchHeading">
                    Quick Searches
                </p>
                <p className="quickSearchSubHeading">
                    Discover Restaurants by meal type
                </p>
                {renderList(props)}
                   
            </div>
        </React.Fragment>
    )
}
   
export default QuickDisplay;