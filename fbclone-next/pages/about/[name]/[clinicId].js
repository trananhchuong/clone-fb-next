import React from 'react';
import PropTypes from 'prop-types';

About.propTypes = {
    
};

function About(props) {
    return (
        <div>
            About
        </div>
    );
}

export default About;

export async function getServerSideProps({ params }) {
    console.log("🚀 ~ file: about123.js ~ line 18 ~ getStaticProps ~ params", params)
    return {
      props: {}, // will be passed to the page component as props
    };
  }
  