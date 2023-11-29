import { useState } from "react";
import Icon from "@/Components/Icon";
import cn from "classnames";

const ImageUpload = ({ onImageUpload }) => {
    const [dragging, setDragging] = useState(false);

    const handleDrop = e => {
        e.preventDefault();
        setDragging(false);
        const { files } = e.dataTransfer;
        onImageUpload(files);
    };

    return (
        <div
            onDragEnter={() => setDragging(true)}
            onDragOver={() => setDragging(true)}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
        >
            <div className={cn(
                "flex justify-center items-center w-fill h-48 relative rounded-xl bg-slate-50 border-2",
                "dark:bg-slate-800", {"border-gray-500": dragging}, {"border-transparent": !dragging}
            )}>
                <input
                    type="file"
                    className="absolute top-0 bottom-0 right-0 left-0 opacity-0"
                    onChange={e => {
                        e.preventDefault();
                        onImageUpload(e.target.files)
                    }}
                />
                <div className="flex flex-col items-center">
                    <div className="mb-2">
                        <Icon name="upload-file" size="24" className="fill-gray-500 dark:fill-gray-300"/>
                    </div>
                    <div className="font-bold text-gray-500 dark:text-gray-300 text-sm">
                        PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ImageUpload;