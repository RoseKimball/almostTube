import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import './SideBarItem.scss';

export function SideBarItem(props) {

    const highlight = props.highlight ? 'hightlight-item' : null;

    return(
        <Menu.Item className={['sidebar-item', highlight].join(' ')}>
            <div className='sidebar-item-alignment-container'>
                <span><Icon size='large' name={props.icon}></Icon></span>
                <span>{props.label}</span>
            </div>
        </Menu.Item>
    );
};

export default SideBarItem;