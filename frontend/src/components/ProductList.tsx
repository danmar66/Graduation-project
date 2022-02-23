import React, {useEffect, useState} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Row} from "react-bootstrap";
import {useActions} from "../hooks/useActions";
import {useDispatch} from "react-redux";
import {addToBasket} from "../store/action-creators/basket";
import {addTagToFilter} from "../store/action-creators/filter";
import ProductItem from "./ProductItem";
import MySelect from "./UI/MySelect";
import {FilterActionTypes} from "../types/filter";

const ProductList: React.FC = () => {
    const {products, error, loading, page, limit} = useTypedSelector((state) => state.product);
    const {fetchProducts, addTagToFilter} = useActions();
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProducts(page, limit);
    }, []);

    const [selectedSort, setSelectedSort] = useState('')

    const sortPosts = (sort: any) => {
        setSelectedSort(sort)
        // console.log(sort)
    }

    let basketItems = JSON.parse(localStorage.getItem('product')!) || '{}';
    let counter = 0;

    const addProductToBasket = (product: any) => {
        basketItems = [
            ...basketItems,
            {
                ...product,
                counter
            }
        ]
        console.log(basketItems);

        localStorage.setItem('product', JSON.stringify(basketItems))
        dispatch(addToBasket(product))
    }


    // const blabla = addTagToFilter('ebalala')

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <Row className="d-flex">
            <div className='d-flex justify-content-between mb-2'>
                {/*<button onClick={() => blabla}/>*/}
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue='Sort By'
                    options={[
                        {value: 'title', name: 'By title'},
                        {value: 'body', name: 'By price'}
                    ]}
                />

                {/*<MyDropdown*/}
                {/*    defaultValue="Sort B y"*/}
                {/*    options={[*/}
                {/*        {value: 'title', name: 'By title'},*/}
                {/*        {value: 'body', name: 'By price'}*/}
                {/*    ]}*/}
                {/*/>*/}

                {/*<Dropdown className='d-flex'>*/}
                {/*    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">*/}
                {/*        Sort By*/}
                {/*    </Dropdown.Toggle>*/}

                {/*    <Dropdown.Menu>*/}
                {/*        <Dropdown.Item href="#/action-1">Price: Low to High</Dropdown.Item>*/}
                {/*        <Dropdown.Item href="#/action-2">Price: High to Low</Dropdown.Item>*/}
                {/*    </Dropdown.Menu>*/}
                {/*</Dropdown>*/}

            </div>

            {products?.docs.map((product: {}, i: number) =>
                <ProductItem key={i} product={product} addProductToBasket={addProductToBasket}/>
            )}
        </Row>)
};

export default ProductList;
