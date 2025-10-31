import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1">
      <Header />
      {children}
    </main>
  );
}
