import { AppBar,Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Header = () => {
    const [value ,setValue] = useState();
  return (
    <div>
        <AppBar position='sticky'>
            <Toolbar>
                <Typography>
                    <LibraryBooksIcon/>
                </Typography>
                <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab label='Add Product' />
                    <Tab label='About Us' />
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header