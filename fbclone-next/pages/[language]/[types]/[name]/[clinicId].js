import React from 'react';
import PropTypes from 'prop-types';

DoctorProfile.propTypes = {
    
};

function DoctorProfile(props) {
    return (
        <div>
            DoctorProfile
        </div>
    );
}

export default DoctorProfile;

export async function getServerSideProps({ params }) {
    console.log("🚀 ~ file: [clinicId].js ~ line 19 ~ getServerSideProps ~ params", params)
    return {
      props: {}, // will be passed to the page component as props
    };
  }
  