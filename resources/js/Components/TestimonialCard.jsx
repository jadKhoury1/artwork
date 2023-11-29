const TestimonialCard = ({ name, description, backgroundColor, imageName }) => {
    return (
        <div className="shadow-lg bg-white rounded-t-lg overflow-hidden">
            <div className="h-40 overflow-hidden" style={{backgroundColor}}></div>
            <div className="rounded-full overflow-hidden w-28 -mt-16 mx-auto border-2 border-white bg-white">
                <img
                    className="w-full h-auto rounded-full "
                    src={`/images/${imageName}`}
                />
            </div>
            <div className="p-6 bg-white font-bold">
                <h4 className="mb-4 text-xl">{name}</h4>
                <hr className="border-gray-3" />
                <p className="text-gray-500 mt-8 mb-4 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default TestimonialCard;