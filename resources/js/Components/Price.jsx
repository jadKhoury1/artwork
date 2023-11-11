const Price = ({ price, currency }) => {
    return (
        <div className="text-emerald-600 border border-emerald-500 p-1">
            {currency} {price}
        </div>
    );
};

export default Price;