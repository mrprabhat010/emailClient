import React from 'react';

const Filter = ({name,action}) => {
    const handleClick = () => { 
        setName(name)
        action();
    }
    return (
        <div className="filter">
            <div className="filter_btn" onClick={handleClick} >
                {name}
                </div>
        </div>
    );
};

export default Filter;