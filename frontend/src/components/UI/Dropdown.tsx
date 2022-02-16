import React from 'react';
import {Dropdown} from "react-bootstrap";

const MyDropdown = ({options}: any, {defaultValue}: any) => {
    return (
        <Dropdown>
            {defaultValue}
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                {defaultValue}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {options.map((option: any) =>
                    <Dropdown.Item value={option.value}>
                        {option.name}
                    </Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default MyDropdown;