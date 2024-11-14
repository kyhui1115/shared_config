'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  function HANDLE_CLICK() {
    // setCount(count + 1);
  }

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <>
      <button onClick={HANDLE_CLICK}></button>
    </>
  );
}
