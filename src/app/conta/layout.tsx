import { ContaHeader } from "@/components/conta/containerheader.module";
import { ReactNode } from "react";

export default function ContaLayout({children}: { children: ReactNode}) {
  return (
    <div className="container">
      <ContaHeader />
      {children}
    </div>
  )
}