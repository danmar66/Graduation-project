import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

type Props = {
    typeId: string;
    handleFilters: any;
    tagsList: any;
};

const TagList: React.FC<Props> = ({tagsList, typeId, handleFilters}) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleToggleCheckbox = (tag: string) => {
        const currentIndex = selectedTags.indexOf(tag);
        const newSelected = [...selectedTags];

        currentIndex === -1 ? newSelected.push(tag) : newSelected.splice(currentIndex, 1);

        setSelectedTags(newSelected);
        handleFilters(newSelected)
    };

    return (
        <div>
            {tagsList
                .sort((a: any, b: any) => {
                    return a.title > b.title ? 1 : -1;
                })
                .map((tag: any) =>
                    tag.tagTypeId === typeId ? (
                        <Form.Check
                            checked={selectedTags.indexOf(tag.slug) !== -1}
                            key={tag._id}
                            name={tag.slug}
                            type="checkbox"
                            id={tag._id}
                            label={tag.title}
                            onChange={() => handleToggleCheckbox(tag.slug)}
                        />
                    ) : null
                )}
        </div>
    );
};

export default TagList;
