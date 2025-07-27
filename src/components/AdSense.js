import React, { useEffect } from 'react';

export default function AdSense() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Adsense error', e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-7369141258488031"
      data-ad-slot="7621327309"
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
  );
}
