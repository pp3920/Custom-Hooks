import { useState } from "react";

type UsePaginationProp = {

    totalItems: number;
    itemsPerPage: number;
    initialPage: number;
}



function UsePagination({ totalItems, itemsPerPage = 10, initialPage = 1 }: UsePaginationProp) {

    const [currentPage, setCurrentPage] = useState(initialPage);

    // How many total Pages will be there
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Data to decide list index [0-5]
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsOnCurrentPage = totalItems === 0 ? 0 : endIndex - startIndex + 1;


    // function to go to next Page or Previous Page
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
        }
    

       return {
            currentPage,
            totalPages,
            startIndex,
            endIndex,
            itemsOnCurrentPage,
            nextPage,
            prevPage,
            canNextPage: currentPage < totalPages,
            canPrevPage: currentPage > 1,
        };
}

export default UsePagination;