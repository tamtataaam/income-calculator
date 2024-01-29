import { SyntheticEvent, useState } from 'react';

import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Table } from '../Table/Table';

export const Tabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100vw', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            <Tab label="Доход сейчас" value="1" sx={{ width: '33.3vw', maxWidth: '33.3vw' }} />
            <Tab label="Планируемый доход" value="2" sx={{ width: '33.3vw', maxWidth: '33.3vw' }} />
            <Tab label="Сводная" value="3" sx={{ width: '33.3vw', maxWidth: '33.3vw' }} />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: 0 }}>
          <Table />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};
