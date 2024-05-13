import FooterProducts from "@/components/footer/FooterProducts";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const { authors } = siteConfig;

  return (
    <footer className="w-full bg-black text-sm text-gray-400 border-t">
      <div className="flex flex-col">
        <div className="mx-auto w-full max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <FooterProducts />
              </div>
              <div>
                <FooterProducts />
              </div>
              <div>
                <FooterProducts />
              </div>
              <div>
                <FooterProducts />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row text-center justify-center pb-10">
          <div>{`©${currentYear}`}</div>
          <div className="mx-[4px]">company name</div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
