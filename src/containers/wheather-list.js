import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class WheaterList extends Component {
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

        </tbody>
      </table>
    );
  }
}
                      /*wheather from state*/
let mapStateToProps = ({wheather}) => {
  return {wheather}
}

export default connect(mapStateToProps)(WheaterList);
