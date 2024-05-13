'use client'

import { useEffect } from 'react';

const URL = "https://t.me/+_nLFVmqobbJhOTVk"
const NAME = "Telegram"

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