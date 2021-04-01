import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Navbar.scss';

import constant from '../../common/constant';
import { fetchGetProfile } from '../../redux/actions';
import { actionDefaultType } from '../../common/type'

type stateType = {
  getProfile: actionDefaultType & {
    data?: {
      profile_image: {
        medium: string,
      },
    },
  },
};

function Navbar() {
  const dispatch = useDispatch();
  const { getProfile } = useSelector((state: stateType) => state)

  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (!isReady && !getProfile.data) {
      dispatch(fetchGetProfile());
    }
  }, [dispatch]);

  useEffect(() => {
    if (getProfile.type === constant.GET_PROFILE_SUCCESS) {
      setIsReady(true);
    }
  }, [getProfile]);

  if (!isReady) {
    return null;
  }

  return (
    <div className="Navbar">
      <span className="title">Picstagram</span>
      <input placeholder="search" />
      <span className="box-menu">
        <span className="box-avatar">
          <img className="avatar" src={getProfile.data?.profile_image.medium} alt="avatar" />
        </span>
      </span>
    </div>
  );
}

export default Navbar;
