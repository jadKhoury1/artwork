import { useEffect, useState } from 'react';
import { useForm, usePage } from '@inertiajs/react'
import { make } from 'simple-body-validator';
import { FiTrash2 } from 'react-icons/fi';
import useSearchContext from '@/Hooks/useSearchContext';
import Layout from '@/Layouts/Layout';
import Section from '@/Components/Section';
import InputLabel from '@/Components/InputLabel';
import Input from '@/Components/Input';
import ColorSearch from '@/Components/ColorSearch';
import CollectionCard from './Partials/CollectionCard';
import ImageUpload from './Partials/ImageUpload';
import PrimaryButton from '@/Components/PrimaryButton';
import ItemDetails from '@/Sections/ItemDetails';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import Icon from '@/Components/Icon';

// https://www.simple-body-validator.com/available-validation-rules
const rules = {
    imageId: ['required', 'integer', 'strict'],
    title: ['required', 'string', 'min:3', 'max:100'],
    description: ['required', 'string', 'min:10', 'max:500'],
    color: ['required'],
    price: ['bail', 'required', 'numeric', 'strict', 'min:1', 'max:999999'],
    count: ['bail', 'required', 'integer', 'strict', 'min:1', 'max:999999'],
    collections: ['required', 'array_unique', 'max:2'],
};

const initialData = {
    imageId: '',
    title: '',
    description: '',
    color: 'Any',
    price: '',
    count: '',
    collections: []
};

const validator = make(initialData, rules)
    .setCustomMessages({
        'collections.required': 'The item must at least belong to one collection.',
        'collections.max': 'The item cannot have more than 2 collections.'
    })
    .setCustomAttributes({
        imageId: 'image'
    });

