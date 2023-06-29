
import React from 'react'
import Box from './Box';
import style from './Section6.module.css'
import Lorem from './Lorem';

function Section6() {
  return (
    <div className={style.container}>
        <Box text={"Illum magnam aliquam"}/>
        <Box/>
        <Box text='Quia so minima'/>
        <Box/>
        <Lorem />


    </div>
  )
}

export default Section6
