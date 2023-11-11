import { Head } from '@inertiajs/react';

const PageMeta = ({ title, description}) => {
    return (
        <Head title={title}>
            <meta name="description" content={description} />
        </Head>
    );
};

export default PageMeta;
