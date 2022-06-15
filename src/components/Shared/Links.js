import React from 'react'
import { links } from './data';
import { Nav } from "react-bootstrap";

const LinksData = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <Nav.Link
            href={url}
            key={id}
            style={{ color: "black" }}
            className="links"
          >
            {text}
          </Nav.Link>
        );
      })}
    </>
  );
}

export default LinksData