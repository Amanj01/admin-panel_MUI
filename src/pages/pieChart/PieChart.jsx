import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";
import Header from '../../components/Header'
import Pie from "./pie";

const PieChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header title={'Pie Chart'} subTitle={'Simple Pie Chart'} />v
      <Pie />
    </Box>
  );
};

export default PieChart;