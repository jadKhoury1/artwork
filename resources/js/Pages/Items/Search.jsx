import { useContext, useEffect } from 'react';
import { usePage, router } from '@inertiajs/react';
import isEqual from 'lodash.isequal';
import { SearchContext } from '@/Context/StateContext';
import useSearchContext from '@/Hooks/useSearchContext';
import Layout from '@/Layouts/Layout';
import Card from '@/Components/Card';
import Filters from '@/Components/Filters';
import Tabs from '@/Components/Tabs';
import Section from '@/Components/Section';
import PrimaryButton from '@/Components/PrimaryButton';
import Paginator from '@/Components/Paginator';

const Search = ({ items }) => {
    const {props: { collections  }} = usePage();
    const {filters, setFilter, initialFilters, updatedFilter} = useContext(SearchContext);

    const redirect = () => router.visit(route('items.search', filters));

    const search = () => {
        // Do not trigger the search request if filters did not change
        if (isEqual(initialFilters, filters)) {
            return;
        }
        redirect();
    };

    useEffect(() => {
        if (updatedFilter === 'color' || updatedFilter === 'collection' || updatedFilter === 'page') {
            redirect();
        }
    }, [filters])

    return (
        <Layout>
            <Section>
                <div className="min-h-screen mb-10">
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-20">
                            <div>
                                <div className="lg:sticky lg:top-24">
                                    <div className="text-2xl mb-4 pb-3 dark:text-white border-b border-b-gray-400">
                                        Search
                                    </div>
                                    <Filters />
                                    <div className="mt-10">
                                        <PrimaryButton className="w-full" onClick={search}>
                                            Search
                                        </PrimaryButton>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-2">
                                <div className="my-5 lg:my-0">
                                    <Tabs 
                                        onChange={value => setFilter('collection', value)}
                                        list={['All', ...collections.map(collection => collection.value)]} 
                                        selected={filters.collection || 'All'}
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    { items.data.map((item, index) => <Card card={item} key={index}/>) }
                                </div>
                                <div className="mt-10 ">
                                    {   items.meta.last_page !== 1 ? 
                                        <Paginator 
                                            currentPage={items.meta.current_page}
                                            lastPage={items.meta.last_page}
                                            onChange={page => setFilter('page', page)}
                                        /> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};

export default ({ items, filters: initialFilters = {}}) => {
    const {Provider} = useSearchContext();

    return (
        <Provider initialFilters={initialFilters}>
            <Search items={items}/>
        </Provider>
    )
};