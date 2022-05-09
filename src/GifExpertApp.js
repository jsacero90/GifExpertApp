import React, { useState } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  // no se hace asi
  //const categories = ["Dragon Ball", "One Punch", "Caballeros del zodico"];

  // asi se hace
  const [categories, setCategories] = useState(["Dragon Ball"]);

  return (
    <>
      <h2>GitExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
