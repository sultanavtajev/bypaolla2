"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{ color: "#000000", backgroundColor: "#FCF6F1" }}
    >
      <div className="footer-content content-1170 center-relative">
        <ul className="copyright-holder">
          <li
            className="social-footer"
            style={{ color: "#000000", backgroundColor: "#FCF6F1" }}
          >
            {/* <Link href="https://twitter.com/">Twitter</Link> */}
            <Link
              style={{ color: "#000000", backgroundColor: "#FCF6F1" }}
              href="https://www.facebook.com/paolla.dasilva.1"
            >
              Facebook
            </Link>
            <Link
              style={{ color: "#000000", backgroundColor: "#FCF6F1" }}
              href="https://www.instagram.com/silvalot/"
            >
              Instagram
            </Link>
            <Link
              style={{ color: "#000000", backgroundColor: "#FCF6F1" }}
              href="https://www.tiktok.com/@silvalot"
            >
              Tiktok
            </Link>
            <Link
              style={{ color: "#000000", backgroundColor: "#FCF6F1" }}
              href="https://www.snapchat.com/add/silvalot"
            >
              Snapchat
            </Link>
            {/* <Link href="https://www.behance.net/">Behance</Link> */}
          </li>
          <li
            className="copyright-footer"
            style={{ color: "#000000", backgroundColor: "#FCF6F1" }}
          >
            {new Date(Date.now()).getFullYear()} Designet og kodet av{" "}
            <Link
              style={{ color: "#000000", backgroundColor: "#FCF6F1" }}
              href="http://sultanavtajev.com"
            >
              Developia AS
            </Link>
            .
          </li>
        </ul>
      </div>
    </footer>
  );
}

