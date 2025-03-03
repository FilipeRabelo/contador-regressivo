import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Countdown: React.FC = () => {
  const [count, setCount] = useState<number>(50);
  const navigate = useNavigate();

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate('/youtube');
    }
  }, [count, navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-6xl font-bold">
      {count}
    </div>
  );
};

export default Countdown;