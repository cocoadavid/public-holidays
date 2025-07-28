import type { Country } from "../../types/country";
import CountryListItem from "./CountryListItem";

type CountryListProps = {
    countries: Country[];
}

const CountryList = ({ countries }: CountryListProps) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
                <tbody>
                    {countries.map((country) => (
                        <CountryListItem key={country.countryCode} country={country} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CountryList;