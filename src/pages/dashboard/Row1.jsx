 import { Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Card from './Card'
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from './data';

 const Row1 = () => {
  const theme = useTheme();
   return (
     <Stack direction={"row"} justifyContent={{xs:'center', sm:"space-between"}} flexWrap={'wrap'} gap={1}>
        <Card icone={<EmailIcon sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />} title={'12,361'} subTitle={'Emails Sent'} data={data1} increase={'+14%'} scheme={'nivo'}  />
        <Card icone={<PointOfSaleIcon sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />} title={"431,225"} subTitle={'Sales obtained'} data={data2} increase={'+21%'} scheme={'category10'} />
        <Card icone={<PersonAddIcon sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />} title={'32,441'} subTitle={'New Clients'} data={data3} increase={'+5%'} scheme={'accent'} />
        <Card icone={<TrafficIcon sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />} title={'1,325,134'} subTitle={'Traffic Received'} data={data4} increase={'+43%'} scheme={'dark2'} /> 
     </Stack>
   )
 }
 
 export default Row1
 