import React, {useEffect} from 'react';
import {Spinner, Table} from 'react-bootstrap'
import {useActions} from "../../hooks/useActions";
import {fetchTags} from "../../store/action-creators/tag";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const AdminsList = () => {
    const {tags, loading, error} = useTypedSelector(state => state.tag)

    const {fetchTags} = useActions()

    useEffect(() => {
        fetchTags();
    }, []);

    if (loading) {
        return <Spinner animation="border"/>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    console.log(loading)




    console.log(tags)

    return (
        <Table variant='dark'>
            <thead>

            <tr>
                {/*{arr.map((el) => {*/}
                {/*    return <th>{el}</th>*/}
                {/*})}*/}

                {/*{Object.keys(tags[0]).map(el => {*/}
                {/*    return <th>{el}</th>*/}
                {/*})}*/}

                <th>Control</th>
            </tr>

            </thead>
        </Table>
    );
};

export default AdminsList;