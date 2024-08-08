"use client";

import { useTranslation } from "@/i18n/client";
import { useParams } from "next/navigation";
import { LangSwitch } from "../LangSwitch";
import { MenuLink } from "./MenuLink";

export function Menu() {
  const { lng } = useParams<{ lng: string }>();
  const { t } = useTranslation(lng, "menu");

  return (
    <nav className="flex items-start justify-between">
      <div className="flex flex-wrap gap-1">
        <MenuLink url={`/${lng}`} text={t("home")} />
        <MenuLink url={`/${lng}/about`} text={t("about")} />
        <MenuLink url={`/${lng}/blog`} text={t("blog")} />
      </div>
      <LangSwitch />
    </nav>
  );
}
