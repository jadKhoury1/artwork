import { useState } from 'react';
import cn from 'classnames';
import useImageUpload from '../../../Hooks/useImageUpload';
import Icon from '@/Components/Icon';

const ImageUpload = ({ onImageUpload, onError }) => {

    const [dragging, setDragging] = useState(false);
    const { handleUpload, processing } = useImageUpload(onImageUpload, onError);

    return (
        <div
            onDragEnter={() => setDragging(true)}
            onDragOver={() => setDragging(true)}
            onDragLeave={() => setDragging(false)}
            onDrop={e => {
                setDragging(false)
                handleUpload(e, e.dataTransfer.files)
            }}
        >
            <div className={cn(
                "flex justify-center items-center w-fill h-48 relative rounded-xl bg-slate-50 border-2",
                "dark:bg-slate-800", {"border-gray-500": dragging}, {"border-transparent": !dragging}
            )}>
                <input
                    type="file"
                    className="absolute top-0 bottom-0 right-0 left-0 opacity-0"
                    onChange={e => handleUpload(e, e.target.files)}
                />
                {processing ? <div className="loader"></div> :
                <div className="flex flex-col items-center">
                    <div className="mb-2">
                        <Icon name="upload-file" size="24" className="fill-gray-500 dark:fill-gray-300"/>
                    </div>
                    <div className="font-bold text-gray-500 dark:text-gray-300 text-sm">
                        JPG, JPEG, or PNG. Max 5MB.
                    </div>
                </div>}
            </div>
        </div> 
    )
};

export default ImageUpload;