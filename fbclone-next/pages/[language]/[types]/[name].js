import React from 'react';

import PropTypes from 'prop-types';

ClinicProfile.propTypes = {
    
};

function ClinicProfile(props) {
    return (
        <div>
            ClinicProfile
        </div>
    );
}

export default ClinicProfile;

export async function getServerSideProps({ params }) {
    console.log("🚀 ~ file: about123.js ~ line 18 ~ getStaticProps ~ params", params)
    return {
      props: {}, // will be passed to the page component as props
    };
  }
  