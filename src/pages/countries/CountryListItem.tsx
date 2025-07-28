import type { Country } from "../../types/country";

type CountryListItemProps = {
    country: Country
}

const CountryListItem = ({ country }: CountryListItemProps) => {
    return (
        <tr className="hover:bg-gray-50">
            <td className="p-2 border-b">{country.name}</td>
            <td className="p-2 border-b">{country.countryCode}</td>
        </tr>
    );
}

export default CountryListItem;