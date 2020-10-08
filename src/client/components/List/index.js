import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap';
import ListItem from "../ListItem";

const List = ({ data, type }) => {
    switch (type) {
        case "home_posts_list":
            return (
                <Table>
                    <tbody>
                        {data && data.length ?
                            data.map((post, index) => {
                                return <ListItem key={`post-${post.id}`} item={post} index={index} type="home_posts_list" />;
                            }) : ''
                        }
                    </tbody>
                </Table>
            );
        default:
            return (<p>List</p>)
    }

}

List.propTypes = {
    data: PropTypes.array.isRequired,
    type: PropTypes.string
}

export default List

