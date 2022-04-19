import React from "react";
import "./Footer.css";
const Footer = () => {
  const today = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>
          Copyright
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
          {today}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
