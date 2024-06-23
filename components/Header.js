import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#E87D22",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <div>
        <Link href="/page">
          <Image src="/logo.svg" alt="Logo" width={200} height={40} />
        </Link>
      </div>
      <div>
        <a href="mailto:ammarhaider1629@gmail.com">
          <button className="button">Contact Us</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
