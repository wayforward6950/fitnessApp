import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import logo from 'images/logo.png';
import menu from 'images/menu.png';
import fitness from 'images/fitness.jpeg';

const Fitness = ({response,history}) => {
return (
   <Fragment>
   <div className="container">
{
   window.innerWidth && window.innerWidth > 769 &&  <Navigation isDesktop={true}/>

}
       <div className="content">
   <div className="mobHeader">
      <div className="logo"><img src={logo} alt="logo" width="30px" height="28px" ></img></div>
      <div className="menu"><img src={menu} alt="logo" width="30px" height="28px" onClick={() => history.push('/navigation')}></img></div>
      <div className="clear"></div>
      </div>
   <div className="cardLayout">
    <div className="results">Search Results</div>
   <Card response = {response}/>
   </div>
 </div>
 </div>
 </Fragment>
  );
}




const Card = ({response}) => {
   return response && response.map((each,key) => {
      return <div className="card">
      <div className="part-1"><div className="image"><img src={fitness} alt="cross" width="122px" height="126px"/></div></div>
      <div className="part-2">
         <div className="sub-part-2">
         <div className="contentHeading">
          {each && each.title} 
         </div>
         <span className="subHeading">with  {each && each.instructorDetails && each.instructorDetails.name} </span>
         </div>
         <div className="sub-part-2-2">
            <div>MON 7 AUG</div>
            <div className="grey"><div style={{"width" : "37px"}}>17:00 <span>BST</span></div> <div style={{"width" : "34px"}}>30 <span>MINS</span></div></div>
            <div><span className="danger">{each && each.maxStudents - each.numBooked } / {each && each.maxStudents} LEFT</span></div>
         </div>
         <div className="sub-part-3">
           <span className="bold">MON</span>
           <span>TUE</span>
           <span>WED</span>
           <span>THU</span>
           <span>FRI</span>
           <span>SAT</span>
           <span>SUN</span>
           <span>- TO SEPT 12</span>
         
         </div>
      </div>
      
      <div className="part-3">
         <div>
            <div className="heading">{each && each.classType}</div>
            <span className="heading-2">CLASS TYPE</span>
         </div>
         <div>
         <div className="heading">{each && each.level}</div>
         <span className="heading-2">Level</span>
      </div>
         <div className="button">Book Now</div>
      </div>
   
   </div>
   })
}



Fitness.propTypes = {
  children: PropTypes.node.isRequired
};

export default Fitness;
