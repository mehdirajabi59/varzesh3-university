import React, {Component} from 'react';
import './League.css';

class League extends Component{
    render(){
        return(
            <div id="league" className="mt-1 text-center">
                <div id="league-header">
                    <h1 className="text-center">لیگ‌های ایران</h1>
                </div>
                <div id="league-toolbar" className="py-2 px-3">
                    <select name="" id="league-select">
                        <option value="">لیگ برتر ایران</option>
                        <option value="">لیگ برتر فوتسال</option>
                    </select>
                </div>
                <hr/>
                <div id="league-content" className="px-2">
                    <table id="league-table">
                        <thead>
                        <tr>
                            <th className="header color-6" colSpan="10">
                                لیگ برتر ایران
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="sub-header" colSpan="10">
                                پنجشنبه 26 اردیبهشت 1398
                            </td>
                        </tr>
                        <tr>
                            <td className="text-left">
                                <a href="/team/EkeQ/%D8%B3%D9%BE%D8%A7%D9%87%D8%A7%D9%86" target="_blank">
                                    سپاهان
                                </a>
                            </td>
                            <td className="text-center sm-padding text-nowrap league-table--match-result">
                                2 - 0
                            </td>
                            <td className="text-right">
                                <a href="/team/6v2r/%D8%A7%D8%B3%D8%AA%D9%82%D9%84%D8%A7%D9%84-%D8%AE%D9%88%D8%B2%D8%B3%D8%AA%D8%A7%D9%86"
                                   target="_blank">
                                    استقلال خوزستان
                                </a>
                            </td>
                            <td className="text-left matchtime">
                                <a target="_blank" href="/video/rDoza">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/media-11.png"
                                         border="0"/>
                                </a>
                                <a target="_blank"
                                   href="/match/VAyw/%D9%84%DB%8C%DA%AF-%D8%A8%D8%B1%D8%AA%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-97-98-%D8%B3%D9%BE%D8%A7%D9%87%D8%A7%D9%86-%D8%A7%D8%B3%D8%AA%D9%82%D9%84%D8%A7%D9%84-%D8%AE%D9%88%D8%B2%D8%B3%D8%AA%D8%A7%D9%86">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/info11.gif"
                                         border="0"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-left">
                                <a href="/team/ZaeN/%D8%B3%D8%A7%DB%8C%D9%BE%D8%A7" target="_blank">
                                    سایپا
                                </a>
                            </td>
                            <td className="text-center sm-padding text-nowrap league-table--match-result">
                                0 - 3
                            </td>
                            <td className="text-right">
                                <a href="/team/6W2w/%D8%B5%D9%86%D8%B9%D8%AA-%D9%86%D9%81%D8%AA-%D8%A2%D8%A8%D8%A7%D8%AF%D8%A7%D9%86"
                                   target="_blank">
                                    صنعت نفت آبادان
                                </a>
                            </td>
                            <td className="text-left matchtime">
                                <a target="_blank"
                                   href="/match/VwKL/%D9%84%DB%8C%DA%AF-%D8%A8%D8%B1%D8%AA%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-97-98-%D8%B3%D8%A7%DB%8C%D9%BE%D8%A7-%D8%B5%D9%86%D8%B9%D8%AA-%D9%86%D9%81%D8%AA-%D8%A2%D8%A8%D8%A7%D8%AF%D8%A7%D9%86">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/info11.gif"
                                         border="0"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-left">
                                <a href="/team/VnNy/%D9%86%D8%B3%D8%A7%D8%AC%DB%8C-%D9%85%D8%A7%D8%B2%D9%86%D8%AF%D8%B1%D8%A7%D9%86"
                                   target="_blank">
                                    نساجی مازندران
                                </a>
                            </td>
                            <td className="text-center sm-padding text-nowrap league-table--match-result">
                                2 - 0
                            </td>
                            <td className="text-right">
                                <a href="/team/6LP7/%D9%BE%DB%8C%DA%A9%D8%A7%D9%86" target="_blank">
                                    پیکان
                                </a>
                            </td>
                            <td className="text-left matchtime">
                                <a target="_blank" href="/video/pe8z7">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/media-11.png"
                                         border="0"/>
                                </a>
                                <a target="_blank"
                                   href="/match/V9PP/%D9%84%DB%8C%DA%AF-%D8%A8%D8%B1%D8%AA%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-97-98-%D9%86%D8%B3%D8%A7%D8%AC%DB%8C-%D9%85%D8%A7%D8%B2%D9%86%D8%AF%D8%B1%D8%A7%D9%86-%D9%BE%DB%8C%DA%A9%D8%A7%D9%86">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/info11.gif"
                                         border="0"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-left">
                                <a href="/team/ZRaz/%D9%81%D9%88%D9%84%D8%A7%D8%AF" target="_blank">
                                    فولاد
                                </a>
                            </td>
                            <td className="text-center sm-padding text-nowrap league-table--match-result">
                                2 - 2
                            </td>
                            <td className="text-right">
                                <a href="/team/VeQN/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA%D9%88%D8%B1%D8%B3%D8%A7%D8%B2%DB%8C"
                                   target="_blank">
                                    تراکتورسازی
                                </a>
                            </td>
                            <td className="text-left matchtime">
                                <a target="_blank" href="/video/y23zr">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/media-11.png"
                                         border="0"/>
                                </a>
                                <a target="_blank"
                                   href="/match/6x70/%D9%84%DB%8C%DA%AF-%D8%A8%D8%B1%D8%AA%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-97-98-%D9%81%D9%88%D9%84%D8%A7%D8%AF-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA%D9%88%D8%B1%D8%B3%D8%A7%D8%B2%DB%8C">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/info11.gif"
                                         border="0"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-left">
                                <a href="/team/6x92/%D9%85%D8%A7%D8%B4%DB%8C%D9%86%E2%80%8C%D8%B3%D8%A7%D8%B2%DB%8C%E2%80%8C%D8%AA%D8%A8%D8%B1%DB%8C%D8%B2"
                                   target="_blank">
                                    ماشین‌سازی‌تبریز
                                </a>
                            </td>
                            <td className="text-center sm-padding text-nowrap league-table--match-result">
                                1 - 2
                            </td>
                            <td className="text-right">
                                <a href="/team/VJ49/%D9%BE%D8%AF%DB%8C%D8%AF%D9%87-%D8%B4%D9%87%D8%B1%D8%AE%D9%88%D8%AF%D8%B1%D9%88"
                                   target="_blank">
                                    پدیده شهرخودرو
                                </a>
                            </td>
                            <td className="text-left matchtime">
                                <a target="_blank" href="/video/8PAn4">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/media-11.png"
                                         border="0"/>
                                </a>
                                <a target="_blank"
                                   href="/match/E3YL/%D9%84%DB%8C%DA%AF-%D8%A8%D8%B1%D8%AA%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-97-98-%D9%85%D8%A7%D8%B4%DB%8C%D9%86%E2%80%8C%D8%B3%D8%A7%D8%B2%DB%8C%E2%80%8C%D8%AA%D8%A8%D8%B1%DB%8C%D8%B2-%D9%BE%D8%AF%DB%8C%D8%AF%D9%87-%D8%B4%D9%87%D8%B1%D8%AE%D9%88%D8%AF%D8%B1%D9%88">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/info11.gif"
                                         border="0"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-left">
                                <a href="/team/E37g/%D9%BE%D8%A7%D8%B1%D8%B3-%D8%AC%D9%86%D9%88%D8%A8%DB%8C-%D8%AC%D9%85"
                                   target="_blank">
                                    پارس جنوبی جم
                                </a>
                            </td>
                            <td className="text-center sm-padding text-nowrap league-table--match-result">
                                0 - 1
                            </td>
                            <td className="text-right">
                                <a href="/team/6xGZ/%D9%BE%D8%B1%D8%B3%D9%BE%D9%88%D9%84%DB%8C%D8%B3" target="_blank">
                                    پرسپولیس
                                </a>
                            </td>
                            <td className="text-left matchtime">
                                <a target="_blank" href="/video/NxewO">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/media-11.png"
                                         border="0"/>
                                </a>
                                <a target="_blank"
                                   href="/match/Z8yY/%D9%84%DB%8C%DA%AF-%D8%A8%D8%B1%D8%AA%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-97-98-%D9%BE%D8%A7%D8%B1%D8%B3-%D8%AC%D9%86%D9%88%D8%A8%DB%8C-%D8%AC%D9%85-%D9%BE%D8%B1%D8%B3%D9%BE%D9%88%D9%84%DB%8C%D8%B3">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/info11.gif"
                                         border="0"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-left">
                                <a href="/team/EDmr/%D9%86%D9%81%D8%AA%E2%80%8C-%D9%85%D8%B3%D8%AC%D8%AF%D8%B3%D9%84%DB%8C%D9%85%D8%A7%D9%86"
                                   target="_blank">
                                    نفت‌ مسجدسلیمان
                                </a>
                            </td>
                            <td className="text-center sm-padding text-nowrap league-table--match-result">
                                2 - 2
                            </td>
                            <td className="text-right">
                                <a href="/team/V9XY/%D8%B0%D9%88%D8%A8-%D8%A2%D9%87%D9%86" target="_blank">
                                    ذوب آهن
                                </a>
                            </td>
                            <td className="text-left matchtime">
                                <a target="_blank" href="/video/JDkq7">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/media-11.png"
                                         border="0"/>
                                </a>
                                <a target="_blank"
                                   href="/match/Ek3y/%D9%84%DB%8C%DA%AF-%D8%A8%D8%B1%D8%AA%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-97-98-%D9%86%D9%81%D8%AA%E2%80%8C-%D9%85%D8%B3%D8%AC%D8%AF%D8%B3%D9%84%DB%8C%D9%85%D8%A7%D9%86-%D8%B0%D9%88%D8%A8-%D8%A2%D9%87%D9%86">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/info11.gif"
                                         border="0"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-left">
                                <a href="/team/600Y/%D8%A7%D8%B3%D8%AA%D9%82%D9%84%D8%A7%D9%84" target="_blank">
                                    استقلال
                                </a>
                            </td>
                            <td className="text-center sm-padding text-nowrap league-table--match-result">
                                2 - 1
                            </td>
                            <td className="text-right">
                                <a href="/team/Z8R9/%D8%B3%D9%BE%DB%8C%D8%AF%D8%B1%D9%88%D8%AF-%D8%B1%D8%B4%D8%AA"
                                   target="_blank">
                                    سپیدرود رشت
                                </a>
                            </td>
                            <td className="text-left matchtime">
                                <a target="_blank" href="/video/azv5o">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/media-11.png"
                                         border="0"/>
                                </a>
                                <a target="_blank" href="">
                                    <img width="11" height="11"
                                         src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/sheet/info11.gif"
                                         border="0"/>
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div className="mt-3">
                    <a href=""  style={{color: '#444', fontSize: '11px', fontFamily: 'iransans'}}> مشاهده جدول کامل لیگ برتر ایران</a>
                </div>

            </div>
        );
    }
}

export default League;