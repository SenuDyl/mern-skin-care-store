import React, { useState } from "react";
import { List, ListItemButton, ListItemText, Typography, Box } from "@mui/material";

// Example categories data
const categories = [
  { label: "Body lotion", count: 3 },
  { label: "Bundles", count: 1 },
  { label: "Cleanser", count: 6 },
  { label: "Moisturizer", count: 3 },
  { label: "Sunscreens", count: 2 }
];

const CategoryFilter = ({ onCategorySelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    if (onCategorySelect) {
      onCategorySelect(categories[index].label);
    }
  };

  return (
    <Box sx={{ width: 250, bgcolor: "background.paper", p: 2 }}>
      <Typography variant="h4" color="text.secondary" gutterBottom>
        Filter by Categories
      </Typography>
      <List component="nav">
        {categories.map((cat, idx) => (
          <ListItemButton
            key={cat.label}
            selected={selectedIndex === idx}
            onClick={() => handleListItemClick(idx)}
            sx={{
              borderRadius: 1,
              mb: 0.5,
              "&.Mui-selected": {
                bgcolor: "primary.light",
                color: "primary.main"
              }
            }}
          >
            <ListItemText
              primary={
                <span>
                  {cat.label} <span style={{ color: "#888" }}>({cat.count})</span>
                </span>
              }
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default CategoryFilter;
