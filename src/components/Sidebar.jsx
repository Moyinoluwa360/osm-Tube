import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          position: "relative",  // Allows the pseudo-element to be positioned
          color: "#000000",
          fontWeight: category.name === selectedCategory ? "bolder" : "normal",
          fontSize: category.name === selectedCategory ? "15px" : "13px"
        }}
        key={category.name}
      >
        <span style={{ color: "#000000", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>

        {/* Add the line under the selected category */}
        {category.name === selectedCategory && (
          <span
            style={{
              content: '""',
              position: "absolute",
              bottom: "-5px",  // Position it below the button
              left: 0,
              right: 0,
              height: "2px",
              backgroundColor: "#888888",
              width: "90%",  // Full width underline
            }}
          />
        )}
      </button>
    ))}
  </Stack>
);


export default Categories;