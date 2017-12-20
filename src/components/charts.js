import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

let average = (data) => {
  return _.round(_.sum(data)/data.length)
}

export default (props) => {
  return(
    <div>
      <Sparklines height={120} with={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{average(props.data)}</div>
    </div>
  );
}