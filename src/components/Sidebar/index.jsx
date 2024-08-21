import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 250,
        height: 'calc(100vh - 64px)',
        position: 'fixed',
        top: 145,
        left: 0,
        backgroundColor: 'background.paper',
        zIndex: 1200,
        overflowY: 'auto',
      }}
      role="presentation"
    >
      <List>
        {[
          'Woman’s Fashion',
          'Men’s Fashion',
          'Electronics',
          'Home & Lifestyle',
          'Medicine',
          'Sports & Outdoor',
          'Baby’s & Toys',
          'Groceries & Pets',
          'Health & Beauty',
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
