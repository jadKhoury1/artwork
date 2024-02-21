import cn from 'classnames';
import Icon from './Icon';

const getItems = (currentPage, lastPage) => {
    let items = [];

    // If the total number of pages is less than or equal to the max number of allowed items - show all items
    if (lastPage <= 7) {
        for (let i = 1; i <= lastPage; i++) {
            items.push(i);
        }
        return items;
    }
   
    // If the first, second or last items are selected - show first 3 items and last 3 items
    if ([1, 2, lastPage].includes(currentPage)) {
        items = [1, 2, 3, -1];

        for (let i = lastPage - 2; i <= lastPage; i++) {
            items.push(i)
        }

        return items;
    }

    if (currentPage < 5) {
        // Show all the items that are less than the current page alongside the current page and the page that comes just after it
        for (let i = 1; i <= currentPage + 1; i++) {
            items.push(i);
        }

        // Show a seperator
        items.push(-1);

        // Show what is the left from the end of the list 
        const itemsLeft = 4 - currentPage;
        for (let x = lastPage - itemsLeft; x <= lastPage; x++) {
            items.push(x);
        }

        return items;
    }

    if ((lastPage - currentPage) <= 3) {
        items = [1, -1];

        // Show last 5 items
        for (let i = lastPage - 4; i <= lastPage; i++) {
            items.push(i);
        }

        return items;
    }


    return [1, -1, currentPage - 1, currentPage, currentPage + 1, -2, lastPage];
};

const renderButtons = (currentPage, lastPage, onChange) => {
    return getItems(currentPage, lastPage).map(item => {
        if (currentPage === item) {
            return (
                 <div className="px-4 py-2 bg-gray-800 rounded-md font-bold text-white" key={item}>
                     {item}
                 </div>  
            );
        }

        if (item < 0) {
            return (
                <div className="text-gray-900 dark:text-white font-bold" key={item}>
                    ...
                 </div>
            );
        }

        return (
            <div 
                className="text-gray-900 dark:text-white font-bold hover:cursor-pointer"
                onClick={() => onChange(item)}
                key={item}
            >
                {item}
            </div>
        );
    });
};

const renderNextButton = (currentPage, lastPage, onChange) => {
    return (
        <div 
            className={cn(
                "basis-1/3 flex justify-end items-center font-bold",
                {"hover:cursor-pointer text-gray-900 fill-gray-900 dark:text-white dark:fill-white": currentPage !== lastPage},
                {"text-gray-400 fill-gray-400": currentPage === lastPage}
            )}
            onClick={() => {
                if (currentPage !== lastPage) onChange(currentPage + 1) 
            }}
        >
            <div className="hidden lg:block">
                Next
            </div>
            <Icon name="arrow-next" size="14" className="ml-4" />
        </div>
    );
};

const renderPreviousButton = (currentPage, onChange) => {
    return (
        <div 
            className={cn(
                "basis-1/3 items-center flex font-bold", 
                {"hover:cursor-pointer text-gray-900 fill-gray-900 dark:text-white dark:fill-white": currentPage !== 1},
                {"text-gray-400 fill-gray-400": currentPage === 1}
            )}
            onClick={() => {
                if (currentPage !== 1) onChange(currentPage - 1);
            }}
        >
            <Icon name="arrow-prev" size="14" className="mr-4" />
            <div className="hidden lg:block">
                Previous
            </div>
        </div>
    );
};


const Paginator = ({ currentPage, lastPage, onChange }) => {
    return (
        <div className="flex flex-row">
            {renderPreviousButton(currentPage, onChange)}
            <div className="basis-1/3 flex justify-around items-center">
               {renderButtons(currentPage, lastPage, onChange)}
            </div>
            {renderNextButton(currentPage, lastPage, onChange)}
        </div>
    );
};



export default Paginator;