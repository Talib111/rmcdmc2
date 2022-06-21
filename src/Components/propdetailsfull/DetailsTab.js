import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DetailCard from '../DetailCard';
import DetailsTable from '../DetailsTable';

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

export default function DetailsTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const ownerData = [
        { id: 1, owner_name: 'mark', Guardian_name: 'markFather', relation: 'S/O', aadhar: 123456789456, pan: 'AVSPH14277', gender: 'male', dob: '20 june 1999' },
        { id: 2, owner_name: 'mark', Guardian_name: 'markFather', relation: 'S/O', aadhar: 123456789456, pan: 'AVSPH14277', gender: 'male', dob: '20 june 1999' },
        { id: 3, owner_name: 'mark', Guardian_name: 'markFather', relation: 'S/O', aadhar: 123456789456, pan: 'AVSPH14277', gender: 'male', dob: '20 june 1999' }
    ]
    const holdingData = { id: 1, ward: 'mark', new_ward: 'markFather', holding: 'S/O', new_holding: 123456789456 }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Holding" {...a11yProps(0)} />
                    <Tab label="Owner" {...a11yProps(1)} />
                    <Tab label="Tax" {...a11yProps(2)} />
                    <Tab label="Electricity" {...a11yProps(2)} />
                    <Tab label="Floor" {...a11yProps(2)} />
                    <Tab label="Payment" {...a11yProps(2)} />

                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <DetailCard dataSet={holdingData} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                {/* PASSING ARRAY OF OBJECTS IN detailsTable COMPONENT */}
                <DetailsTable dataSet={ownerData} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DetailCard dataSet={holdingData} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <DetailsTable dataSet={ownerData} />
            </TabPanel><TabPanel value={value} index={4}>
                <DetailCard dataSet={holdingData} />
            </TabPanel><TabPanel value={value} index={5}>
                <DetailsTable dataSet={ownerData} />
            </TabPanel>
        </Box>
    );
}
