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
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={200} height={40} />
        </Link>
      </div>
      <div>
        <button className="button">
          <a href="mailto:ammarhaider1629@gmail.com"> Contact Us</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
