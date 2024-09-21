import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../apiFunction/FetchCategories';

export default function Sidebar() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.categoriesApi.items);
  console.log(items);
  const status = useSelector((state) => state.categoriesApi.status);
  console.log('dfdv', status);
  const error = useSelector((state) => state.categoriesApi.error);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  console.log(items, status, error);
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
        {items?.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text.toUpperCase()} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
