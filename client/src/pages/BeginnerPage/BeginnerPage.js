import React, { Component } from 'react';
import Selector from '../../components/Selector/Selector'
import ResourceCard from '../../components/ResourceCard/ResourceCard';

class BeginnerPage extends Component {
    state = {
        videos: [],
        resourcelist: []
    }
 
    render() {
        return (
            <div>
              <Selector/>  
              <ResourceCard />
            </div>
        );
    }
}

export default BeginnerPage;