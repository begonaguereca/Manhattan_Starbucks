import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import transform from './helperFunctions/transform.js'
import render from './helperFunctions/StarbucksMap.js'

class App extends React.Component {

  componentDidMount() {
    $.ajax({
      url: '/starbucks',
      success: (data) => {
        //Transform data into geojson object
        let transformedLocations = transform.storesToObj(data);

        //Remove first value with definitions
        transformedLocations.shift();

        //Render starbucks objects onto map
        render.StarbucksMap(transformedLocations);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center"><b>Starbucks   Manhattan,NY</b></h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" className="mx-auto" >
            <div id='mapContainer'></div>
        </div>
      </div>
    </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));
