import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { MailBody } from '../../redux/Actions/Actions';
import { useSelector, useDispatch } from 'react-redux';
import { dateFormatter, getFirstLetter, markRead, isFavourite, markFavourite, markNotFavourite } from '../../utils/utilities';


const Body = ({ bodyData }) => {
    const { id, from, subject, date } = bodyData || {};
    const dispatch = useDispatch();
    const { body } = useSelector(state => state.body || {});
    const elRef = useRef();



    useLayoutEffect(() => {
        if (elRef.current) {
            elRef.current.firstElementChild.style.color = '#636363';
        }
    });
    const handleClick = () => {
        if (isFavourite(id)) {
            markNotFavourite(id);
        }
        else {
            markFavourite(id);
        }
    }
    useEffect(() => {
        if (id) {
            dispatch(MailBody(id))
            markRead(id);
        }

    }, [dispatch, id, body]);
    return (
        <div>
            {body && <div className="body_container">
                <div className="body_container_left">
                    <h3>{getFirstLetter(from.name)}</h3>
                </div>
                <div className="body_container_right">
                    <div className="body_container_right_top">
                        <div className="body_container_right_top_right">
                            <span className='body_header'>{subject}</span>
                            <span className='body_text'>{dateFormatter(date)}</span>
                        </div>
                        <div className="body_container_right_top_left" onClick={() => handleClick(id)}>
                            <img src={require('../../assets/star.svg').default}
                                alt='fav button'
                                width='24' height='24'
                                className={isFavourite(id) ? 'star active' : 'star'} />
                        </div>
                    </div>
                    <div ref={elRef} className="body_container_right_bottom" dangerouslySetInnerHTML={{ __html: body }} />

                </div>


            </div>}
        </div>
    );
};

export default Body;