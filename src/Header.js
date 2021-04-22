/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import './App.css'
import { Avatar } from '@material-ui/core'
import { AccessTime, HelpOutline, Search } from '@material-ui/icons'


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* AVATAR */}
                <Avatar />
                {/* TimeIcon */}
                <AccessTime></AccessTime>
            </div>

            <div className="header__search">
                <Search></Search>
                <input type="text" placeholder="Search this channel" />
            </div>

            <div className="header__right">
                <HelpOutline></HelpOutline>
            </div>
        </div>
    )
}

export default Header
