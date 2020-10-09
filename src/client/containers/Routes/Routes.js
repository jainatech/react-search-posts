import React, { Suspense, lazy } from 'react'
import {
    Route,
    Switch
} from 'react-router-dom';

import ENUMS from '../../utils/ENUMS'

const EditPost = lazy(() => import('../Posts/EditPost'));
const Home = lazy(() => import('../Home/Home'));

function AppRoutes() {
    return (
        <div className='main-wrapper d-flex flex-column'>
            <div className='flex-fill'>
                <div className="content-wrapper">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path={ENUMS.ROUTES.HOME} component={Home} />
                            <Route exact path={`${ENUMS.ROUTES.EDIT_POSTS}/:id`} component={EditPost} />
                        </Switch>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}


export default AppRoutes

