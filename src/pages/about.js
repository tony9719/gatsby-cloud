import * as React from 'react'
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>I'm Tony, that's enough for now</p>
        </Layout>
    )
};

export const Head = () => <title>About Me</title>

export default AboutPage;