import { getTranslations } from "next-intl/server";

export async function MarketsCoordination() {
  const t = await getTranslations("markets.coordination");

  return (
    <section className="bg-carbon-900 px-6 py-16 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <p className="text-mint-500 text-sm font-medium tracking-wide uppercase">{t("eyebrow")}</p>
        <h2 className="text-bone-100 text-h2 text-balance">{t("heading")}</h2>
        <p className="text-bone-400 text-body">{t("body")}</p>
      </div>
    </section>
  );
}
