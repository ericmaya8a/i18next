import { PageHeading } from "@/components/PageHeading/PageHeading";
import { useServerTranslation } from "@/i18n";

export default async function AboutPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useServerTranslation(lng, "about");

  return (
    <>
      <PageHeading>{t("title")}</PageHeading>
      <p>{t("text")}</p>
    </>
  );
}
