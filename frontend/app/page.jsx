import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="landing-header">Welcome to MEV-Safe</h1>
      <div className ="landing-text"> 
        <p>Please connect a wallet to begin</p>
      </div>
    </div>
  );
}
