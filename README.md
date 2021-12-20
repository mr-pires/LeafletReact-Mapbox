## Installing dependencies

In the project directory, run:

#### `npm install leaflet`

Leaflet library\
[https://www.npmjs.com/package/leaflet](https://www.npmjs.com/package/leaflet).

#### `npm install react-leaflet`

Leaflet as ReactJS component library\
[https://www.npmjs.com/package/react-leaflet](https://www.npmjs.com/package/react-leaflet).


## Add customized style to your mapbox studio account and account token
1 - Login to [mapbox studio](https://studio.mapbox.com).\
2 - Upload [map_style.json](map_style.json) Narma map style.\
3 - Create an [access token](https://account.mapbox.com/).


## Add .env file
REACT_APP_MAPBOX_API_KEY="*access token created*"\
REACT_APP_MAPBOX_USERID="*your user id*"\
REACT_APP_MAPBOX_STYLEID="*map style code*" - can be found on [mapbox studio](https://studio.mapbox.com) page, clicking on the three dots on the map style. It's the code in the end of the URL.