const Create = () => {
    const { data, setData, post, errors: serverErrors, processing } = useForm(initialData);
    const { props: {collections}} = usePage();
    const [imageUrl, setImageUrl] = useState('');
    const [preview, setPreview] = useState(false);
    const [errors, setErrors] = useState(validator.errors());


    useEffect(() => {
        setErrors(validator.setErrors(serverErrors));
    }, [serverErrors]);

    // Update form data
    const handleInputChange = ({ target: { name, value } }) => {
        if (name === 'count' || name === 'price') {
            value  = Number(value);
        }
        setData({
            ...data,
            [name]: value
        });  
    };

    const removeImage = () => {
        setImageUrl('');
        setData({ ...data, imageId: '' });
    };

    const onImageUpload = (id, url) => {
        setImageUrl(url);
        setData({ ...data, imageId: id });
        setErrors(validator.clearErrors('imageId'));
    };

    const submit = () => {
        validator.setData(data).validate();
        setErrors(validator.errors());
        if (validator.errors().keys().length > 0) {
            return;
        }
        post(route('items.store'));
    };

    const addOrRemoveCollection = collectionId => {
        const index = data.collections.indexOf(collectionId);
        const updatedCollections = [ ...data.collections ];
        if (index === -1) {
            updatedCollections.push(collectionId);
        } else {
            updatedCollections.splice(index, 1);
        }
        setData({ ...data, collections: updatedCollections });
    };

    const renderCollections = () => {
        return collections.map(({ id, value }) => (
            <CollectionCard 
                key={id}
                title={value}
                active={data.collections.includes(id)} 
                onClick={() => addOrRemoveCollection(id)} 
            />
        ));
    };

    return (
        <Layout>
            <Section title="Create Item">
                <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen mb-28">
                    <div className="border-black lg:col-span-2 lg:pr-32">
                        {/* IMAGE UPLOAD SECTION */}
                        <div>
                            <div className="mt-10 mb-5 font-bold dark:text-white text-lg flex items-center">
                                UPLOAD IMAGE
                                {/* Remove image when clicked */}
                                { data.imageId ? <span 
                                    onClick={removeImage}
                                    className="ml-5 text-red-600 cursor-pointer"    
                                >
                                    <FiTrash2 />
                                </span> : null }
                            </div>
                            <div>
                                {!imageUrl ? <>
                                    <ImageUpload 
                                        onImageUpload={onImageUpload}
                                        onError={errors => setErrors(validator.setErrors({ imageId: errors }))}
                                    />
                                </> : <>
                                    {/** Show image after successful upload */}
                                    <div className="h-96 overflow-hidden">
                                        <img src={imageUrl} alt="item image" className="h-full object-cover object-center" />
                                    </div> 
                                </>}
                                {errors.has('imageId') ? <div className="mt-4 text-red-500">{errors.first('imageId')}</div> : null }
                            </div>
                        </div>
                        {/* ITEM DETAILS */}
                        <div>
                            <div className="mt-10 mb-5 font-bold dark:text-white text-lg">ITEM DETAILS</div>
                            {/* ITEM TITLE */}
                            <div>
                                <div className="my-4">
                                    <InputLabel>ITEM TITLE</InputLabel>
                                </div>
                                <Input
                                    name="title"
                                    type="text"
                                    placeholder="e. g. Readable Title"
                                    handleChange={handleInputChange}
                                />
                                    {errors.has('title') ? <div className="mt-4 text-red-500">{errors.first('title')}</div> : null}
                            </div>
                            {/* ITEM DESCRIPTION */}
                            <div className="my-2">
                                <div className="my-4">
                                    <InputLabel>DESCRIPTION</InputLabel>
                                </div>
                                <Input
                                    name="description"
                                    type="text"
                                    placeholder="e. g. Description"
                                    handleChange={handleInputChange}
                                />
                                {errors.has('description') ? <div className="mt-4 text-red-500">{errors.first('description')}</div> : null}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5">
                                {/* ITEM COLOR */}
                                <div>
                                    <ColorSearch handleChange={value => setData({...data, color: value})}/>
                                </div>
                                {/* ITEM PRICE */}
                                <div>
                                    <div className="my-4">
                                        <InputLabel>PRICE</InputLabel>
                                    </div>
                                    <Input 
                                        name="price"
                                        type="number"
                                        placeholder="e. g. Price"
                                        handleChange={handleInputChange}
                                    />
                                    {errors.has('price') ? <div className="mt-4 text-red-500">{errors.first('price')}</div> : null}
                                </div>
                                {/* ITEM COOUNT */}
                                <div>
                                    <div className="my-4">
                                        <InputLabel>COUNT</InputLabel>
                                    </div>
                                    <Input
                                        name="count"
                                        type="number"
                                        placeholder="e. g. Count"
                                        handleChange={handleInputChange}
                                    />
                                    {errors.has('count') ? <div className="mt-4 text-red-500">{errors.first('count')}</div> : null}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-10 mb-5 font-bold dark:text-white text-lg">CHOOSE COLLECTIONS</div>
                            <div className="h-28 flex space-x-3 overflow-x-auto no-scrollbar">
                                {renderCollections()}
                            </div>
                            {errors.has('collections') ? <div className="mt-4 text-red-500">{errors.first('collections')}</div> : null}
                        </div>
                        <div className="mt-16">
                            <SecondaryButton className="mr-5 lg:hidden" onClick={() => setPreview(true)}>Preview</SecondaryButton>
                            {processing ? <div className="loader"></div> : <>
                            <PrimaryButton onClick={submit}>Create Item</PrimaryButton>
                            </>}
                        </div>
                    </div>
                    <div className="p-8 hidden lg:block">
                        <div 
                            className="shadow-xl py-4 rounded-xl dark:border dark:border-gray-500"
                        >
                            <div className="font-bold dark:text-white text-xl px-8 py-4">
                                PREVIEW
                            </div>
                            <div className="max-h-[50rem] overflow-y-auto no-scrollbar">
                                <ItemDetails 
                                    item={{
                                        ...data,
                                        image:  { original: imageUrl, name: 'Uploaded Image'},
                                        tags: collections.filter(collection => data.collections.includes(collection.id))
                                    }}
                                    preview={true}
                                />
                            </div>
                        </div>
                    </div>
                    <Modal show={preview} maxWidth="sm" onClose={() => setPreview(false)}>
                        <div className="relative dark:bg-black">
                            <div className="font-bold dark:text-white text-xl px-8 py-4">
                                PREVIEW
                            </div>
                            <button className="absolute top-4 right-8 border border-black p-2 rounded-full dark:border-white dark:fill-white" onClick={() => setPreview(false)}>
                                <Icon name="close" size="14" />
                            </button>
                            <div className="max-h-[30rem] overflow-y-auto no-scrollbar">
                                <ItemDetails 
                                    item={{
                                        ...data,
                                        image:  { original: imageUrl, name: 'Uploaded Image'},
                                        tags: collections.filter(collection => data.collections.includes(collection.id))
                                    }}
                                    preview={true}
                                />
                            </div>
                        </div>
                    </Modal>
                </div>
            </Section>
        </Layout>
    );
};


export default () => {
    const {Provider} = useSearchContext();
    return (
        <Provider>
            <Create />
        </Provider>
    );
};