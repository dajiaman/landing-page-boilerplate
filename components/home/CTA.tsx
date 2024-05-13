/* eslint-disable react/no-unescaped-entities */
import CTAButton from "@/components/home/CTAButton";

const CTA = ({ locale, CTALocale }: { locale: any; CTALocale: any }) => {
  return (
    <section className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center">{locale.title}</h2>
        <p className="text-large text-default-500">
          {locale.description1}
          {locale.description2} {locale.description3}
          {locale.description4}
          {locale.description5}
          {locale.description6}
        </p>
      </div>
      <CTAButton locale={CTALocale} />
    </section>
  );
};

export default CTA;
