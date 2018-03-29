const storesToObj = (locations) => {
  let formattedData = [];

  locations.forEach(store => {
    let storeObj = { "type": "Feature",
        "properties": {
          "message": "Starbucks" + ('\n')+ store[7] + ('\n')+ "New York, NY"+ ('\n')+ "P:" +store[5],
          "iconSize": [60, 60]
         },
        "geometry": {
          "type": "Point",
          "coordinates": [store[15],store[14]]
       }
    }
    formattedData.push(storeObj);
  });
  return formattedData;
}

module.exports.storesToObj = storesToObj;
