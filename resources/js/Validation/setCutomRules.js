import { register, setTranslationObject } from 'simple-body-validator';
import Messages from './Messages';


// https://www.simple-body-validator.com/custom-validation-rules
export default () => {
    setTranslationObject(Messages);

    // Register a rule that checks if the value is an image
    register('image', value => {
        if (!value instanceof File) {
            return false;
        }
        return value[0].type.match(/^image\/(jpg|jpeg|png|webp)$/)
    });

    // Register a rule that validates the max size of a file in MB
    register('max_file_size', (value, [ maxSize ]) => {
        if (!value instanceof File) {
            return false;
        }
        return value[0].size / 1048576  <= maxSize;
    }, (message, [ maxSize ]) => message.replace(':size', maxSize));
};