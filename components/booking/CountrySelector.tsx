"use client";

import { useState } from "react";
import { countries, popularCountries, Country } from "@/data/countries";

type Props = {
  value: Country;
    onChange: (country: Country) => void;
    };

    export default function CountrySelector({ value, onChange }: Props) {
      const [search, setSearch] = useState("");

        const filtered = countries.filter((country) =>
            country.name.toLowerCase().includes(search.toLowerCase())
              );

                return (
                    <div className="space-y-3">
                          <input
                                  className="field-input"
                                          placeholder="Search country..."
                                                  value={search}
                                                          onChange={(e) => setSearch(e.target.value)}
                                                                />

                                                                      <select
                                                                              className="field-input"
                                                                                      value={value.code}
                                                                                              onChange={(e) => {
                                                                                                        const selected = countries.find(
                                                                                                                    (country) => country.code === e.target.value
                                                                                                                              );
                                                                                                                                        if (selected) onChange(selected);
                                                                                                                                                }}
                                                                                                                                                      >
                                                                                                                                                              {[...popularCountries, ...filtered].map((country) => (
                                                                                                                                                                        <option key={`${country.name}-${country.code}`} value={country.code}>
                                                                                                                                                                                    {country.flag} {country.name} ({country.code})
                                                                                                                                                                                              </option>
                                                                                                                                                                                                      ))}
                                                                                                                                                                                                            </select>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                  );
                                                                                                                                                                                                                  }