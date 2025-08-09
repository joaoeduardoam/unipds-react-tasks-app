
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid gap-y-6 bg-[#fdfcfc] px-8 py-12 rounded-3xl min-w-100">
      {children}
    </div>
  );
}
