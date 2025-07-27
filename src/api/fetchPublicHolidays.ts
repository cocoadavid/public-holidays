import { useState, useEffect } from "react";
import type { Holiday } from "../types/holiday";

export function usePublicHolidays(url: string, countryCode: string) {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHolidays = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${url}/${countryCode}`);
        if (!res.ok) {
          throw new Error(`Error fetching holidays for ${countryCode}: ${res.statusText}`);
        }
        const data: Holiday[] = await res.json();
        setHolidays(
          data.map(h => ({
            date: h.date,
            localName: h.localName,
            name: h.name
          }))
        );
        setError(null);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHolidays();
  }, [url, countryCode]);

  return { holidays, error, isLoading };
}
