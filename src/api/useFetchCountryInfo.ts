import { useEffect, useState } from "react";
import type { Country } from "../types/country";

export function useFetchCountryInfo(countryCode: string) {
  const [country, setCountry] = useState<Country | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountry = async () => {
      if (!countryCode) return;

      setIsLoading(true);
      try {
        const res = await fetch(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
        if (!res.ok) {
          throw new Error(`Error fetching country: ${res.statusText}`);
        }
        const data = await res.json();
        console.log("Country data:", data);
        setCountry({
          name: data.commonName,
          countryCode: data.countryCode,
        });
        setError(null);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountry();
  }, [countryCode]);

  return { country, error, isLoading };
}
