"use client";

export default function ApiDocsPage() {
  return (
    <iframe
      src="https://snapchef.cs.colman.ac.il/api-docs/"
      title="API Documentation"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      allowFullScreen
    />
  );
}
