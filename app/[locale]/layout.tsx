type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function BasicLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  console.log("basicLayout");

  return (
    <html lang={locale}>
      <head></head>
      <body>
        <>多语言</>
      </body>
    </html>
  );
}
