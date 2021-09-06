import React, { Component } from 'react';
import Selector from '../../components/Selector/Selector';
import ResourceCard from '../../components/ResourceCard/ResourceCard';
import VideoCard from '../../components/VideoCard/VideoCard';
import axios from 'axios';

import './_homePage.scss';



class HomePage extends Component {
    state = {
        videos: [],
        resources: []
    }

    difficultySelector = (event) => {
        event.preventDefault();
        const newPage = event.target.value;
        const newVideos = this.state.videos.filter((video)=> video.difficulty === newPage);
        this.setState({
            videos: newVideos
        })
        console.log(newVideos)
    }
      

    // getSelectedVideo = (videoId) =>{
    //     axios.get(`http://localhost:8080/learn`).then((response) =>{
    //     this.setState({
    //         videos: response.data
    //     })
    //     }

    //     )}

    componentDidMount() {
        axios.get(`http://localhost:8080/learn`).then((response) => {
            console.log(response.data);
            this.setState({
                videos: response.data
            });
            // const videoId = this.props.match.params.videoId || response.data[0].id;
            // this.getSelectedVideo(videoId);
        }
        )}

        componentDidUpdate(prevProps) {
            if (prevProps.match.params !== this.props.match.params) {this.difficultySelector(this.props.match);
            }
            console.log(prevProps);
        }
    
        
    
    render() {


        return (
            <div className= "body">

                
                <Selector 
                onChangeHandler={this.difficultySelector}
                // video={filteredVideos}
                selectedLevel={this.getSelectedVideo} />

                <VideoCard video={this.state.videos} />
                <ResourceCard video={this.state.videos}/>
                
            </div>
        );
    }
}

export default HomePage;