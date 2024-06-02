'use client'

import { useEffect } from 'react';

const URL = "https://www.patreon.com/LonelinessMC/membership"
const NAME = "Shop"

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