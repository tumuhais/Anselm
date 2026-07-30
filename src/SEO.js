import React from "react";
import { Helmet } from "react-helmet-async";

function SEO({ title, description, keywords, image, url }) {
  // Default fallback values tailored to your identity and skills
  const siteTitle = title 
    ? `${title} | Anselm Tumuhaise` 
    : "Anselm Tumuhaise | senior software Engineer";
  
  const defaultDesc = 
    "Portfolio of Anselm Tumuhaise - senior software Engineer. Building modern React applications, secure Cisco network infrastructures, MySQL/Firebase databases, and IT solutions.";
  
  const defaultKeywords = 
    "Anselm Tumuhaise, senior software Engineer, Cisco, React, Node.js, Firebase, MySQL, IT Solutions Uganda, Portfolio";

  return (
    <Helmet>
      {/* Standard HTML Title & Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Anselm Tumuhaise" />

      {/* Open Graph / Social Media Sharing (WhatsApp, Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}

export default SEO;