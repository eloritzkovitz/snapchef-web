'use client';

import './ApiPage.css';
import { useState } from 'react';
import { endpoints as allEndpoints } from './endpoints';

interface Endpoint {
  method: string;
  path: string;
  summary: string;
  description?: string;
  requestBody?: {
    contentType: string;
    schema?: any;
  };
  responses?: Record<string, ResponseType>;
}

interface ResponseType {
  description: string;
  schema?: any;
}

const apiTags = [
  { name: 'Auth', description: 'API for managing user authentication' },
  { name: 'Ingredients', description: 'API for recognizing ingredients from images, receipts or barcodes' },
  { name: 'Recipes', description: 'API for generating recipes using user input and preferences' },
  { name: 'Fridge', description: 'API for managing fridge items' },
  { name: 'Cookbook', description: 'API for managing saved recipes' },
];

const endpoints: Record<string, Endpoint[]> = {
  Auth: allEndpoints.User,
  Ingredients: allEndpoints.Ingredient,
  Recipes: allEndpoints.Recipe,
  Fridge: allEndpoints.Fridge,
  Cookbook: allEndpoints.Cookbook,
};

export default function API() {
  return (
    <div className="api-page">
      {/* Hero Section */}
      <div className="hero-api">
        <div className="container">
          <h1 className="hero-title">SnapChef API Documentation</h1>
          <p className="tagline">Explore and interact with the SnapChef API endpoints</p>
        </div>
      </div>

      {/* Swagger UI Section */}
      <section className="api-section">
        <div className="container">
          <SwaggerUI />
        </div>
      </section>
    </div>
  );
}

function SwaggerUI() {
  const [activeTag, setActiveTag] = useState<string>('Auth');
  const [activeEndpoint, setActiveEndpoint] = useState<Endpoint | null>(null);

  const handleEndpointClick = (endpoint: Endpoint) => {
    if (activeEndpoint?.path === endpoint.path && activeEndpoint.method === endpoint.method) {
      setActiveEndpoint(null);
    } else {
      setActiveEndpoint(endpoint);
    }
  };

  const renderRequest = (endpoint: Endpoint) => {
    if (!endpoint.requestBody) return null;
    return (
      <div className="swagger-request">
        <h4>Request Body</h4>
        <p className="content-type">{endpoint.requestBody.contentType}</p>
        {endpoint.requestBody.schema && (
          <div className="swagger-schema">
            <pre>{JSON.stringify(endpoint.requestBody.schema, null, 2)}</pre>
          </div>
        )}
        {endpoint.requestBody.schema?.example && (
          <div className="swagger-example">
            <h5>Example</h5>
            <pre>{JSON.stringify(endpoint.requestBody.schema.example, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  };

  const renderResponse = (endpoint: Endpoint) => {
    if (!endpoint.responses) return null;
    return (
      <div className="swagger-response">
        <h4>Responses</h4>
        {Object.entries(endpoint.responses).map(([code, response]) => (
          <div key={code} className="swagger-response-code">
            <div className="response-header">
              <span className={`response-code code-${code.charAt(0)}`}>{code}</span>
              <span className="response-description">{response.description}</span>
            </div>
            {response.schema && (
              <div className="swagger-schema">
                <pre>{JSON.stringify(response.schema, null, 2)}</pre>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="swagger-ui">
      <div className="swagger-tags">
        {apiTags.map(tag => (
          <button
            key={tag.name}
            className={`swagger-tag ${activeTag === tag.name ? 'active' : ''}`}
            onClick={() => {
              setActiveTag(tag.name);
              setActiveEndpoint(null);
            }}
          >
            {tag.name}
          </button>
        ))}
      </div>

      <div className="swagger-tag-description">
        {apiTags.find(tag => tag.name === activeTag)?.description}
      </div>

      <div className="swagger-endpoints">
        {(endpoints[activeTag] || []).map((endpoint, index) => (
          <div key={`${endpoint.method}-${endpoint.path}-${index}`} className="swagger-endpoint">
            <div
              className="endpoint-header"
              onClick={() => handleEndpointClick(endpoint)}
            >
              <span className={`method ${endpoint.method.toLowerCase()}`}>{endpoint.method}</span>
              <span className="path">{endpoint.path}</span>
              <span className="summary">{endpoint.summary}</span>
              <span className={`arrow ${activeEndpoint?.path === endpoint.path && activeEndpoint?.method === endpoint.method ? 'open' : ''}`}>
                ▼
              </span>
            </div>
            {activeEndpoint?.path === endpoint.path && activeEndpoint?.method === endpoint.method && (
              <div className="endpoint-details">
                <div className="endpoint-description">{endpoint.description}</div>
                {renderRequest(endpoint)}
                {renderResponse(endpoint)}
                <div className="swagger-try-out">
                  <button className="try-button">Try it out</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
