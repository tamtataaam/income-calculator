import { SyntheticEvent, useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { IncomeTable, PivotTable } from 'components';
import {
  changeIncomeNowForm,
  changePlannedIncomeForm,
  submitIncomeNowForm,
  submitPlannedIncomeForm,
} from 'store/income';

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('income-now');

  const handleChangeTab = (_: SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  const tabs = [
    {
      label: 'Доход сейчас',
      value: 'income-now',
      component: (
        <IncomeTable
          tableName="incomeNow"
          changeForm={changeIncomeNowForm}
          submitForm={submitIncomeNowForm}
        />
      ),
    },
    {
      label: 'Планируемый доход',
      value: 'planned-income',
      component: (
        <IncomeTable
          tableName="plannedIncome"
          changeForm={changePlannedIncomeForm}
          submitForm={submitPlannedIncomeForm}
        />
      ),
    },
    {
      label: 'Сводная',
      value: 'pivot-table',
      component: <PivotTable />,
    },
  ];

  return (
    <Box sx={{ width: '100vw', typography: 'body1' }}>
      <TabContext value={selectedTab}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            backgroundColor: '#1976d2',
            color: 'white',
          }}
        >
          <TabList onChange={handleChangeTab} indicatorColor="secondary" textColor="inherit">
            {tabs.map(({ label, value }) => (
              <Tab
                sx={{ width: 'calc(100vw / 3)', maxWidth: 'calc(100vw / 3)' }}
                key={value}
                label={label}
                value={value}
              />
            ))}
          </TabList>
        </Box>

        {tabs.map(({ value, component }) => (
          <TabPanel key={value} value={value} sx={{ padding: 0 }}>
            {component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};
