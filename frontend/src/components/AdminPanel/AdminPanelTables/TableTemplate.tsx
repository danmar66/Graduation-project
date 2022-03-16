import React from 'react';
import {Button, Table, Pagination, Col} from "react-bootstrap";

type Props = {
    data: any, // @todo remove any
    handleEdit: (_id: string) => void,
    handleDelete: (_id: string) => void,
    handlePage: (pageNumber: number) => void,
    activePage: number,
    totalPages: number
}

const TableTemplate: React.FC<Props> = (
    {
        data,
        handleDelete,
        handleEdit,
        handlePage,
        activePage,
        totalPages
    }) => {
    let pages = [];
    activePage = activePage || 2;
    totalPages = totalPages || 8;
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        pages.push(
            <Pagination.Item
                key={pageNumber}
                active={pageNumber === activePage}
                onClick={() => {
                    handlePage(pageNumber)
                }}
            >
                {pageNumber}
            </Pagination.Item>
        )
    }

    return (
        <>
            <Table variant='dark' responsive>
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
            <Col className="d-flex align-items-center justify-content-center mt-3">
                <Pagination>
                    {pages}
                </Pagination>
            </Col>
        </>
    );
};

export default TableTemplate;