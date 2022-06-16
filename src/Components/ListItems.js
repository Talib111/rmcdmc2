import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ClearIcon from '@mui/icons-material/Clear';

export default function ListItems(props) {
  return (
    <div className="text-black">
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper','padding':'2px 2px 2px 2px' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.listNotes} secondary={props.date} />
        <span onClick={()=> props.removeNotes}>
        <ClearIcon color="error" />
        </span>
      </ListItem>
     
     
    </List>
    <hr/>
    </div>
  );
}
