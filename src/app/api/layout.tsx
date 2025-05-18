import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API - SnapChef",
  description: "Explore SnapChef's API for scanning, generating recipes, and managing your fridge and cookbook.",
};

export default function ApiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
