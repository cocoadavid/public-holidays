import { useFetchPublicHolidays } from "../../api/useFetchPublicHolidays";
import UpcomingHolidays from "../../components/UpcomingHolidays";

const HomePage = () => {
    const hu = useFetchPublicHolidays("HU");
    const gb = useFetchPublicHolidays("GB");

    return ( 
        <div className="grid gap-6 md:grid-cols-2">
            <UpcomingHolidays title="Upcoming Holidays - Hungary" holidays={hu.holidays} error={hu.error} isLoading={hu.isLoading} />
            <UpcomingHolidays title="Upcoming Holidays - United Kingdom" holidays={gb.holidays} error={gb.error} isLoading={gb.isLoading} />
        </div>
     );
}
 
export default HomePage;