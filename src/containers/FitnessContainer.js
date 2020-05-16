import React from 'react';
import Fitness from 'components/Fitness';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class FitnessContainer extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            data : [],
            response : []
        }
    }


    componentDidMount(){
     axios.get(`https://devapi.fitswarm.com/api/classes/filterByEnterprise/5d838b96f3d6e155bd95692b?visibility=PUBLIC`)
        .then(res => {
          const response = res.data && res.data.classes;
          this.setState({ response });
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


    render(){
        const {history} = this.props;
        const {response,width} = this.state;
        if(response){
          return <Fitness
          history = {history}
          response = {response}
          width = {width}
          />
        }
       return <div>Loading....</div>
    }
}


export default withRouter(FitnessContainer);