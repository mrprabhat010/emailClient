import React from 'react';
import { usePagination, DOTS } from '../../Hooks/usePagination';

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className= 'pagination_container'
        >
            <li
                className={currentPage === 1 ? 'pagination_item disabled' : 'pagination_item'}
                onClick={onPrevious}
            >
                <div className="arrow left" />
            </li>
            {paginationRange.map((pageNumber,index) => {

                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                return (
                    <li
                        className={currentPage === pageNumber ? 'pagination_item selected' : 'pagination_item'}
                        onClick={() => onPageChange(pageNumber)} key ={pageNumber}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={currentPage === lastPage ? 'pagination_item disabled' : 'pagination_item'}
                onClick={onNext}
            >
                <div className="arrow right" />
            </li>
        </ul>
    );
};

export default Pagination;