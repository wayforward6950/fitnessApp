import React, { Fragment } from 'react';
import search from 'images/search.png';
import cross from 'images/cross.png';
import crossMenu from 'images/crossMenu.png';

const Navigation = ({history,...props}) => {
    return <div className="leftBar">
    <div className="nav-header">
    <div className="heading">
    Find Classes
    </div>
    <div className="cross" onClick={() => props.handleClose(false)}>
        <img src={crossMenu} alt="cross" width="20px" height="20px"/>
    </div>
    </div>
    <div className="clear"></div>
    <div className="search">
      <span className="heading-1">Search</span>
      <div className="searchBox">
         <div className="searchImg pull-left"><img src={search} alt="search" width="33px" height="29px"/></div>
         <div className="searchBar pull-left"><input type="text"/></div>
      </div>
    </div>
    <Divider/>
    <div className="search-1">
    <span className="heading-1">Class Types:</span>
       <ul className="split-4">
          <li className="selected">All <img src={cross} alt="cross" width="16px" height="16px"/></li>
          <li>Dance</li>
          <li>Strength</li>
          <li>Low Impact</li>
          <li>Cardio</li>
          <li>Mind/Body</li>
          <li>Rehab</li>
          <li>Intensity</li>
       </ul>
    </div>
    <Divider/>
    <div className="search-1">
    <span className="heading-1">Experience Levels:</span>
       <ul className="split-4">
          <li>All</li>
          <li className="selected">Advanced <img src={cross} alt="cross" width="16px" height="16px"/></li>
          <li>Beginner</li>
          <li>Intermediate</li>
       </ul>
    </div>
    <Divider/>
    <div className="blocks">
    <span className="heading-1">Times:</span>
    <div className="blocks-outer">
       <div className="part container-orange"><span>All</span></div>
       <div className="part"><span>AM</span></div>
       <div className="part"><span>PM</span></div>
     </div>
    </div>
    <Divider/>
    <div className="blocks">
    <span className="heading-1">Day:</span>
    <div className="blocks-outer">
       <div className="part container-orange"><span>All</span></div>
       <div className="part"><span>Date</span></div>
     </div>
    </div>
    <Divider/>
 </div>
}

const Divider = () => {
    return (<div className="dividerLine"/>)
  }

  export default Navigation;
  