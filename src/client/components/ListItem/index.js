import React from 'react'
import PropTypes from 'prop-types'
import ENUMS from "../../utils/ENUMS";
import { Link } from 'react-router-dom';
import "./index.css";
import { Button, Col, Card } from 'react-bootstrap';

function ListItem({ item, index, type }) {
    switch (type) {
        case "home_posts_list":
            return (
                <>
                    <Col sm={6}>
                        <Card style={{ margin: '10px' }}>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.body}
                                </Card.Text>
                                <Link to={`${ENUMS.ROUTES.EDIT_POSTS}/${item.id}`}>
                                    <Card.Text>Edit</Card.Text>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </>
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

