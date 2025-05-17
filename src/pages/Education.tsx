import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Filter, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
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

const ITEMS_PER_PAGE_OPTIONS = [12, 24, 36, 48];

const Education: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

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

  // Pagination calculations
  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const paginatedCountries = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredCountries.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCountries, currentPage, itemsPerPage]);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedRegion, itemsPerPage]);

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
          <div className="relative">
            <select
              className="pl-4 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              {ITEMS_PER_PAGE_OPTIONS.map(option => (
                <option key={option} value={option}>
                  {option} per page
                </option>
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
            {paginatedCountries.map((country) => (
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
            paginatedCountries.map((country) => (
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

        {/* Pagination Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl shadow-sm">
          <div className="text-sm text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
            Showing <span className="font-semibold text-blue-600">{((currentPage - 1) * itemsPerPage) + 1}</span> to{' '}
            <span className="font-semibold text-blue-600">{Math.min(currentPage * itemsPerPage, filteredCountries.length)}</span> of{' '}
            <span className="font-semibold text-indigo-600">{filteredCountries.length}</span> countries
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed bg-white hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-blue-600" />
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-lg transition-all duration-200 shadow-sm ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white transform scale-110'
                      : 'bg-white hover:bg-blue-50 hover:border-blue-300 text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed bg-white hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;