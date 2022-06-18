import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DetailCard from './DetailCard';
import DataTable from './DetailsTable';

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
                <DetailCard title="Holding" />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <DataTable />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DataTable />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <DetailCard title="Holding" />
            </TabPanel><TabPanel value={value} index={4}>
                <DetailCard title="Holding" />
            </TabPanel><TabPanel value={value} index={5}>
                <DetailCard title="Holding" />
            </TabPanel>
        </Box>
    );
}
