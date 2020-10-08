import React from 'react'
import PropTypes from 'prop-types'
import ENUMS from "../../utils/ENUMS";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function ListItem({ item, index, type }) {
    switch (type) {
        case "home_posts_list":
            return (
                <tr>
                    <td>
                        <span>{item.id}.</span> <span></span>{item.title}
                    </td>
                    <td>
                        <Link to={`${ENUMS.ROUTES.EDIT_POSTS}/${item.id}`}>
                            <Button className="ml-2">Edit</Button>
                        </Link> 
                    </td>
                </tr>
            )
        default:
            return <p>List item</p>
    }


}

ListItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    type: PropTypes.string
}

export default ListItem

