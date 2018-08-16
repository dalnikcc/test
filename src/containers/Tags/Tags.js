import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Tags extends Component {

    state = {
        tagsData: []
    }

    componentDidMount() {
        axios.get('https://gist.githubusercontent.com/snownoop/e6ca04705cf03cbe6ef9beaf16a306ab/raw/07906333730ca961a8091a8c16b05d26a8ee7cd9/Tags%2520Cloud%2520Data')
            .then(response => {
                this.setState({ tagsData: response.data })
            });
    }

    render() {
        return (
            <div className="tags-wrap">
                {
                    this.state.tagsData.map(item => {

                        let size = item.sentimentScore // get size
                        size > 149 ? size = 100 : size //if too large
                        size < 16 ? size = 16 : size // if too small

                        return (
                            <div className="tag-link" key={item.id}>
                                <Link
                                    to={{
                                        pathname: item.id,
                                        state: {
                                            label: item.label,
                                            sentiment: item.sentiment,
                                            pageType: item.pageType
                                        }
                                    }}
                                    style={{
                                        width: size,
                                        height: size,
                                        fontSize: size,
                                    }}>
                                    {item.label}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Tags;