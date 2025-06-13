"use client";

export default function ApiDocsPage() {
  
  return (
    <div style={{ height: "100vh", width: "100%", background: "#fff" }}>
      <iframe
        src="https://snapchef.cs.colman.ac.il/api-docs/"
        title="API Documentation"
        style={{ width: "100%", height: "100%", border: "none" }}
        allowFullScreen
      />
    </div>
  );
}
