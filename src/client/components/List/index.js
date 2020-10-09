import React from 'react'
import PropTypes from 'prop-types'
import ListItem from "../ListItem";
import {  Row } from 'react-bootstrap';

const List = ({ data, type }) => {
    switch (type) {
        case "home_posts_list":
            return (
                <>
                    <div>
                        <Row>

                            {data && data.length ?
                                data.map((post, index) => {
                                    return <ListItem key={`post-${post.id}`} item={post} index={index} type="home_posts_list" />;
                                }) : null
                            }
                        </Row>
                    </div>
                </>
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

