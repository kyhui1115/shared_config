'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  function HANDLE_CLICK(e: any) {
    // setCount(count + 1);
  }

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <div>
      <button onClick={HANDLE_CLICK}>Button</button>
    </div>
  );
}
