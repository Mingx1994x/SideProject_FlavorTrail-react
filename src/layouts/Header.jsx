import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin } from '../redux/LoginStateSlice';
const { VITE_BASE_URL } = import.meta.env;
import AlertModal from '../components/AlertModal';
import { Modal } from 'bootstrap';

const Header = () => {
  const navigate = useNavigate();

  let lastScrollTop = useRef(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileSrolled, setIsMobileScrolled] = useState(false);

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('地理位置');
  const [isFoodTypeOpen, setIsFoodTypeOpen] = useState(false);
  const [selectedFoodType, setSelectedFoodType] = useState('美食類型');
  const locationDropdownRef = useRef(null);
  const foodTypeDropdownRef = useRef(null);
  const [locations, setLocation] = useState([]);
  const [foodTypes, setFoodTypes] = useState([]);

  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const { isLogin } = useSelector((state) => state.loginSlice.loginStatus);
  const dispatch = useDispatch();

  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const accountMenuRef = useRef(null);

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  const closeAccountMenu = () => {
    setIsAccountMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        accountMenuRef.current &&
        !accountMenuRef.current.contains(e.target) &&
        isAccountMenuOpen
      ) {
        setIsAccountMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAccountMenuOpen]);

  const handleLogout = () => {
    AlertModal.confirmAction({
      title: '確認登出',
      text: '親愛的尋者，登出後將無法使用會員功能喔！',
      icon: 'question',
      confirmButtonText: '登出',
      cancelButtonText: '取消',
      onConfirm: () => {
        dispatch(
          setIsLogin({
            uid: '',
            isLogin: false,
          })
        );

        handleNavLinkClick();
        navigate('/');

        AlertModal.successMessage({
          title: '登出成功',
          text: '期待下次再見！',
        });
      },
    });
  };

  /* 向下滾動 - 隱藏 navbar & 向上滾動 - 顯示 navbar */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const shouldHideNav = currentScroll > lastScrollTop.current;

      if (currentScroll > 0) {
        if (shouldHideNav) {
          setScrollPosition(-88);
          setIsMobileScrolled(true);
        } else {
          setScrollPosition(0);
          setIsMobileScrolled(false);
        }
      } else {
        setIsMobileScrolled(false);
        setScrollPosition(0);
      }

      lastScrollTop.current = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* 切換 navbar 和 搜尋欄 */
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);

    if (isSearchVisible || isOffcanvasOpen) {
      setSearchInput('');
      setSelectedLocation('地理位置');
      setSelectedFoodType('美食類型');
    }
  };

  /* 搜尋欄 dropdown */
  useEffect(() => {
    (async () => {
      try {
        const foodTypeResponse = await axios.get(`${VITE_BASE_URL}/foodTypes`);
        const locationResponse = await axios.get(`${VITE_BASE_URL}/twCities`);
        setFoodTypes(foodTypeResponse.data);
        setLocation(locationResponse.data);
      } catch (error) {
        alert('發生錯誤，請稍後再試', error);
      }
    })();
  }, []);

  const handleLocationClick = () => {
    setIsLocationOpen(!isLocationOpen);
    setIsFoodTypeOpen(false);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsLocationOpen(false);
  };

  const handleFoodTypeClick = () => {
    setIsFoodTypeOpen(!isFoodTypeOpen);
    setIsLocationOpen(false);
  };

  const handleFoodTypeSelect = (foodType) => {
    setSelectedFoodType(foodType);
    setIsFoodTypeOpen(false);
  };

  useEffect(() => {
    if (!isLocationOpen && !isFoodTypeOpen) return;

    const handleClickOutside = (e) => {
      const isClickingDropdownItem = e.target.closest('.dropdown-item');

      if (isClickingDropdownItem) return;

      if (
        isLocationOpen &&
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(e.target)
      ) {
        setIsLocationOpen(false);
      }

      if (
        isFoodTypeOpen &&
        foodTypeDropdownRef.current &&
        !foodTypeDropdownRef.current.contains(e.target)
      ) {
        setIsFoodTypeOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLocationOpen, isFoodTypeOpen]);

  /* 搜尋欄 input */
  const handleSearchInputChange = (e) => {
    const newValue = e.target.value;
    setSearchInput(newValue);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  const toggleOffcanvas = () => {
    if (isOffcanvasOpen) {
      setSearchInput('');
      setSelectedLocation('地理位置');
      setSelectedFoodType('美食類型');
    }
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  // 處理搜尋結果，將搜尋條件帶到 all-posts 頁面
  const handleSearch = (e) => {
    e.preventDefault();

    const searchParams = new URLSearchParams();

    if (searchInput.trim()) {
      searchParams.append('keyword', searchInput.trim());
    }

    if (selectedLocation !== '地理位置' && selectedLocation !== '全部地區') {
      searchParams.append('location', selectedLocation);
    }

    if (selectedFoodType !== '美食類型' && selectedFoodType !== '全部類型') {
      searchParams.append('foodType', selectedFoodType);
    }

    navigate(`/all-posts?${searchParams.toString()}`);

    if (isSearchVisible) {
      toggleSearch();
    }

    if (isOffcanvasOpen) {
      setIsOffcanvasOpen(false);
    }
  };

  const handleNavLinkClick = () => {
    setIsOffcanvasOpen(false);
  };

  const handleClick = (handler) => (e) => {
    e.preventDefault();
    handler();
  };
  const openShareFoodModal = (e) => {
    e.preventDefault();
    if (isLogin) {
      const shareFoodModal = new Modal(
        document.getElementById('shareFoodModal')
      );
      shareFoodModal.show();
    } else {
      AlertModal.confirmAction({
        title: '請先登入',
        text: '迷路的尋者，登入後才能使用會員功能喔！',
        icon: 'info',
        confirmButtonText: '登入',
        cancelButtonText: '取消',
        onConfirm: () => {
          navigate('/login');
        },
      });
    }
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg top-auto py-lg-0 position-fixed w-100 py-0"
        style={{
          top: `${scrollPosition}px`,
          transition: 'top .3s',
          display: isSearchVisible ? 'none' : 'block',
        }}
      >
        <div className="container">
          {/* <!-- Logo --> */}
          <h1 className="fs-0">
            <NavLink
              className="navbar-brand d-flex py-lg-0 d-lg-block d-none"
              to="/"
            >
              <img src="images/Logo-navbar.svg" alt="logo" />
            </NavLink>
          </h1>

          {/* <!-- Toggler for mobile --> */}
          <button
            onClick={toggleOffcanvas}
            className={`navbar-toggler navbar-toggler-custom p-10 rounded-start-3 
                ${
                  isMobileSrolled && !isOffcanvasOpen
                    ? 'scrolled-navbar-toggler'
                    : ''
                }
                ${isOffcanvasOpen ? 'toggled' : ''}
            `}
            type="button"
            role="button"
            aria-controls="offcanvasNav"
            aria-expanded={isOffcanvasOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="burgerIcon"
              className={`burger-icon ${isOffcanvasOpen ? 'd-none' : ''}`}
            >
              <path
                d="M4 12H20M4 6H20M4 18H20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${isOffcanvasOpen ? '' : 'd-none'}`}
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* <!-- Desktop menu --> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav py-lg-7 mb-2 mb-lg-0 gap-lg-7">
              <li className="nav-item">
                <NavLink className="nav-link py-lg-3 px-lg-5" to="/all-posts">
                  所有貼文
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link py-lg-3 px-lg-5" to="/guide-line">
                  使用指南
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link py-lg-3 px-lg-5" to="/about-us">
                  關於我們
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  onClick={handleClick(toggleSearch)}
                  className="nav-link p-lg-2 search-icon"
                  href="#"
                  type="button"
                  aria-label="開啟搜尋"
                  aria-expanded={isSearchVisible}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L16.7 16.7M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              {!isLogin ? (
                <>
                  <li
                    className="nav-item border border-black"
                    id="desktop-auth-button"
                  >
                    <NavLink
                      to="/login"
                      className="nav-link nav-item-btn py-lg-3 px-lg-5"
                    >
                      登入/註冊
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item border border-black dropdown nav-account-menu">
                    <a
                      className="nav-link dropdown-toggle nav-dropdown-btn py-3 px-5 position-relative d-flex align-items-center"
                      href="#"
                      id="accountDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      我的帳號
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-primary p-1">
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </a>
                    <ul
                      className={`dropdown-menu nav-dropdown-menu mt-1 border-0 ${
                        isAccountMenuOpen ? 'show' : ''
                      }`}
                      aria-labelledby="accountDropdown"
                    >
                      <li>
                        <NavLink
                          to="/account/setting"
                          className="dropdown-item"
                        >
                          個人設定
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/account/notifications"
                          className="dropdown-item"
                        >
                          全部通知
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/account/my-posts"
                          className="dropdown-item"
                        >
                          我的發文
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/account/following"
                          className="dropdown-item"
                        >
                          我的追蹤
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/account/history"
                          className="dropdown-item"
                        >
                          領取紀錄
                        </NavLink>
                      </li>
                      <li>
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            handleLogout();
                          }}
                          className="dropdown-item logout"
                          href="#"
                          id="logout"
                        >
                          登出
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* <!-- Mobile menu (Offcanvas) --> */}
          <div
            className={`offcanvas offcanvas-start w-100 border-0 d-lg-none ${
              isOffcanvasOpen ? 'show' : ''
            }`}
            tabIndex="-1"
            id="offcanvasNav"
            aria-labelledby="offcanvasNavLabel"
          >
            <div className="offcanvas-header d-flex justify-content-between mb-12">
              <h1 className="offcanvas-title" id="offcanvasNavLabel">
                <Link to="/">
                  <img src="/images/Logo-navbar.svg" alt="logo" />
                </Link>
              </h1>
              {!isLogin ? (
                <>
                  <div
                    className="nav-item border border-black"
                    id="mobile-auth-button"
                  >
                    <NavLink
                      onClick={handleNavLinkClick}
                      to="/login"
                      className="nav-link nav-item-btn py-3 px-5 fw-bold"
                    >
                      登入/註冊
                    </NavLink>
                  </div>
                </>
              ) : (
                <>
                  <div
                    ref={accountMenuRef}
                    className="nav-item border border-black dropdown nav-account-menu"
                  >
                    <a
                      onClick={toggleAccountMenu}
                      className="nav-link dropdown-toggle nav-dropdown-btn py-3 px-5 position-relative d-flex align-items-center"
                      href="#"
                      id="accountDropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      我的帳號
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-primary p-1">
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </a>
                    <ul
                      className={`dropdown-menu nav-dropdown-menu mt-1 border-0 ${
                        isAccountMenuOpen ? 'show' : ''
                      }`}
                      aria-labelledby="accountDropdown"
                    >
                      <li>
                        <NavLink
                          to="/account/setting"
                          onClick={() => {
                            closeAccountMenu();
                            handleNavLinkClick();
                          }}
                          className="dropdown-item"
                        >
                          個人設定
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/account/notifications"
                          onClick={() => {
                            closeAccountMenu();
                            handleNavLinkClick();
                          }}
                          className="dropdown-item"
                        >
                          全部通知
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/account/my-posts"
                          onClick={() => {
                            closeAccountMenu();
                            handleNavLinkClick();
                          }}
                          className="dropdown-item"
                        >
                          我的發文
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/account/following"
                          onClick={() => {
                            closeAccountMenu();
                            handleNavLinkClick();
                          }}
                          className="dropdown-item"
                        >
                          我的追蹤
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/account/history"
                          onClick={() => {
                            closeAccountMenu();
                            handleNavLinkClick();
                          }}
                          className="dropdown-item"
                        >
                          領取紀錄
                        </NavLink>
                      </li>
                      <li>
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            closeAccountMenu();
                            handleLogout();
                          }}
                          className="dropdown-item logout"
                          href="#"
                          id="logout"
                        >
                          登出
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
            <ul className="offcanvas-body navbar-nav vh-100 pt-0">
              <li className="nav-item mb-10">
                <ul className="search-form d-flex gap-2 flex-wrap">
                  <li className="input-group rounded-3 bg-white">
                    <input
                      onChange={handleSearchInputChange}
                      onKeyDown={handleEnterKeyPress}
                      className="form-control search-input py-2 px-5 bg-white"
                      type="text"
                      name="search"
                      placeholder="附近美味"
                      value={searchInput}
                    />
                    <a
                      onClick={handleSearch}
                      href="#"
                      className="input-group-text border-0 bg-transparent py-2 ps-0 pe-5"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 21L16.7 16.7M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="dropdown position-relative">
                    <button
                      onClick={handleLocationClick}
                      className="dropdown-btn d-flex align-items-center justify-content-between py-2 ps-5 pe-2 rounded-3 bg-white border-0"
                      type="button"
                      aria-expanded={isLocationOpen}
                    >
                      {selectedLocation}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ms-5 dropdown-arrow ${
                          isLocationOpen ? 'flip-arrow' : ''
                        }`}
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {isLocationOpen && (
                      <ul
                        className={`dropdown-menu custom-dropdown-menu position-absolute w-100 ${
                          isLocationOpen ? 'show' : ''
                        }`}
                        style={{ maxHeight: '50vh', overflowY: 'auto' }}
                      >
                        <li>
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              handleLocationSelect('全部地區');
                            }}
                            className="dropdown-item"
                            href="#"
                          >
                            全部地區
                          </a>
                        </li>
                        {locations.map((location) => (
                          <li key={location.id}>
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                handleLocationSelect(location.name);
                              }}
                              className="dropdown-item"
                              href="#"
                            >
                              {location.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  <li className="dropdown">
                    <button
                      onClick={handleFoodTypeClick}
                      className="dropdown-btn d-flex align-items-center justify-content-between py-2 ps-5 pe-2 rounded-3 bg-white border-0"
                      type="button"
                      aria-expanded={isFoodTypeOpen}
                    >
                      {selectedFoodType}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ms-5 dropdown-arrow ${
                          isFoodTypeOpen ? 'flip-arrow' : ''
                        }`}
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {isFoodTypeOpen && (
                      <ul
                        className={`dropdown-menu custom-dropdown-menu position-absolute w-100 ${
                          isFoodTypeOpen ? 'show' : ''
                        }`}
                      >
                        <li>
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              handleFoodTypeSelect('全部類型');
                            }}
                            className="dropdown-item"
                            href="#"
                          >
                            全部類型
                          </a>
                        </li>
                        {foodTypes.map((foodType) => (
                          <li key={foodType.id}>
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                handleFoodTypeSelect(foodType.type);
                              }}
                              className="dropdown-item"
                              href="#"
                            >
                              {foodType.type}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              </li>
              <li className="nav-item mb-10">
                <h2 className="fs-1 fw-bolder">
                  <a
                    onClick={(e) => openShareFoodModal(e)}
                    className="nav-link p-0"
                    href="#"
                  >
                    分享美味
                  </a>
                </h2>
              </li>
              <li className="nav-item mb-10">
                <h2 className="fs-1 fw-bolder">
                  <NavLink
                    onClick={handleNavLinkClick}
                    className="nav-link p-0"
                    to="/all-posts"
                  >
                    所有貼文
                  </NavLink>
                </h2>
              </li>
              <li className="nav-item mb-10">
                <h2 className="fs-1 fw-bolder">
                  <NavLink
                    onClick={handleNavLinkClick}
                    className="nav-link p-0"
                    to="/guide-line"
                  >
                    使用指南
                  </NavLink>
                </h2>
              </li>
              <li className="nav-item">
                <h2 className="fs-1 fw-bolder">
                  <NavLink
                    onClick={handleNavLinkClick}
                    className="nav-link p-0"
                    to="/about-us"
                  >
                    關於我們
                  </NavLink>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Search bar for desktop --> */}
      <div
        className={`search ${isSearchVisible ? '' : 'd-none'}`}
        id="searchBar"
        role="search"
      >
        <div className="search-bar container d-flex">
          <Link to="/" className="navbar-brand d-flex align-items-center me-4">
            <img src="/images/Logo-navbar.svg" alt="logo" />
          </Link>
          <ul className="search-form d-flex py-7 gap-2 ms-auto me-2 flex-grow-1 justify-content-end">
            <li className="input-group mb-5 mb-lg-0 rounded-3 bg-white">
              <input
                onChange={handleSearchInputChange}
                onKeyDown={handleEnterKeyPress}
                className="form-control search-input py-2 px-5 bg-white"
                type="text"
                name="search"
                placeholder="附近美味"
                value={searchInput}
              />
              <a
                onClick={handleSearch}
                href="#"
                className="input-group-text border-0 bg-transparent py-2 ps-0 pe-5"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L16.7 16.7M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="dropdown" ref={locationDropdownRef}>
              <button
                onClick={handleLocationClick}
                className="nav-link dropdown-btn d-flex align-items-center justify-content-between py-2 ps-5 pe-2 gap-5 rounded-3 bg-white"
                type="button"
                aria-expanded={isLocationOpen}
              >
                {selectedLocation}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`dropdown-arrow ${
                    isLocationOpen ? 'flip-arrow' : ''
                  }`}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {isLocationOpen && (
                <ul
                  className={`dropdown-menu custom-dropdown-menu ${
                    isLocationOpen ? 'show' : ''
                  }`}
                  style={{ maxHeight: '50vh', overflowY: 'auto' }}
                >
                  <li>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        handleLocationSelect('全部地區');
                      }}
                      className="dropdown-item"
                      href="#"
                    >
                      全部地區
                    </a>
                  </li>
                  {locations.map((location) => (
                    <li key={location.id}>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          handleLocationSelect(location.name);
                        }}
                        className="dropdown-item"
                        href="#"
                      >
                        {location.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="dropdown" ref={foodTypeDropdownRef}>
              <button
                onClick={handleFoodTypeClick}
                className="nav-link dropdown-btn d-flex align-items-center justify-content-between py-2 ps-5 pe-2 gap-5 rounded-3 bg-white"
                type="button"
                aria-expanded={isFoodTypeOpen}
              >
                {selectedFoodType}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`dropdown-arrow ${
                    isFoodTypeOpen ? 'flip-arrow' : ''
                  }`}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {isFoodTypeOpen && (
                <ul
                  className={`dropdown-menu custom-dropdown-menu ${
                    isFoodTypeOpen ? 'show' : ''
                  }`}
                >
                  <li>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        handleFoodTypeSelect('全部類型');
                      }}
                      className="dropdown-item"
                      href="#"
                    >
                      全部類型
                    </a>
                  </li>
                  {foodTypes.map((foodType) => (
                    <li key={foodType.id}>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          handleFoodTypeSelect(foodType.type);
                        }}
                        className="dropdown-item"
                        href="#"
                      >
                        {foodType.type}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          <a
            onClick={handleClick(toggleSearch)}
            className="close-btn d-flex flex-column align-items-center justify-content-center ms-2 bg-black rounded-bottom-3 text-white fw-bold"
            aria-label="關閉搜尋"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-2"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            關閉
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
