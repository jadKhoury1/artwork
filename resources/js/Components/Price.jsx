import cn from 'classnames';

const Price = ({ price, currency, className }) => {
    return (
        <div className={cn(className, "text-emerald-600 border border-emerald-500 p-1")}>
            {currency} {price}
        </div>
    );
};

export default Price;