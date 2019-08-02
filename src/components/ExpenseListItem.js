import React from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = 
    ({dispatch, id, description, note, amount, createdAt}) => (
       
    <Link className="list-item" to = {`/edit/${id}`} >
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__subtitle" > {moment(createdAt).format('MMM Do, YYYY')}</span>
        </div>
        <h3> { numeral(amount/100).format('$0,0.00')}  </h3>
     
    </Link>    
);
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
