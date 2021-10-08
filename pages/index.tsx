import React, { useState } from "react";

import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { P } from "../components/P";

const IndexPage = () => {
  const [themeName, setTheme] = useState("theme-1");

  return (
    <div className={`my-8 p-8 flex flex-col ${themeName}`}>
      <Heading variant="h2">Themes</Heading>
      <div className="flex space-x-8">
        <Button variant="link" onClick={() => setTheme("theme-1")}>
          Theme 1
        </Button>
        <Button variant="link" onClick={() => setTheme("theme-2")}>
          Theme 2
        </Button>
        <Button variant="link" onClick={() => setTheme("theme-3")}>
          Theme 3
        </Button>
      </div>

      <div className="border-b-4 border-gray"></div>

      <Heading variant="large-h1" className="my-3">
        Title
      </Heading>

      <Heading variant="h1" className="my-3">
        Heading 1
      </Heading>

      <Heading variant="h2" className="my-3">
        Heading 1
      </Heading>

      <Heading variant="h3" className="my-3">
        Heading 1
      </Heading>

      <P variant="p1">Paragraph 1</P>
      <P variant="p2">Paragraph 2</P>
      <P variant="p3">Paragraph 3</P>

      <Button variant="primary" className="my-3">
        Primary Button
      </Button>

      <Button variant="secondary" className="my-3">
        Secondary Button
      </Button>

      <Button variant="inverted" className="my-3">
        Inverted Button
      </Button>

      <Button variant="link" className="my-3 max-w-lg">
        Link
      </Button>
    </div>
  );
};

export default IndexPage;
