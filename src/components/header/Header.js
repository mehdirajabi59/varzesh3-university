import React, {Component} from 'react';
import './Header.css';
import logo from './varzesh3-logo.png';
import banner from './00910817.gif';

class Header extends Component {
    render(){
        return (
        <div style={{backgroundColor: '#FFF'}}>
            <header>

                <div id="page-header" className="w-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div id="page-header-datetime">
                                    <i></i>
                                    <span>16:36</span>
                                </div>
                                <div id="page-header-datetime--date">
                                    <i></i>
                                    <span>شنبه 18 خرداد</span>
                                </div>
                            </div>

                            <div className="col-6  text-right ">
                                <ul className="d-inline-flex " id="page-header-menu">
                                    <li>
                                        <a href="#">تیم فانتزی</a>
                                    </li>
                                    <li>
                                        <a href="#">ویدئو</a>
                                    </li>
                                    <li>
                                        <a href="#">اخبار زنده</a>
                                    </li>
                                    <li>
                                        <a href="#">ارتباط با ما</a>
                                    </li>
                                    <li>
                                        <a href="#">کارت شارژ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-3">
                    <div className="row">

                        <div className="col-6   ">
                            <img src={banner} alt=""/>
                        </div>
                        <div className="col-6  text-right ">
                            <img src={ logo } alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </header>
            <div className="color-bar">
                <div className="color-bar--item red"></div>
                <div className="color-bar--item yellow"></div>
                <div className="color-bar--item blue"></div>
                <div className="color-bar--item green"></div>
                <div className="color-bar--item gray"></div>
            </div>
            <nav className="w-100">
               <div className="container">
                   <div className="row">
                       <div className="col-8 text-right">
                           <ul className="d-inline-flex list-unstyled pr-0" id="menu-navigation">
                               <li><a href="">صفحه اصلی</a></li>
                               <li><a href="">جداول لیگ‌ها</a></li>
                               <li><a href="">روزنامه</a></li>
                               <li><a href="">ویدئو</a></li>
                               <li><a href="">ویدئو</a></li>
                               <li><a href="">جام حذفی</a></li>
                               <li><a href="">نقل و انتقالات</a></li>
                               <li><a href="">کمپین ستاره‌ها</a></li>
                               <li><a href="">پخش زنده</a></li>
                               <li><a href="">نتایج زنده</a></li>
                           </ul>
                       </div>
                       <div className="col-4 text-left">
                            <div id="page-search" className="text-left">
                                <input type="text" placeholder="جستجوی اخبار، تیم ها، بازیکنان و ویدیوهای ورزشی..." id="searchKey" name="searchKey"/>
                                    <button><i className="varzesh3-icon-magnifying-glass"></i></button>
                            </div>
                       </div>
                   </div>
               </div>
            </nav>
        </div>
        );
    }
}

export default Header;