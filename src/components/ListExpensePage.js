import React from 'react';
const ListExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <p> Edit the expense with an id of - {props.match.params.id}</p>
        </div>
    );
};
    


export default EditExpensePage;

