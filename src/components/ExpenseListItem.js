import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';



export const ExpenseListItem = 
    ({dispatch, id, description, note, amount, createdAt}) => (
    <tr>
        <td>{id}</td>
        <td>{description}</td>
        <td>{note}</td>
        <td>{amount}</td>
        <td>{createdAt}</td>
        <td>
            <NavLink 
                to = {`/edit/${id}`} 
                activeClassName="is-active">Edit
            </NavLink>
        {/* user # to not reload page */}
            <a href = '#' onClick = {() => (              
              dispatch(removeExpense({ id }))
            )}> | Remove</a>
        </td>
    </tr>
)
export default connect()(ExpenseListItem); //dispatch


// const ExpenseListItem = ({ id, description, amount, createdAt }) => (
//   <div>
//     <Link to={`/edit/${id}`}>
//       <h3>{description}</h3>
//     </Link>
//     <p>{amount} - {createdAt}</p>
//   </div>
// );

// export default ExpenseListItem;
