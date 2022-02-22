import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";

type Props = {
    typeId: string;
    handleFilters: (tag: string) => void;
    tagsList: any[];
    filterTags: any[];
};

const TagList: React.FC<Props> = ({tagsList, typeId, handleFilters, filterTags}) => {
    return (
        <div>
            {tagsList
                .sort((a: any, b: any) => {
                    return a.title > b.title ? 1 : -1;
                })
                .map((tag: any) =>
                    tag.tagTypeId === typeId ? (
                        <Form.Check
                            checked={filterTags.indexOf(tag.slug) !== -1}
                            key={tag._id}
                            name={tag.slug}
                            type="checkbox"
                            id={tag._id}
                            label={tag.title}
                            onChange={() => handleFilters(tag.slug)}
                        />
                    ) : null
                )}
        </div>
    );
};

export default TagList;
