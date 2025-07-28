import { useState } from "react";
import { useFetchAllCountries } from "../../api/useFetchAllCountries";
import CountryList from "./CountryList";

const API_URL = "https://date.nager.at/api/v3/AvailableCountries";

const CountriesCard = () => {
    const { countries, error, isLoading } = useFetchAllCountries(API_URL);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return ( 
        <div className="rounded-xl bg-white shadow-md p-5">
            <h2 className="text-xl font-semibold mb-4">Countries</h2>
            <input
                type="text"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 mb-4"
            />

            {isLoading && <p>Loading countries...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            {!isLoading && !error && filteredCountries.length === 0 && (
                <p className="text-gray-500">No countries found.</p>)}
            {!isLoading && !error && filteredCountries.length > 0 && (
                <CountryList countries={filteredCountries} />
                )}
        </div>
     );
}
 
export default CountriesCard;