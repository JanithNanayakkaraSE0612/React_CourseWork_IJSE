import { AppBar,Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Header = () => {
  return (
    <div>
        <AppBar position='sticky'>
            <Toolbar>
                <Typography>
                    <LibraryBooksIcon/>
                </Typography>
                <Tabs>
                    <Tab label='Add Product' />
                    <Tab label='About Us' />
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header