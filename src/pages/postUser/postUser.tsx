import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './postUser.scss';

import constant from '../../common/constant';
import { actionDefaultType } from '../../common/type';
import { fetchGetListPhotoByUser, fetchGetProfileByUser, clearPostUser } from '../../redux/actions';
import Loading from '../../components/loading/loading';

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
  const [posts, setPosts] = useState<Array<any>>([]);

  const handlePosts = (): void => {
    if (getListPhotoByUser.data) {
      const newPosts = getListPhotoByUser.data?.map((ele: dataType, index: number) => (
        <div className="box-post" key={`box-post-${index}`}>
          <div className="dummy" />
          <div className="post">
            <img src={ele.urls.small} alt={`post-${index}`} />
          </div>
        </div>
      ));

      setPosts(newPosts);
      setIsReady(true);
      return
    }
    setPosts([]);
    setIsReady(true);
    return
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsReady(false);

    dispatch(fetchGetProfileByUser({ username }));

    return () => {
      dispatch(clearPostUser());
    }
  }, [dispatch, username]);

  useEffect(() => {
    if (getProfileByUser.type === constant.GET_PROFILE_BY_USER_SUCCESS) {
      dispatch(fetchGetListPhotoByUser({ username, total: getProfileByUser.data?.total_photos }));
    }
  }, [getProfileByUser]);

  useEffect(() => {
    if (getListPhotoByUser.type === constant.GET_LIST_PHOTO_BY_USER_SUCCESS) {
      handlePosts();
    }
  }, [getListPhotoByUser])

  if (!isReady) {
    return <Loading />;
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
        {posts}
      </div>
    </div>
  );
}

export default PostUser;
