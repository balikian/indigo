import React from 'react';

const NavItem = (props) => {
    return (
        <div className={props.className ? props.className : 'nav__item'}>
        <a href="#" className='nav__item-link'>
            {props.icon && <img src={props.icon} className='nav__item-icon' />}
                <span className='nav__item-span'>{typeof props.children === 'object' ? props.children[0] : props.children}</span>
            </a>
            {typeof props.children === 'object' ? props.children[1] : ''}
        </div>
    );
};

export default NavItem;