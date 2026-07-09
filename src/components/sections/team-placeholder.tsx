import { getTranslations } from "next-intl/server";

const ROLE_KEYS = ["role1", "role2"] as const;
const INITIALS: Record<(typeof ROLE_KEYS)[number], string> = {
  role1: "EL",
  role2: "EL",
};

export async function TeamPlaceholder() {
  const t = await getTranslations("about.team");

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-carbon-900 text-h2 mb-12">{t("heading")}</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {ROLE_KEYS.map((key) => (
            <div key={key} className="flex items-center gap-4">
              <div className="bg-bone-300 text-carbon-600 text-small flex size-14 shrink-0 items-center justify-center rounded-full font-semibold">
                {INITIALS[key]}
              </div>
              <p className="text-carbon-900 text-h3">{t(key)}</p>
            </div>
          ))}
        </div>
        <p className="text-caption text-carbon-500 mt-8">{t("caption")}</p>
      </div>
    </section>
  );
}
