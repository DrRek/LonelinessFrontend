'use client'

import { useEffect } from 'react';

const URL = "https://docs.google.com/document/d/1TGCEmzEZHVeELybjk8hmCkdNlXPMGm5O9GRRQjXi974/edit?usp=sharing"
const NAME = "Vanilla Challenge Rules"

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