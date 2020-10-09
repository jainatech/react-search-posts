import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import List from '../../components/List';
import { getPost } from '../../store/actions/posts';
import Header from '../../components/Header';


const Home = ({ posts, loading, getPost }) => {

    const [postsData, setPostsData] = useState(undefined);
    const [active, setActive] = useState(1);
    const limit = 10;

    useEffect(() => {
        console.log("POST",posts)
        if (posts && posts.length === 0) {
            getPost();
        }
    });


    const filterData = (searchValue) => {
        let result = [];
        if (searchValue) {
            setActive(1);
            result = posts.filter(post =>
                post.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
            )
            setPostsData(result);
        } else {
            result = posts;
            setPostsData(result);
        }
        return result;
    };

    const getRenderList = () => {
        if (loading) {
            return <h4 className="text-center">Loading...</h4>;
        } else {
            let render = []
            if (postsData) {
                render = postsData;
            } else {
                render = posts;
            }
            const indexOfLast = active * limit;
            const indexOfFirst = indexOfLast - limit;
            console.log(render);
            render = render && render.length > 0 ? render.slice(indexOfFirst, indexOfLast) : [];
            return <List data={render} type="home_posts_list" />
        }

    }


    return (

        <>
            <Header text="Posts Search App" filterData={filterData} search />
            <Container fluid="lg">
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col>
                                    {getRenderList()}
                                </Col>
                            </Row>
                            <Row>
                                <Pagination>{Array(Math.ceil(postsData ? (postsData.length / limit) : (posts.length / limit))).fill().map((x, i) => i + 1).map(item => {
                                    return <Pagination.Item key={item} active={item === active} onClick={() => setActive(item)} >
                                        {item}
                                    </Pagination.Item>
                                })}</Pagination>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

Home.propTypes = {
    posts: PropTypes.array,
    loading: PropTypes.bool,
    getPost: PropTypes.func
}

const mapStateToProps = (state) => ({
    posts: state.postsReducer.posts_data,
    loading: state.postsReducer.loading
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getPost: getPost
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)


