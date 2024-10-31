"use client";
import { useState } from "react";
import AcceptCookies from "@/components/AcceptCookies";
import If from "@/components/If";

export default function Home() {
  const [showCookies, setShowCookies] = useState(true);

  const handleAccept = () => {
    setShowCookies(false);
  };

  return (
    <div>
      <If condition={showCookies}>
        <AcceptCookies onAccept={handleAccept} />
      </If>
    </div>
  );
}
