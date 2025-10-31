import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">XLR8</h1>
        </div>
      </div>
    </header>
  );
}
