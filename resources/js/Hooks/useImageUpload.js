import { useState  } from 'react';
import { make } from 'simple-body-validator';
import { uploadImage } from '../Services';

/**
 * @typedef {import('simple-body-validator').Validator} Validator
 * @typedef {import('simple-body-validator').ErrorBag} Error
 */

/**
 * @typedef {Object} ImageUploadHook
 * @property {function():void} remove
 * @property {function(Event, File):void} handleUpload
 * @property {{ id: (number|string), url: string }} image
 * @property {boolean} processing
 * @property {Error} errors
 */


/**
 * @param {callback} onImageUpload
 * @param {callback} onError
 * @returns {ImageUploadHook}
 */
const useImageUpload = (onImageUpload, onError) => {
    // Image validation rules based on simple-body-validator validation rules and custom rules
    // https://www.simple-body-validator.com/available-validation-rules
    const validator = make()
        .setRules({
            image: ['bail', 'required_without:image.id', 'image', 'max_file_size:10'],
        })
        .setCustomMessages({
            'image.required_without': 'The image field is required'
        });
    
    const [processing, setProcessing] = useState(false);

    /**
     * Run validations on the image and then uploaded it to the server
     * @param {Event} e
     * @param {Array<File>} files 
     * @return {void}
     */
    const handleUpload = (e, files) => {
        e.preventDefault();
        // Run validation on the uploaded file
        if (!validator.validate('image', files)) {
            onError(validator.errors().get('image'));
            return;
        }

        uploadImageToServer(files[0]);
    };


    /**
     * @param {File} uploadedImage 
     * @return {void}
     */
    const uploadImageToServer = async (uploadedImage) => {
        setProcessing(true);
        uploadImage(uploadedImage)
            .then(({ data }) => {
                const { id, original } = data.response;
                onImageUpload(id, original);
            })
            .catch(e => {
                // Set errors returned from server if any
                onError(e.response.data.errors);
            })
            .finally(() => setProcessing(false));
    };


    return {
        handleUpload, processing
    }
};

export default useImageUpload;