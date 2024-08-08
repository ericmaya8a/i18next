import { PageHeading } from "@/components/PageHeading/PageHeading";
import { useServerTranslation } from "@/i18n";

export default async function BlogPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useServerTranslation(lng, "blog");

  return (
    <>
      <PageHeading>{t("title")}</PageHeading>
      <p>{t("text")}</p>
    </>
  );
}
