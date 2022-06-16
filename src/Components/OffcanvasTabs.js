import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Buttons from './Buttons';
import InputField from './InputField';
import ListItems from './ListItems';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function OffcanvasTabs() {
  const [value, setValue] = React.useState(0);
  const [notes, setNotes] = React.useState({ listNotes: 'notes from state', date: '2 12 2022' })
  const [allNoteList, setallNoteList] = React.useState([{ listNotes: 'notes from state', date: '2 12 2022' }])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const receiveNotesFromInputField = (notes) => {
    setNotes({ listNotes: notes, date: Date() })
    // console.log(notes)
  }
  const addNotesToList = ()=>{
    // console.log('calling me')
    setallNoteList([{ listNotes: notes.listNotes, date: notes.date },...allNoteList])
  }
  const removeNotes = ()=>{

  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Notes" {...a11yProps(0)} />
          <Tab label="Bug Track" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <span onClick={addNotesToList}>
            <Buttons title="Edit" variant="contained" size="small" color="primary" />
          </span>
        <div className="w-full h-80 text-white mt-8">
          <InputField fun={receiveNotesFromInputField} label="Add Short Notes.." />
          <div className='mt-2'></div>
          

      

        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="w-full h-80 text-white">
          <Buttons title="Add Bugs" variant="contained" size="small" color="warning" />
        </div>
      </TabPanel>

    </Box>
  );
}
