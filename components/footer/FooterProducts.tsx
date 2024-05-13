import { siteConfig } from "@/config/site";
import Link from "next/link";

const FooterProducts = () => {
  const footerProducts = siteConfig.footerProducts;

  return (
    <div className="flex flex-col flex-wrap justify-center">
      <h3 className="text-[20px] font-semibold leading-6 text-neutral-100">
        Product
      </h3>
      <ul className="mt-6 space-y-2 " role="list">
        {footerProducts.map((product, index) => {
          return (
            <li key={product.url}>
              <Link
                className="text-sm leading-6 text-neutral-300 hover:text-neutral-100"
                href={product.url}
              >
                {product.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterProducts;
