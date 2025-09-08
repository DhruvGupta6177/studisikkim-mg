"use client";

import { useEffect, useRef, useState } from 'react';
import { monasteries } from '@/lib/monastery-data-new';
import { Loader } from 'lucide-react';
import Script from 'next/script';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (!isScriptLoaded || !mapRef.current) return;

    try {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 27.3389, lng: 88.6065 }, // Sikkim center
        zoom: 9,
        mapTypeId: 'terrain',
        styles: [
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [{ color: "#f3f4f6" }]
            },
            {
              featureType: "poi",
              stylers: [{ visibility: "off" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#93c5fd" }]
            }
          ],
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false
        });

        // Add markers for each monastery
        monasteries.forEach(monastery => {
          if (!monastery.coordinates?.lat || !monastery.coordinates?.lng) return;

          const marker = new window.google.maps.Marker({
            position: { 
              lat: monastery.coordinates.lat, 
              lng: monastery.coordinates.lng 
            },
            map,
            animation: window.google.maps.Animation.DROP,
            title: monastery.name.en,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              fillColor: '#9333EA',
              fillOpacity: 0.9,
              strokeColor: '#ffffff',
              strokeWeight: 2,
              scale: 8
            }
          });

          // Add info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 16px; max-width: 300px;">
                <h3 style="margin: 0 0 8px; font-weight: 600; font-size: 16px;">
                  ${monastery.name.en}
                  <div style="font-size: 12px; color: #666; font-weight: normal; margin-top: 4px;">
                    ${monastery.name.hi || ''} / ${monastery.name.ne || ''}
                  </div>
                </h3>
                <p style="margin: 0 0 8px; font-size: 14px; color: #444;">
                  ${monastery.location.en}
                </p>
                <p style="margin: 0 0 8px; font-size: 13px; color: #666;">
                  ${monastery.description?.en || ''}
                </p>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });

      } catch (err) {
        setError('Failed to load the map. Please refresh the page.');
        console.error('Map initialization error:', err);
      }

      // Load the Google Maps script
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        setError('Failed to load Google Maps. Please check your internet connection.');
        setIsLoading(false);
      };
      document.head.appendChild(script);
    } else {
      window.initMap();
    }

    return () => {
      // Clean up
      const script = document.querySelector('script[src*="maps.googleapis.com"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="text-center p-6">
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
        onLoad={() => setIsScriptLoaded(true)}
        onError={() => setError('Failed to load Google Maps. Please check your internet connection.')}
      />
      <div ref={mapRef} className="w-full h-full rounded-lg overflow-hidden" />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Loader className="w-5 h-5 animate-spin" />
            <span>Loading map...</span>
          </div>
        </div>
      )}
    </div>
  );
}
