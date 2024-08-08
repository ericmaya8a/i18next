import { useServerTranslation } from "@/i18n";

export async function MainFooter({ lng }: { lng: string }) {
  const date = new Date();
  const year = date.getFullYear();
  const { t } = await useServerTranslation(lng, "footer");

  return (
    <footer className="border-t border-slate-400 p-4">
      {t("copy-right")} {year}
    </footer>
  );
}
