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
    detail?: {
      query: string,
    },
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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleAppendPhoto = (): void => {
    try {
      if (getListPhoto.data) {
        const box = document.getElementById('list');
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
                <img src="${ele.urls.small}" id="image-${sumElement + index}" alt="post-${sumElement + index}" />
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
          handleClickImage(index, sumElement)
        });
      }
    } catch (error) {
      return;
    }
  };

  const handleClickImage = (index: number, sumElement: number): void => {
    try {
      const getElement = document.getElementById(`box-photo-${sumElement + index}`);
      const image = document.getElementById(`image-${sumElement + index}`);

      if (getElement && image) {
        image.onclick = () => {
          const icon = document.createElement('span');
          icon.id = `icon-${sumElement + index}`;
          icon.className = 'animate__animated my-element fas fa-heart icon animate__bounceIn';

          getElement?.insertAdjacentElement('beforeend', icon);

          const iconElement = document.getElementById(`icon-${sumElement + index}`);
          iconElement?.addEventListener('animationend', () => {
            if (iconElement.classList.contains('animate__bounceIn')) {
              iconElement.classList.remove('animate__bounceIn');
              iconElement.classList.add('animate__bounceOut', 'animate__delay-1s');
            } else if (iconElement.classList.contains('animate__bounceOut')) {
              iconElement.remove();
            }
          });
        };
      }
    } catch (error) {
      return
    }
  }

  const handleGetListPhoto = (): void => {
    if (hasMore && !isLoading) {
      setHasMore(false);
      dispatch(fetchGetListPhoto({ query: getListPhoto.detail?.query }));
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

        setListPhoto([...listPhoto, ...getListPhoto.data]);
        setIsLoading(false);
        setHasMore(true);
      }
    }
  }, [getListPhoto]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="Home">
      <InfiniteScroll
        pageStart={0}
        loadMore={handleGetListPhoto}
        hasMore={hasMore && !isLoading}
        className="box-list-photo"
        id="box-list-photo"
      >
        <div className="list" id="list" />
      </InfiniteScroll>
    </div >
  );
}

export default Home;