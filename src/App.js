import React from 'react';
import './App.css';
import Navigation from './modules/routes';
import { LoadScript } from '@react-google-maps/api';

function App() {
  return (
    <LoadScript
      loadingElement={<div></div>}
      googleMapsApiKey="AIzaSyBYfCered5w-HqZwG77t3n4sVV3Q83LZo8"
      libraries={["places"]}
      region="TG">
      <Navigation />
    </LoadScript>
  );
}

export default App;
