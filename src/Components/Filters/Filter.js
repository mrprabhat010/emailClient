import React , {useState,useRef,createRef} from 'react';

const Filter = ({name,action}) => {
    let [names,setName] = useState(null)
    // let currentName = createRef(name)
    const handleClick = () => { 
        setName(name)
        action();
        console.log(name,names)
    }
    // console.log(currentName.current,name)
    return (
        <div className="filter">
            <div className={names===name? "filter_btn active": 'filter_btn'} onClick={handleClick} >
                {name}
                </div>
        </div>
    );
};

export default Filter;