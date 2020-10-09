import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Form, FormControl } from 'react-bootstrap';

function Header(props) {
    const searchRef = React.createRef();

    const doSearch = () => {
        if (searchRef && searchRef.current && searchRef.current.value) {
            props.filterData(searchRef.current.value);
        }
    }

    return (
        <>
            <Navbar expand="lg" variant="light" bg="light" className="bg-light justify-content-between">
                <Navbar.Brand>{props.text}</Navbar.Brand>
                {props.search ?
                    <Form inline>
                        <FormControl ref={searchRef} type="text" placeholder="Search by title" className=" mr-sm-2" onChange={doSearch} />
                    </Form> : null}

            </Navbar>
        </>
    )
}

Header.propTypes = {
    text: PropTypes.string,
    filterData: PropTypes.func
}

export default Header

