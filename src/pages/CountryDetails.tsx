import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';

interface CountryDetailsProps {
  countryName: string;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ countryName }) => {
  const { data: country, isLoading, error } = useQuery({
    queryKey: ['country', countryName],
    queryFn: async () => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fullText=true`);
      if (!response.ok) {
        throw new Error('Failed to fetch country details');
      }
      const data = await response.json();
      return data[0];
    },
  });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Error loading country details. Please try again later.</p>
      </div>
    );
  }

  if (isLoading || !country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  const currencies = Object.values(country.currencies || {})
    .map((currency: any) => `${currency.name} (${currency.symbol})`)
    .join(', ');

  const languages = Object.values(country.languages || {}).join(', ');

  return (
    <>
      <Hero
        title={country.name.common}
        subtitle={`Explore detailed information about ${country.name.common}`}
        imageSrc={country.flags.png}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <a
            href="/education"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Countries
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <img
                src={country.flags.png}
                alt={country.flags.alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{country.name.common}</h2>
                <div className="space-y-3">
                  <p><span className="font-semibold">Official Name:</span> {country.name.official}</p>
                  <p><span className="font-semibold">Capital:</span> {country.capital?.join(', ')}</p>
                  <p><span className="font-semibold">Region:</span> {country.region}</p>
                  <p><span className="font-semibold">Subregion:</span> {country.subregion}</p>
                  <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
                  <p><span className="font-semibold">Area:</span> {country.area.toLocaleString()} km²</p>
                  <p><span className="font-semibold">Languages:</span> {languages}</p>
                  <p><span className="font-semibold">Currencies:</span> {currencies}</p>
                  <p><span className="font-semibold">Timezone(s):</span> {country.timezones.join(', ')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Additional Information</h3>
              <div className="space-y-3">
                <p><span className="font-semibold">Independent:</span> {country.independent ? 'Yes' : 'No'}</p>
                <p><span className="font-semibold">UN Member:</span> {country.unMember ? 'Yes' : 'No'}</p>
                <p><span className="font-semibold">Driving Side:</span> {country.car.side}</p>
                <p><span className="font-semibold">Start of Week:</span> {country.startOfWeek}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-[400px]">
                <MapContainer
                  center={[country.latlng[0], country.latlng[1]]}
                  zoom={5}
                  className="h-full w-full"
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[country.latlng[0], country.latlng[1]]}>
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-bold">{country.name.common}</h3>
                        <p className="text-sm">Capital: {country.capital?.[0]}</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>

            {country.coatOfArms.png && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Coat of Arms</h3>
                <img
                  src={country.coatOfArms.png}
                  alt={`Coat of Arms of ${country.name.common}`}
                  className="max-h-48 mx-auto"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;