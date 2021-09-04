import React, { Component } from 'react';
import Selector from '../../components/Selector/Selector';
import ResourceCard from '../../components/ResourceCard/ResourceCard';
import VideoCard from '../../components/VideoCard/VideoCard';

class HomePage extends Component {
    state = {
        videos: [],
        resources: []
    }
    render() {
        return (
            <div>
                <Selector />
                <VideoCard />
                <ResourceCard />
                
            </div>
        );
    }
}

export default HomePage;