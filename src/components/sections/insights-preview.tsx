"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { Link } from "@/i18n/navigation";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const POST_KEYS = ["post1", "post2", "post3"] as const;

export function InsightsPreview() {
  const t = useTranslations("home.insights");
  const reducedMotion = useReducedMotionPreference();

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-4">
          <h2 className="text-h2 text-carbon-900">{t("heading")}</h2>
          <Link
            href="/insights"
            className="text-primary-700 text-small font-medium underline-offset-4 hover:underline"
          >
            {t("cta")}
          </Link>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {POST_KEYS.map((key) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              transition={reducedMotion ? { duration: 0 } : undefined}
            >
              <Card>
                <CardHeader>
                  <span className="text-caption text-primary-700 mb-2 block uppercase">
                    {t(`${key}.tag`)}
                  </span>
                  <CardTitle>{t(`${key}.title`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t(`${key}.excerpt`)}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
