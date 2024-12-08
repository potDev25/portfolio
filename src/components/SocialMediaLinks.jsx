import React from "react";

export default function SocialMediaLinks() {
  return (
    <ul className="mt-[50px] links-media">
      <li>
        <a href="https://github.com/potDev25" target="_blank" className="links-social">
          <i class="fa-brands fa-github"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/neil-bryan-gaviola-444318280/"
          target="_blank" className="links-social"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/neilbryan.gaviola.7/" className="links-social" target="_blank">
          <i class="fa-brands fa-facebook"></i>
        </a>
      </li>
    </ul>
  );
}
