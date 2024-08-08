"use client";

import { useTranslation } from "@/i18n/client";
import { languages } from "@/i18n/settings";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export function LangSwitch() {
  const { lng } = useParams<{ lng: string }>();
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation(lng, "languages");
  const [selectedLng, setSelectedLng] = useState(lng);
  const url = pathname.substring(3);

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLng(value);
    setTimeout(() => router.push(`/${value}${url}`), 1);
  };

  return (
    <select
      className="rounded-md border border-slate-400 bg-white p-2"
      value={selectedLng}
      onChange={handleChange}
    >
      {languages.map((l) => (
        <option key={l} value={l}>
          {t(l)}
        </option>
      ))}
    </select>
  );
}
