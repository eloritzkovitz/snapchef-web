'use client';

export default function ApiDocsPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const apiDocsUrl = `${baseUrl.replace(/\/$/, '')}/api-docs/`;

  return (
    <div style={{ height: '100vh', width: '100%', background: '#fff' }}>
      <iframe
        src={apiDocsUrl}
        title="API Documentation"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allowFullScreen
      />
    </div>
  );
}