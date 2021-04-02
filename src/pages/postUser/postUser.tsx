import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './postUser.scss';

import constant from '../../common/constant';
import { actionDefaultType } from '../../common/type';
import { fetchGetListPhotoByUser, fetchGetProfileByUser } from '../../redux/actions';

type stateType = {
  getListPhotoByUser: actionDefaultType & {
    data?: Array<dataType>,
  },
  getProfileByUser: actionDefaultType & {
    data?: {
      bio: string,
      username: string,
      total_photos: number,
      followers_count: number,
      following_count: number,
      location: string,
      profile_image: {
        large: string,
      },
    },
  },
};
type dataType = {
  urls: {
    small: string,
  },
};

function PostUser() {
  const dispatch = useDispatch();
  const { username } = useParams<{ username: string }>();
  const { getListPhotoByUser, getProfileByUser } = useSelector((state: stateType) => state);

  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsReady(false);

    dispatch(fetchGetProfileByUser({ username }))
    dispatch(fetchGetListPhotoByUser({ username }));
  }, [dispatch, username]);

  useEffect(() => {
    if (getProfileByUser.type === constant.GET_PROFILE_BY_USER_SUCCESS) {
      setIsReady(true);
    }

    return () => {
      console.log('hello')
      setIsReady(false);
    }
  }, [getProfileByUser]);

  if (!isReady) {
    return null;
  }

  return (
    <div className="PostUser">
      <div className="box-detail">
        <span className="box-avatar">
          <img className="avatar" src={getProfileByUser.data?.profile_image.large} alt="avatar" />
        </span>
        <span className="detail">
          <div className="username">{getProfileByUser.data?.username}</div>
          <div className="bio">{getProfileByUser.data?.bio}</div>
          <div className="location">{getProfileByUser.data?.location}</div>
          <div className="group">
            <span><span className="bold">{getProfileByUser.data?.total_photos}</span> posts</span>
            <span><span className="bold">{getProfileByUser.data?.followers_count}</span> followers</span>
            <span><span className="bold">{getProfileByUser.data?.following_count}</span> following</span>
          </div>
        </span>
      </div>
      <div className="box-list-post">
        {
          getListPhotoByUser.data ?
            getListPhotoByUser.data?.map((ele: dataType, index: number) => (
              <div className="box-post" key={`box-post-${index}`}>
                <div className="dummy" />
                <div className="post">
                  <img src={ele.urls.small} alt={`post-${index}`} />
                </div>
              </div>
            ))
            : null
        }
      </div>
    </div>
  );
}

export default PostUser;
