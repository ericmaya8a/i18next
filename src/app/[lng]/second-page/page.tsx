import { PageHeading } from "@/components/PageHeading/PageHeading";
import { useServerTranslation } from "@/i18n";
import Link from "next/link";

async function SecondPage({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useServerTranslation(lng, "second-page");

  return (
    <>
      <PageHeading>{t("title")}</PageHeading>
      <Link href={`/${lng}`}>{t("back-to-home")}</Link>
    </>
  );
}

export default SecondPage;
