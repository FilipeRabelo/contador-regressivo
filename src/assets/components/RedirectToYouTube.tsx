import React, { useEffect } from 'react';

const RedirectToYouTube: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://www.youtube.com';
  }, []);

  return null; // Não renderiza nada
};

export default RedirectToYouTube;