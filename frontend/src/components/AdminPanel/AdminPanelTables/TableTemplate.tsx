import React from 'react';
import {Button, Table} from "react-bootstrap";

type Props = {
    data: any, // @todo remove any
    handleEdit: any,
    handleDelete: any
}

const TableTemplate: React.FC<Props> = ({data, handleDelete, handleEdit}) => {
    return (
        <Table variant='dark'>
            <thead>
            <tr>
                {
                    Object.keys(data.docs[0]).map((el, i) => {
                        return <th key={i}>{el}</th>
                    })}
                <th>Control</th>
            </tr>
            </thead>
            <tbody>
            {
                data.docs.map((el: any) => {
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
                                        handleEdit(el._id)
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    style={{width: "100%"}}
                                    variant='outline-danger'
                                    onClick={() => {
                                        handleDelete(el._id)
                                    }}
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

export default TableTemplate;