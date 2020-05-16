import React from 'react';
import Fitness from 'components/Fitness';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class FitnessContainer extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            data : [],
            response : [],
            filteredData : [],
            activeSearchFilter : {},
            activeClassFilter : {},
            activeLevelFilter : {}
        }
    }


    componentDidMount(){
     axios.get(`https://devapi.fitswarm.com/api/classes/filterByEnterprise/5d838b96f3d6e155bd95692b?visibility=PUBLIC`)
        .then(res => {
          const response = res.data && res.data.classes;
          this.setState({ response,filteredData : response });
        })
       
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
  
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
  
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };

      handleFilterClick = (e,type) => {
        let activeSearchFilter = {...this.state.activeSearchFilter};
        let activeClassFilter = {...this.state.activeClassFilter};
        let activeLevelFilter = {...this.state.activeLevelFilter};
        switch(type) {
          case 'searchText' : 
          activeSearchFilter["searchText"] = e.target.value && e.target.value.toLowerCase();
          this.setState({activeSearchFilter})
              break;
          case 'classType' :
          activeClassFilter["classType"] = e.target.innerText && e.target.innerText.toLowerCase(); 
          this.setState({activeClassFilter})    
          break;
          case 'level' : 
          activeLevelFilter["level"] = e.target.innerText && e.target.innerText.toLowerCase(); 
          this.setState({activeLevelFilter})       
          break;
              case 'time' : //ToDo
              // sortOrder = e.target.value
              // this.setState({
              //     sortOrder : e.target.value
              // })
              break;   
              case 'date' : 
              // sortOrder = e.target.value
              // this.setState({
              //     sortOrder : e.target.value
              // })
              break; 
          default : 
              break;
      }
    }

    filterData = (activeSearchFilter,activeClassFilter,activeLevelFilter,response) => {
          if(activeSearchFilter){
            let value = activeSearchFilter['searchText'];
            if(value){
              response = response.filter(item => item && (item.title.toLowerCase().includes(value.toLowerCase()) 
              || (item.instructorDetails && item.instructorDetails.name.toLowerCase().includes(value.toLowerCase()) 
             )));
            }    
          }
          if(activeClassFilter){
            let value = activeClassFilter['classType'];
            if(value){
              response = response.filter(item => item && (item.classType.includes(value.toLowerCase())));  
            }
          }
          if(activeLevelFilter){
            let value = activeLevelFilter['level'];
            if(value){
              response = value && response.filter(item => item && (item.level.toLowerCase().includes(value.toLowerCase())));  
            }
          }
         return response
    }
       


    render(){
        const {history} = this.props;
        const {response,width,type,filteredData,filterVal,activeSearchFilter,activeClassFilter,activeLevelFilter} = this.state;
        console.log(filteredData);
          return <Fitness
          history = {history}
          response = {this.filterData(activeSearchFilter,activeClassFilter,activeLevelFilter,response)}
          width = {width}
          handleFilterClick = {this.handleFilterClick}
          />
    }
}


export default withRouter(FitnessContainer);