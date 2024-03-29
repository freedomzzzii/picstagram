import { useState, useEffect, ChangeEvent, useRef, RefObject } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './Navbar.scss';

import constant from '../../common/constant';
import { fetchGetProfile, fetchSearchUsers } from '../../redux/actions';
import { actionDefaultType } from '../../common/type';


type searchUserType = {
  username: string,
  bio: string,
  profile_image: {
    medium: string,
  },
};
type stateType = {
  getProfile: actionDefaultType & {
    data?: {
      profile_image: {
        medium: string,
      },
    },
  },
  searchUsers: actionDefaultType & {
    data?: {
      results: Array<searchUserType>,
    },
  }
};

function Navbar() {
  const dispatch = useDispatch();
  const { getProfile, searchUsers } = useSelector((state: stateType) => state);
  const history = useHistory();

  const [isReady, setIsReady] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const dropdownRef: RefObject<any> = useRef(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);

    dispatch(fetchSearchUsers({ query: event.target.value }));
  }

  const handleClickOutside = (event: MouseEvent): void => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const handleRedirect = (username: string): void => {
    setShowDropdown(false);

    history.push(`/post/${username}`);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    dispatch(fetchGetProfile());
  }, [dispatch]);

  useEffect(() => {
    if (getProfile.type === constant.GET_PROFILE_SUCCESS) {
      setIsReady(true);
    }
  }, [getProfile]);

  useEffect(() => {
    if (searchUsers.type === constant.GET_SEARCH_USERS_SUCCESS) {
      if (searchUsers.data && searchUsers.data?.results?.length > 0) {
        setShowDropdown(true);
      } else {
        setShowDropdown(false);
      }
    }
  }, [searchUsers]);

  if (!isReady) {
    return null;
  }

  return (
    <div className="Navbar">
      <div className="nav">
        <Link to={constant.pathHome} className="title">Picstagram</Link>
        <span className="box-search" ref={dropdownRef}>
          <input placeholder="search" value={search} onChange={handleSearch} />
          <div className={`dropdown${showDropdown ? ' active' : ''}`}>
            {
              searchUsers.data?.results ?
                searchUsers.data?.results.map((element: searchUserType) => (
                  <div className="user" onClick={() => handleRedirect(element.username)}>
                    <span className="box-avatar">
                      <img className="avatar" src={element.profile_image.medium} alt="avatar" />
                    </span>
                    <span className="group">
                      <div className="username">{element.username}</div>
                      <div className="bio">{element.bio}</div>
                    </span>
                  </div>
                ))
                : null
            }
          </div>
        </span>
        <span className="box-menu">
          <Link to={constant.pathHome} className="icon fas fa-home" />
          <span className="box-avatar">
            <img className="avatar" src={getProfile.data?.profile_image.medium} alt="avatar" />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
