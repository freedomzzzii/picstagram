import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import './home.scss';

import constant from '../../common/constant';
import { fetchGetListPhoto } from '../../redux/actions';
import { timeAgo } from '../../util/time.util';

type stateTypes = {
  getListPhoto: {
    type: string,
    data?: [dataType],
  },
};
type dataType = {
  alt_description: string,
  updated_at: string,
  urls: {
    small: string,
  },
  user: {
    username: string,
    profile_image: {
      medium: string,
    },
  },
};

function Home() {
  const dispatch = useDispatch();
  const { getListPhoto } = useSelector((state: stateTypes) => state);

  const [isReady, setIsReady] = useState<boolean>(false);
  const [listPhoto, setListPhoto] = useState<Array<{}>>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const handleAppendPhoto = (): void => {
    try {
      if (getListPhoto.data) {
        const box = document.getElementById('box-list-photo');
        const sumElement = listPhoto.length;

        getListPhoto.data?.forEach((ele: dataType, index: number) => {
          const element = (`
        <div class="box-photo" id="box-photo-${sumElement + index}" key="box-photo-${sumElement + index}">
          <div class="box-top">
            <div class="box-avatar">
              <img class="avatar" src="${ele.user.profile_image.medium}" alt="avatar-${sumElement + index}" />
            </div>
            <span class="username">${ele.user.username}</span>
          </div>
          <div class="box-image">
            <img src="${ele.urls.small}" alt="post-${sumElement + index}" />
          </div>
          <div class="box-bottom">
            <div class="group">
              <span class="username">${ele.user.username}</span>
              <span class="description">${ele.alt_description}</span>
            </div>
            <div class="update-at">${timeAgo(ele.updated_at)}</div>
          </div>
        </div>
      `);

          box?.insertAdjacentHTML('beforeend', element);
        });

        setListPhoto([...listPhoto, ...getListPhoto.data]);
        setHasMore(true);
      }
    } catch (error) {
      return;
    }
  };

  const handleGetListPhoto = (): void => {
    if (hasMore) {
      setHasMore(false);
      dispatch(fetchGetListPhoto());
    }
  }

  useEffect(() => {
    dispatch(fetchGetListPhoto());
  }, [dispatch]);

  useEffect(() => {
    if (getListPhoto.type === constant.GET_LIST_PHOTO_SUCCESS) {
      if (!isReady) {
        setIsReady(true);
      }

      if (getListPhoto.data) {
        handleAppendPhoto();
      }
    }
  }, [getListPhoto]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isReady) {
    // return null;
  }

  return (
    <div className="Home">
      <InfiniteScroll
        pageStart={0}
        loadMore={handleGetListPhoto}
        hasMore={hasMore}
        loader={<div className="loader" key={0}>Loading ...</div>}
        className="box-list-photo"
        id="box-list-photo"
      >
        <div />
      </InfiniteScroll>
    </div>
  );
}

export default Home;