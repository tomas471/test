import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Filter, Loader2 } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import 'leaflet/dist/leaflet.css';

interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    alt: string;
  };
  capital: string[];
  population: number;
  area: number;
  region: string;
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
  latlng: [number, number];
}

const Education: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const { data: countries, isLoading, error } = useQuery<Country[]>({
    queryKey: ['countries'],
    queryFn: async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error('Failed to fetch countries');
      }
      return response.json();
    },
  });

  const regions = useMemo(() => {
    if (!countries) return [];
    return Array.from(new Set(countries.map(country => country.region))).sort();
  }, [countries]);

  const filteredCountries = useMemo(() => {
    if (!countries) return [];
    return countries.filter(country => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRegion = !selectedRegion || country.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [countries, searchTerm, selectedRegion]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Error loading countries. Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      <Hero
        title="Explore Countries"
        subtitle="Discover fascinating facts about countries around the world"
        imageSrc="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search countries..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="">All Regions</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12 h-[400px] rounded-xl overflow-hidden shadow-lg">
          <MapContainer
            center={[20, 0]}
            zoom={2}
            className="h-full w-full"
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredCountries.map((country) => (
              <Marker
                key={country.name.common}
                position={[country.latlng[0], country.latlng[1]]}
              >
                <Popup>
                  <div className="p-2">
                    <img
                      src={country.flags.png}
                      alt={country.flags.alt}
                      className="w-24 h-auto mb-2 rounded"
                    />
                    <h3 className="font-bold">{country.name.common}</h3>
                    <p className="text-sm">Capital: {country.capital?.[0]}</p>
                    <a
                      href={`/country/${encodeURIComponent(country.name.common)}`}
                      className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
                    >
                      View Details →
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="col-span-full flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
          ) : (
            filteredCountries.map((country) => (
              <a
                key={country.name.common}
                href={`/country/${encodeURIComponent(country.name.common)}`}
                className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={country.flags.png}
                  alt={country.flags.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{country.name.common}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <span className="font-semibold">Capital:</span>{' '}
                      {country.capital?.[0]}
                    </p>
                    <p>
                      <span className="font-semibold">Population:</span>{' '}
                      {country.population.toLocaleString()}
                    </p>
                    <p>
                      <span className="font-semibold">Region:</span> {country.region}
                    </p>
                    <p>
                      <span className="font-semibold">Languages:</span>{' '}
                      {Object.values(country.languages || {}).join(', ')}
                    </p>
                    <p>
                      <span className="font-semibold">Area:</span>{' '}
                      {country.area.toLocaleString()} km²
                    </p>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Education;