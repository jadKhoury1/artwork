import { useState  } from "react";
import { make, ruleIn } from "simple-body-validator";
import { FiTrash2 } from "react-icons/fi";
import Layout from "@/Layouts/Layout";
import Section from "@/Components/Section";
import InputLabel from "@/Components/InputLabel";
import Input from "@/Components/Input";
import ColorSearch from "@/Components/ColorSearch";
import CollectionCard from "./Partials/CollectionCard";
import ImageUpload from "./Partials/ImageUpload";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

// https://www.simple-body-validator.com/available-validation-rules
const rules = {
    image: ['bail', 'required_without:imageUrl', 'image', 'max_file_size:1'],
    imageUrl: ['required', 'url'],
    title: ['required', 'string', 'min:5', 'max:100'],
    description: ['required', 'string', 'min:10', 'max:250'],
    color: ['required', ruleIn(['any', 'red', 'yellow', 'green', 'blue'])],
    price: ['bail', 'required', 'numeric', 'min:1', 'max:999999'],
    count: ['bail', 'required', 'integer', 'min:1', 'max:999999'],
    category: ['required', ruleIn(['sale', 'artwork', 'digital', 'photography'])]
};

const initialData = {
    image: '',
    imageUrl: '',
    title: '',
    description: '',
    color: 'any',
    price: '',
    count: '',
    category: ''
};

const validator = make(initialData, rules)
    .setCustomMessages({
        'image.required_without': 'The image field is required'
    })
    .setCustomAttributes({
        category: 'collection'
    });

const Create = () => {

    const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState(validator.errors());

    const onImageUpload = image => {
        validator.validate('image', image)
        setErrors(validator.errors());

        if (validator.errors().has('image')) {
            return;
        }

        setData({
            ...data, imageUrl: URL.createObjectURL(image[0])
        });         
    };

    // Update form data
    const handleInputChange = ({ target: { name, value } }) => {
        setData({
            ...data,
            [name]: value
        });  
    };

    const submit = () => {
        validator.setData(data).validate();
        setErrors(validator.errors());
    };

    return (
        <Layout>
            <Section title="Create Item">
                <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen mb-28">
                    <div className="border-black lg:col-span-2 lg:pr-32">
                        {/*IMAGE UPLOAD SECTION*/}
                        <div>
                            <div className="mt-10 mb-5 font-bold dark:text-white text-lg flex items-center">
                                UPLOAD IMAGE
                                { data.imageUrl ? <span 
                                    onClick={() => setData({ ...data, imageUrl: '', image: '' })}
                                    className="ml-5 text-red-600 cursor-pointer"    
                                >
                                    <FiTrash2 />
                                </span> : null }
                            </div>
                            {
                                data.imageUrl ? 
                                <div className="h-96 overflow-hidden">
                                    <img src={data.imageUrl} alt="item image" className="h-full object-cover object-center" />
                                </div> : 
                                <>
                                    <ImageUpload onImageUpload={onImageUpload}/>
                                    {errors.has('image') ? <div className="mt-4 text-red-500">{errors.first('image')}</div> : null }
                                </>
                            }
                        </div>
                        {/*ITEM DETAILS*/}
                        <div>
                            <div className="mt-10 mb-5 font-bold dark:text-white text-lg">ITEM DETAILS</div>
                            {/*ITEM TITLE*/}
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
                            {/*ITEM DESCRIPTION*/}
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
                                {/*ITEM COLOR*/}
                                <div>
                                    <ColorSearch 
                                        handleChange={color => setData({...data, color: color.toLowerCase()})}
                                    />
                                </div>
                                {/*ITEM PRICE*/}
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
                                {/*ITEM COOUNT*/}
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
                            <div className="mt-10 mb-5 font-bold dark:text-white text-lg">CHOOSE COLLECTION</div>
                            <div className="h-28 flex space-x-3 overflow-x-auto no-scrollbar">
                                <CollectionCard title="Sale" active={data.category === 'sale'} onClick={() => setData({ ...data, category: 'sale' })} />
                                <CollectionCard title="Digital" active={data.category === 'digital'} onClick={() => setData({ ...data, category: 'digital' })} />
                                <CollectionCard title="Photography" active={data.category === 'photography'} onClick={() => setData({ ...data, category: 'photography' })}/>
                                <CollectionCard title="Artwork" active={data.category === 'artwork'} onClick={() => setData({ ...data, category: 'artwork' })} />
                            </div>
                            {errors.has('category') ? <div className="mt-4 text-red-500">{errors.first('category')}</div> : null}
                        </div>
                        <div className="mt-16">
                            <PrimaryButton className="dark:hidden" onClick={submit}>Create Item</PrimaryButton>
                            <SecondaryButton className="hidden dark:block" onClick={submit}>Create Item</SecondaryButton>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};

export default Create;