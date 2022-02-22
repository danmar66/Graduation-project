import React, {useEffect} from 'react';
import {Button, Spinner, Table} from 'react-bootstrap'
import {useActions} from "../../hooks/useActions";
import {fetchTags} from "../../store/action-creators/tag";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const TagsList = () => {
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

    return (
        <Table variant='dark'>
            <thead>
            <tr>
                {/*{loading ? null :*/}
                {
                    Object.keys(tags.docs[0]).map((el, i) => {
                        return <th key={i}>{el}</th>
                    })}
                <th>Control</th>
            </tr>
            </thead>
            <tbody>
            {/*{loading ? null :*/}
            {
                tags.docs.map((el: any) => {
                    return (
                        <tr key={el._id}>
                            {Object
                                .values(el)
                                .map((el: any, i: number) => {
                                    return (
                                        <td key={i}>
                                            {el}
                                        </td>
                                    )
                                })
                            }
                            <td>
                                <Button
                                    style={{width: "100%", marginBottom: "0.5rem"}}
                                    variant="outline-primary"
                                    onClick={() => {
                                        console.log(el._id)
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    style={{width: "100%"}}
                                    variant='outline-danger'
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
};

export default TagsList;