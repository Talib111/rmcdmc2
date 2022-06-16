import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Buttons from './Buttons';
import InputField from './InputField';
import ListItems from './ListItems';
import TextArea from './TextArea';
import { Button } from '@mui/material';

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
  const [tempNotes, settempNotes] = React.useState({ listNotes: 'notes from state', date: '2 12 2022' })
  const [notes, setNotes] = React.useState({ listNotes: 'notes from state', date: '2 12 2022' })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const rcvNotesFromInputField = (notes) => {
    settempNotes({ listNotes: notes, date: Date() })
  }
  const addNotesToList = () => {
    setNotes({ listNotes: tempNotes.listNotes, date: tempNotes.date })

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
        </span>
        <div className="w-full h-80 text-white mt-8">
          <TextArea fun={rcvNotesFromInputField} value={notes.listNotes} />
          <div className='mt-2'></div>
          <Buttons title="Save" color="primary" variant='contained' size="small" />






        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="w-full h-80 text-white">
          <div className="h-20 mb-4">
            <div className='text-black text-xs'>Write Comment</div>
            <TextArea fun={rcvNotesFromInputField} value={notes.listNotes} />
          </div>
          <input class="mt-8 mb-4 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple />

          <Buttons title="Add Bug" variant="contained" size="small" color="warning" />
          <hr className='mt-8' />
          <div className="bg-gray-100 text-gray-900">
            <div className="px-2 py-1">Bug List</div>
            <ListItems bugText="This is" date="20 jan 2022" />
            <ListItems bugText="This is" date="20 jan 2022" />
            <ListItems bugText="This is" date="20 jan 2022" />
          </div>
        </div>
      </TabPanel>

    </Box>
  );
}
