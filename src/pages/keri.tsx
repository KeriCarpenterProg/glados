import React from 'react';
import Layout from '@theme/Layout';

export default function KeriPage(): JSX.Element {
  return (
    <Layout
      title="About Keri"
      description="A brief introduction to Keri's Docusaurus site"
    >
      <main style={{ padding: '2rem' }}>
        <h1>Hi! I'm Keri ✨</h1>
        <p>
          Welcome to my Docusaurus site. This page was written using <code>TypeScript (.tsx)</code>.
        </p>
        <p>
          I'm a Senior Engineering Manager passionate about AI, documentation, and empowering developers.
        </p>
        <p>
          This site will include resources, engineering practices, and lessons learned that I hope are helpful to others.
        </p>
      </main>
    </Layout>
  );
}
