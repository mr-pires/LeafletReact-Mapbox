import React, {useEffect} from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

function Map() {
    // Override library's default pin https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-697303271
    useEffect(()=> {
        delete L.Icon.Default.prototype._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require("../assets/pinmap@2x.png"),
          iconUrl: require("../assets/pinmap.png"),
          iconSize:     [40, 40],
          shadowSize:   [0, 0],
        });
    })

    return (
    <div>
      <MapContainer style={{ width: '100%', height: '100vh' }} center={[24.69506615795072, 46.66954662512489]} zoom={20}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERID}/${process.env.REACT_APP_MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`}
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>" />
      <Marker position={[24.69506615795072, 46.66954662512489]}/>
      </MapContainer>
    </div>
  );
}
export default Map

