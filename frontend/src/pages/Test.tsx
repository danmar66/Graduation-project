import React, {useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Test = () => {
    const {fetchTags} = useActions()
    useEffect(() => {
            fetchTags()
        }, []
    )
    const {tags, loading} = useTypedSelector(state => state.tag)

    return (
        <>
            <div style={{fontSize: "150px"}}>
                {
                    loading ? 'load' : 'complete'
                }
            </div>
            { loading ? null : JSON.stringify(tags.docs.map((el: any) => el.title))}
        </>
    );
};

export default Test;