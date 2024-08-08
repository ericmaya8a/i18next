"use client";

import { useTranslation } from "@/i18n/client";
import { useParams } from "next/navigation";
import { Trans } from "react-i18next";
import { languages } from "@/i18n/settings";
import Link from "next/link";

export function Footer() {
  const { lng } = useParams<{ lng: string }>();
  const { t } = useTranslation(lng, "footer");
  const lang = t(lng);

  return (
    <footer className="mt-12">
      <Trans i18nKey="languageSwitcher" t={t}>
        {/* @ts-ignore */}
        Switch from <strong>{{ lang }}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => (
          <span key={l}>
            {index > 0}
            <Link href={`/${l}`}>{t(l)}</Link>
          </span>
        ))}
    </footer>
  );
}
