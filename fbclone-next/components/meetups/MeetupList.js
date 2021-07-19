import React from "react";
import PropTypes from "prop-types";
import Meetup from "./Meetup";

MeetupList.propTypes = {};

function MeetupList(props) {
  return (
    <ul>
      {props.meetups.map((meetup) => {
        const { id, image, title, address } = meetup;
        return (
          <Meetup
            key={id}
            id={id}
            title={title}
            image={image}
            address={address}
          />
        );
      })}
    </ul>
  );
}

export default MeetupList;
