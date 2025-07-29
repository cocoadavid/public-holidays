import { useParams } from "react-router-dom";
import { useFetchPublicHolidays } from "../../api/useFetchPublicHolidays";
import { useFetchCountryInfo } from "../../api/useFetchCountryInfo";
import UpcomingHolidays from "../../components/UpcomingHolidays";

const PublicHolidaysPage = () => {
    const { countryCode } = useParams<{ countryCode: string }>();
    const { holidays, error: holidaysError, isLoading: holidaysIsLoading } = useFetchPublicHolidays(countryCode || "");
    const { country, error: countryError, isLoading: countryIsLoading } = useFetchCountryInfo(countryCode || "");

    if (countryIsLoading) {
        return <div>Loading country info...</div>;
    }

    if (countryError) {
        return <div>Error loading country info: {countryError}</div>;
    }

    return (
        <div>
            <UpcomingHolidays 
            title={`Upcoming Holidays - ${country?.name}`} 
            holidays={holidays} 
            error={holidaysError} 
            isLoading={holidaysIsLoading}
             />
        </div>
    );
}

export default PublicHolidaysPage;