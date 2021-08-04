import React from 'react';

import Aux from '../hoc/Aux';
import Navigation from './navigation';
import Footer from './footer';

const Layout = (props) => {
    return (
        <Aux>
            <Navigation />
            <main>
                {props.children}
            </main>
            <Footer />
        </Aux>
    )
}

export default Layout;