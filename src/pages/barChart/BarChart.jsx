import React from 'react'
import Header from '../../components/Header'
// @ts-ignore
import Bar from './Bar'
const BarChart = () => {  
  return (
    <>
      <Header title={'Bar Chart'} subTitle={'The minimum wage in Germany, France and Spain (EUR/month)'}  />
  <Bar/>
   </>
  )
}

export default BarChart
