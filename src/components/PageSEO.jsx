import { Helmet } from 'react-helmet-async';

export default function PageSEO({ title, description, path = "" }) {
  const siteName = "XPARK Padel Academy | Dubai";
  const fullTitle = title === "Home" ? siteName : `${title} | ${siteName}`;
  const url = `https://xparkpadel.ae${path}`; // Placeholder domain

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
