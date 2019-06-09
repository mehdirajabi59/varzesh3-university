import React, {Component} from 'react';
import './Video.css';
import saveImage from './saave.jpg';

class Video extends Component {
    render() {
        return (
            <div id="video-slider" className="pb-3">
                <div id="video-slider-title">
                    <h1 className="text-center"> ویدئو</h1>
                </div>

                <div id="video-slider-content" className="text-center mt-2">
                    <img src={saveImage} alt="" className="w-100" height="160"/>
                    <h4>
                        سیوهای استثنایی دروازه‌بانان در فصل 19-2018
                    </h4>
                </div>


            </div>
        );
    }
}

export default Video;