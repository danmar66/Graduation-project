import React from 'react';

interface Props {
    options: any,
    defaultValue: any,
    value: any,
    onChange: any
}

const MySelect: React.FC<Props> = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map((option: any) =>
                <option value={option.value} key={option.name}>{option.name}</option>
            )}
        </select>
    );
};

export default MySelect;