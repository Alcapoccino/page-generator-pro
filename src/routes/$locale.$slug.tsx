import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { isLocale } from "@/i18n/config";
import { findServiceBySlug } from "@/i18n/slugs";
import { t as getT } from "@/i18n/translations";

export const Route = createFileRoute("/$locale/$slug")({
  loader: ({ params }) => {
    if (!isLocale(params.locale)) throw notFound();
    const service = findServiceBySlug(params.locale, params.slug);
    if (!service) throw notFound();
    return { service, locale: params.locale };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { service, locale } = loaderData;
    const t = getT(locale);
    const m = t.metric[service.metric as keyof typeof t.metric] ?? service.metric;
    return {
      meta: [
        { title: t.meta.title(service.platform, m) },
        { name: "description", content: t.meta.description(service.platform, m) },
        { property: "og:title", content: t.meta.title(service.platform, m) },
        { property: "og:description", content: t.meta.description(service.platform, m) },
      ],
    };
  },
  component: Page,
  errorComponent: ({ error }) => <div className="container mx-auto py-20">{error.message}</div>,
  notFoundComponent: () => <div className="container mx-auto py-20 text-center">Service not found.</div>,
});

function Page() {
  const { service, locale } = Route.useLoaderData();
  return <ServicePage service={service} locale={locale} />;
}
