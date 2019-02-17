import React, {PureComponent} from 'react';

const API = 'https://api.myjson.com/bins/6fpy2'

class CityEthAddress extends React.Component {
  state = { ethAddr: null}

  componentDidMount() {
    fetch(API)
    .then(function(response){
      return response.json()
    })
    .then(
      (responseData) => {
        this.setState({
          ethAddr: responseData.result[this.props.city.toLowerCase()].length

        })}); 

  }
  render() {
    return <h1>{this.state.ethAddr}</h1>    
  }

}

class LatestCityTweet extends React.Component {
  state = { lastTweet: null}

  componentDidMount() {
    fetch(API)
    .then(function(response){
      return response.json()
    })
    .then(
      (responseData) => {
        this.setState({
          lastTweet: responseData.result[this.props.city.toLowerCase()][responseData.result[this.props.city.toLowerCase()].length-1].text
        })}); 

  }
  render() {
    return <h1>{this.state.lastTweet}</h1>    
  }

}

export default class CityInfo extends PureComponent {
/*
  state = { lastTweet: null}

  componentDidMount() {
    fetch(API)
    .then(function(response){
      return response.json()
    })
    .then(
      (responseData) => {
        this.setState({
          lastTweet: responseData.result[this.props.city.toLowerCase()][responseData.result[this.props.city.toLowerCase()].length-1].text
        })}); 

  }
*/
  render() {
    const {info} = this.props;
    const displayName = `${info.city}, ${info.state}`;
    //const ethAddr = getAddr(info.city)

    return (
      <div>
        <div>
          {displayName} | <a target="_new"
          href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}>
            Wikipedia
          </a>
        </div>
        <img width={240} src={info.image} />
        <p><LatestCityTweet city={info.city}/></p>
        <p><CityEthAddress city={info.city}/></p>
      </div>
    );
  }
}
