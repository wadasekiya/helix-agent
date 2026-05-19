export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div style={{ borderBottom: "1px solid #ccc", padding: 10 }}>
        <strong>Donation Section</strong>
      </div>

      {children}
    </div>
  );
}