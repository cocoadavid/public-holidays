import type { Country } from "../../types/country";
import { useNavigate } from "react-router-dom";

type CountryListItemProps = {
    country: Country
}

const CountryListItem = ({ country }: CountryListItemProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/publicholiday/${country.countryCode}`);
    }

    return (
        <tr className="hover:bg-gray-100 cursor-pointer" onClick={handleClick}>
            <td className="p-2 border-b">{country.name}</td>
            <td className="p-2 border-b">{country.countryCode}</td>
        </tr>
    );
}

export default CountryListItem;