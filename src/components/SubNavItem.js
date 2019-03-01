import React from 'react';

const SubNavItem = (props) => {
    return (
        <div className='nav__item'>
            <a href="#" className='nav__item-link'>
                <span className='nav__item-span'>{typeof props.children === 'object' ? props.children[0] : props.children}</span>
            </a>
        </div>
    );
};

export default SubNavItem;