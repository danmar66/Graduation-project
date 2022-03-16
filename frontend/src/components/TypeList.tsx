    import React, {useEffect, useState} from "react";
import {Accordion} from "react-bootstrap";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import TagList from "./TagList";

const TypeList: React.FC = () => {
    const {types, error, loading} = useTypedSelector((state) => state.type);
    const {tags} = useTypedSelector((state) => state.tag);

    const [filterTags, setFilterTags] = useState<string[]>([])

    const {fetchTags} = useActions();
    useEffect(() => {
        fetchTags();
    }, []);

    const {fetchTypes} = useActions();
    useEffect(() => {
        fetchTypes();
    }, []);

    const handleFilters = ((filters: string) => {
        const currentIndex = filterTags.indexOf(filters)
        const newSelected = [...filterTags];
        currentIndex === -1 ? newSelected.push(filters) : newSelected.splice(currentIndex, 1)
        setFilterTags(newSelected)
    })

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }
    return (
        <div>
            <Accordion alwaysOpen={true}>
                {types.docs.map((type: any) => (
                    <Accordion.Item eventKey={type._id} key={type._id}>
                        <Accordion.Header>
                            {type.title.charAt(0).toUpperCase() + type.title.slice(1)}
                        </Accordion.Header>
                        <Accordion.Body>
                            <TagList
                                handleFilters={(filters: string) => handleFilters(filters)}
                                typeId={type._id}
                                tagsList={tags.docs}
                                filterTags={filterTags}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
};

export default TypeList;
