import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
    BarSeries  
} from '@devexpress/dx-react-chart-material-ui';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const data = [
    { argument: 1, value: 5 },
    { argument: 2, value: 10 },
    // { argument: 3, value: 15 },
];

export default () => (
    <ThemeProvider theme={darkTheme}>
    <div className='ml-80 mt-12'>
        <Paper>
            <Chart
                data={data}
            >
                <ArgumentAxis />
                <ValueAxis />

                <LineSeries   valueField="value" argumentField="argument" />
            </Chart>
        </Paper>
    </div>
    </ThemeProvider>
);