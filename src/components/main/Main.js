import React, {Component} from 'react';
import './Main.css';
import imageSlider from './01411489.jpg';
import chilivery from './chilivery.gif';
import adsOne from './1.gif';
import adsTwo from './2.gif';
import News from '../news/News';
import underSliderOne from './under_slider.gif';
import underSliderTwo from './under_slider_1.gif';
import Video from '../video/Video';
import zakat from './zakat.jpg';
import tv from './tv.gif';
import League from "../league/League";


//https://api.myjson.com/bins/cq901
//https://api.myjson.com/bins/go5sp

class Main extends Component {



    render() {
        return (
            <main className="mt-2 text-right" style={{direction: 'rtl'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                                <div id="slider" className="w-100">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ imageSlider } alt=""/>
                                        </div>
                                        <div className="col-6 text-right">
                                            <div className="slider-rutitle">فدراسیون جهانی ستاره لهستانی را نقره
                                                داغ کرد
                                            </div>
                                            <div className="slider-title text-right mt-2"><a href="">کاپیتان نکو به کمپین ورزش سه پیوست</a></div>
                                            <p className="slider-content text-right mt-3">کاپیتان سرشناس و سابق تیم ملی ایران با اهدای پیراهنی پرخاطره از دوران حضور در اوساسونا و دعوت از مجری سرشناس سیما به کمپین ورزش سه پیوست.</p>
                                        </div>
                                    </div>
                                </div>

                            <div className="row mt-1">
                                <div className="col-6"><img src={underSliderOne} alt="" /></div>
                                <div className="col-6"><img src={underSliderTwo} alt=""/></div>
                            </div>

                            <div className="row mt-1">
                                <div className="col-6">
                                    <img src={tv} alt=""/>
                                    <League/>
                                </div>
                                <div className="col-6">
                                    <Video/>
                                    <img src={zakat} alt="" className="mt-2 img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <img src={chilivery} alt="" className="w-100" style={{height: '163px'}} />
                            <News/>
                        </div>
                        <div className="col-2">
                            <img src={adsOne}  alt="" className="w-100"/>
                            <img src={adsTwo} className="mt-2 w-100" alt=""/>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}


export default Main;