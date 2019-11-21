import React from 'react';
import ReactDOM from 'react-dom';
import tweets from './tweets.js';
console.log(tweets)
// console.log(tweets[0].entities.media[0]["media_url_https"])

// <img src={x.entities.media[0]["media_url_https"]}/>


class App extends React.Component {
        render() {
            var username = this.props.list.map(x => {
                if (x.entities.media) {
                    return (
                        <div className="tweet-box">
                        <p>{x.user.name} @{x.user.screen_name}</p>
                        <p>{x.text}</p>
                        <img src={x.entities.media[0]["media_url_https"]}/>
                        </div>)
                } else {
                    return (
                        <div className="tweet-box">
                        <p>{x.user.name} @{x.user.screen_name}</p>
                        <p>{x.text}</p>
                        </div>)
                }
            })

                return (
                    <div>
                        {username}
                    </div>
                );
            }
        }


        const element = document.getElementById('app');

        ReactDOM.render(<App list={tweets}/>, element); //

        console.log("tweet react");