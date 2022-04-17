import React, { useEffect, useState, useRef } from 'react';
import ListCard from './ListCard';
import { useSelector, useDispatch } from 'react-redux';
import { MailList } from '../../redux/Actions/Actions';
import Body from './Body';
import Filter from '../Filters/Filter';
import { favourite, mailRead, mailUnread, filter } from '../../utils/utilities';
import Pagination from '../Pagination/Pagination';
import { usePrevious } from '../../Hooks/usePrevious';

const Mail = () => {

    const { list, total } = useSelector(state => state.list || []);
    const [pageNumber, setPageNumber] = useState(1);
    const [listData, setListData] = useState([]);
    const [bodyData, setBodyData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(total);
    const [pageSize, setPageSize] = useState(10);
    const dispatch = useDispatch();
    const previousValue = usePrevious(list);
    let newList = JSON.stringify(list)
    let read = useRef(false);
    let unRead = useRef(false);
    let fav = useRef(false);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        setPageNumber(pageNumber);
    }

    useEffect(() => {
        if (previousValue || (newList && (JSON.stringify(previousValue) !== newList))) {
            dispatch(MailList(pageNumber))
            setListData(list);
        }
    }, [dispatch, pageNumber, newList]);



    return (
        <div className="container">
            <div className="utility_container">
                <div className="filter_container">
                    <span>Filter By: </span>
                    <Filter name="Read" action={() => filter(read, list, setListData, mailRead)} />
                    <Filter name="Unread" action={() => filter(unRead, list, setListData, mailUnread)} />
                    <Filter name="Favourite" action={() => filter(fav, list, setListData, favourite)} />
                </div>
                <div className="pagination_container">
                    <Pagination currentPage={currentPage}
                        totalCount={totalCount}
                        pageSize={pageSize}
                        onPageChange={page => onPageChange(page)} />
                </div>
            </div>
            <div className="mail_container">
                <div className='list_container'>
                    {(listData) ? listData.map((item, index) => {
                        return <ListCard key={index} {...item} action={() => setBodyData(item)} bodyData={bodyData} />
                    }) : <div className="list_container no_list">Loading...</div>}
                </div>
                {bodyData && <Body bodyData={bodyData} />}
            </div>
        </div>
    );
};

export default Mail;