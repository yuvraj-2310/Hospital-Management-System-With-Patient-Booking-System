import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map({ address }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      if (!window.google) {
        console.error('Google Maps API failed to load.');
        return;
      }

      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          const map = new window.google.maps.Map(mapRef.current, {
            center: results[0].geometry.location,
            zoom: 8,
          });

          // Check if AdvancedMarkerElement exists
          if (window.google.maps.marker && window.google.maps.marker.AdvancedMarkerElement) {
            new window.google.maps.marker.AdvancedMarkerElement({
              map: map,
              position: results[0].geometry.location,
              title: "Marker",
            });
          } else {
            // Fallback to using the standard Marker if AdvancedMarkerElement is not available
            new window.google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
              title: "Marker",
            });
          }
        } else {
          console.error(`Geocode was not successful for the following reason: ${status}`);
        }
      });
    }).catch((error) => {
      console.error('Error loading Google Maps API:', error);
    });
  }, [address]);

  return <div style={{ height: "400px" }} ref={mapRef} />;
}

export default Map;
