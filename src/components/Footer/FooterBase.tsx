import { languages } from "@/i18n/settings";
import { Namespace, TFunction } from "i18next";
import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";

export async function FooterBase({
  lng,
  t,
}: {
  t: TFunction<Namespace, string>;
  lng: string;
}) {
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
