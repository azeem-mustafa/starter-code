import React, { Component } from 'react';
import Selector from '../../components/Selector/Selector';
import ResourceCard from '../../components/ResourceCard/ResourceCard';

class IntermediatePage extends Component {
    render() {
        return (
            <div>
                <Selector />
                <ResourceCard />
            </div>
        );
    }
}

export default IntermediatePage;