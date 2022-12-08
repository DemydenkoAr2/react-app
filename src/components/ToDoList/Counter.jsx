import React, {useState} from "react";

// useState - это массив состоящий из двух элементов, в первом храниться текущие состояние, а второй элемент функция которая обновляет данное состояние. 

const Counter = () => {

    const [count , setCount] = useState(0);
    // console.log(count); [undef, f()]

    const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);

    const formatCount = () => {
        return count === 0 ? "empty" : count
    };

    const getBageClasses = () => {
        let classes = 'badge m-2 ';
        return classes += count === 0 ? 'bg-warning' : 'bg-primary';
    };

    const handleIncrement = () => {
        setCount((prevState) => prevState + 1);
    };

    const handleDecrement = () => {
        setCount((prevState) => prevState - 1);
    };

    const handelTagChange = (id) => {
        setTags((prevState) => prevState.filter((tag) => tag !== id ));  
    };
     
    const renderTags = () => {
        if(tags.length === 0) {
            return 'No Tags'
        } else {
            return (
                tags.map((tag) => (<li key={tag} className='btn btn-primary btn-sm m-2' onClick={() => handelTagChange(tag)}>{tag}</li>))
            );
        };
    };

    return (
        <>
            <ul>
                {renderTags()}
            </ul>
            <span className={getBageClasses()}>{formatCount()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>-</button>
        </>
    );
};

export default Counter