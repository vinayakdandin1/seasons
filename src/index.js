import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {

    state = {
          lat: null, 
          errorMessage: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude
                })
            }, 
            (err) => {
                this.setState({
                    errorMessage: err.message
                })
            }
        )
    }

    render() {    
        return <div>
        <SeasonDisplay lat={this.state.lat} />
        
        {
            this.state.errorMessage && <p>Error: {this.state.errorMessage}</p> 
        }
        
         </div>
    }
}

ReactDOM.render(<App />,document.querySelector('#root'))