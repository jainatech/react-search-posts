import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import { Container, Col, Row } from 'react-bootstrap';
import { getPost, editPost } from "../../store/actions/posts";
import ENUMS from '../../utils/ENUMS';
import PostForm from '../../components/PostForm';
import Header from '../../components/Header';

const EditPost = (props) => {
    const id = props && props.match && props.match.params && props.match.params.id;
    const { posts, editPost, getPost, history } = props;
    const getPostData = (editItemId) => {
        if (posts.length === 0) {
            getPost();
        }
        const editItem = posts.filter(item => Number(item.id) === Number(editItemId));
        if (editItem.length > 0) {
            return editItem[0];
        }
        return {};
    }

    const doEdit = (updatedData) => {
        editPost(updatedData);
        history.push({
            pathname: ENUMS.ROUTES.HOME
        });
    }

    let editItem = getPostData(id);

    return (
        <>
        <Header text="Edit post details"  />

        <Container className="p-4">
            {/* <Row>
                <Col>
                    <h5 className="text-center">
                        Edit post details:
            </h5>
                </Col>
            </Row> */}
            <Row>
                <Col>
                    <PostForm editItem={editItem} editPost={doEdit}></PostForm>
                </Col>
            </Row>
        </Container>
        </>
        
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getPost: getPost,
    editPost: editPost
}, dispatch);

const mapStateToProps = (state) => ({
    posts: state.postsReducer.posts_data,
});

EditPost.propTypes = {
    editPost: PropTypes.func,
    getPost: PropTypes.func,
    posts: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
