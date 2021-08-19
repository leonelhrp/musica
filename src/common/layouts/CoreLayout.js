/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Player from '../components/Player';
import { resetAuth } from '../../redux/slices/authSlice';
import { userAuth } from '../../redux/actions/authAction';
import { getCookie } from '../../utils/cookies';

function CoreLayout({ children , history }) {
  const dispatch = useDispatch();
  const { authStatus } = useSelector((state) => state.authReducer);

  const token = () => getCookie('SPOTIFY_ACCESS_TOKEN') || undefined;
  
  useEffect(() => {
    if (!token()) {
      dispatch(userAuth())
    }
  }, [])

  useEffect(() => {
    if (authStatus === 'error') {
      dispatch(resetAuth());
    }
  }, [authStatus]);

  return (
    <div className="main">
      <SideBar />
      <div className="main__content">
        <Header history={history} />
        <div className="main__content__child">
          {children}
        </div>
      </div>
      <Player />
    </div>
  );
}

export default CoreLayout;
