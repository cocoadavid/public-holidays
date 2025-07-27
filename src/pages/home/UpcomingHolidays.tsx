import Table from "../../components/Table";
import type { Holiday } from "../../types/holiday";

type UpcomingHolidaysProps = {
    title: string;
    holidays: Holiday[];
    isLoading: boolean;
    error: string | null;
}

const UpcomingHolidays = ({ title, holidays, isLoading, error }: UpcomingHolidaysProps) => {
    return (
        <section className="bg-white">
            {isLoading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            {!isLoading && !error && holidays.length === 0 && <p className="text-gray-500">No upcoming holidays.</p>}

            {!isLoading && !error && holidays.length > 0 && (
                <Table title={title} holidays={holidays} />
            )}
        </section>
    );
}

export default UpcomingHolidays;