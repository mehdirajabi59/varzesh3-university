import React, {Component} from 'react';
import './Footer.css';
import footerIcon from './footericon.png';

class Footer extends Component {

    render(){
        return(
            <footer className="mt-5 py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <ul className="footer_link list-unstyled">
                                <li><a href="">جداول لیگ ها</a></li>
                                <li><a href="">نتایج زنده</a></li>
                                <li><a href="">ارتباط با ما</a></li>
                                <li><a href="">قوانین و مقررات</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <ul className="footer_link list-unstyled">
                                <li><a href="">ابزار توسعه دهندگان</a></li>
                                <li><a href="">همکاری با ما</a></li>
                                <li><a href="">درباره ما</a></li>
                                <li><a href="">کارت شارژ</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <img src={footerIcon} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="color-bar">
                    <div className="color-bar--item red"></div>
                    <div className="color-bar--item yellow"></div>
                    <div className="color-bar--item blue"></div>
                    <div className="color-bar--item green"></div>
                    <div className="color-bar--item gray"></div>
                </div>
                <div className="col-12 text-center mt-2">
                    <span>تمام حقوق مادی و معنوی این سایت متعلق به ورزش سه می باشد.</span>
                    <span>شما می توانید از سایت ورزش سه در صورت پذیرش موافقت نامه کاربری استفاده نمایید.</span>
                </div>
            </footer>
        );
    }

}

export default Footer;