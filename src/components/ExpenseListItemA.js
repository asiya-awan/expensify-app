import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItemA = 
    ({dispatch, id, description, note, amount, createdAt}) => (
 
            <tr>
                <td>{id}</td>
                <td>{description}</td>
                <td>{note}</td>
                <td>{ numeral(amount/100).format('$0,0.00')}</td>
                <td>{moment(createdAt).format('MMM Do, YYYY')}</td>
                <td>
                    <NavLink 
                        to = {`/edit/${id}`} 
                        activeClassName="is-active">Edit
                    </NavLink>
                {/* user # to not reload page */}
                    <a href = '#' onClick = {() => (              
                    dispatch(startRemoveExpense({ id }))
                    )}> | Remove</a>
                </td>
            </tr>
            
    
     
);
export default connect()(ExpenseListItemA); //dispatch


// const ExpenseListItem = ({ id, description, amount, createdAt }) => (
//   <div>
//     <Link to={`/edit/${id}`}>
//       <h3>{description}</h3>
//     </Link>
//     <p>{amount} - {createdAt}</p>
//   </div>
// );

// export default ExpenseListItem;
