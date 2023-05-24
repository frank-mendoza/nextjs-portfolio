export const metadata = {
  title: "Frank Mendoza",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ padding: 0, margin: 0 }}>{children}</body>
    </html>
  );
}
