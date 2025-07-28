import { useEffect, useState } from "react";
import type { Country } from "../types/country";

export function useFetchAllCountries(url: string) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error fetching countries: ${res.statusText}`);
        }
        const data: Country[] = await res.json();
        setCountries(
            data.map( c => ({
                name: c.name,
                countryCode: c.countryCode
            }))
        )
        setError(null);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, [url]);

  return { countries, error, isLoading };
}