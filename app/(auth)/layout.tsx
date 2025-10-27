import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className=" mx-auto mb-4"
        />
        {children}
      </div>
    </div>
  );
}
