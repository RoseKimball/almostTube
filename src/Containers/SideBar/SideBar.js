import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './SideBar.scss';
import SideBarItem from './SideBarItem/SideBarItem';

export class SideBar extends Component {
    render() {
        return(
            <Menu borderless vertical stackable fixed='left' className='side-nav'>
                    <SideBarItem highlight={true} className='highlight-item'  label='Home' icon='home'/>
                    <SideBarItem label='Trending' icon='fire'/>
                    <SideBarItem label='Followers' icon='spy'/>
                    <SideBarItem label='History' icon='history'/>
                    <SideBarItem label='Watch later' icon='clock'/>
                    <SideBarItem label='Liked videos' icon='thumbs up'/>
                    <SideBarItem label='Movies and Shows' icon='film'/>
                    <SideBarItem label='Report history' icon='flag'/>
                    <SideBarItem label='Help' icon='help circle'/>
                    <SideBarItem label='Send feedback' icon='comment'/>
            </Menu>
        );
    };
};

export default SideBar;