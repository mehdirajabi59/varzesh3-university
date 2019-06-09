import React , {Component} from 'react';
import './News.css';
import axios from 'axios';

class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            news: []
        }
    }

    componentDidMount(){
        axios.get('https://api.myjson.com/bins/go5sp')
            .then(response => {
                this.setState({news: response.data});
                console.log(this.state.news)
            })

    }

    render() {
        return (
            <div id="news" className="mt-1">
                <div id="news-header">
                    <h1>اخبار فوتبال</h1>
                </div>
                <div id="news-list">
                    <ul>
                        {this.state.news.map((item, index) => <li key={index}><a href="">{item.title}</a></li>)}

                    </ul>
                </div>
            </div>
        );
    }
}

export default News;