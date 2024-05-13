'use client'

import { useEffect } from 'react';

const URL = "https://www.instagram.com/mc.loneliness/"
const NAME = "Instagram"

export default function RedirectPage() {

  useEffect(() => {
    window.location.href = URL;
  }, []);

  return (
    <div>
      <p>Redirecting to <a href={URL}>{NAME}</a>...</p>
    </div>
  );
}