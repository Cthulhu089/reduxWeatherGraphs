import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Chart from '../components/charts';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
            {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const press = cityData.list.map(weather => weather.main.pressure);
    const humi = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;


    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" /></td>
        <td><Chart data={press} color="purple" /></td>
        <td><Chart data={humi} color="green" /></td>
      </tr>
    );
  }

}
                      /*wheather from state*/
let mapStateToProps = ({weather}) => {
  return {weather}
}

export default connect(mapStateToProps)(WeatherList);
