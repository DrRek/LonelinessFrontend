'use client'

import { useEffect } from 'react';

const URL = "https://docs.google.com/document/d/1GrRqY8QPwbyoYXqu1jOetHWtcANarkkrW825-sXMsCk/edit?usp=sharing"
const NAME = "Vanilla Rules"

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