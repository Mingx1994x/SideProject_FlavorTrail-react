import { useState, useEffect, useRef, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

const TimePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { setValue } = useFormContext();
  const pickupTime = useWatch({
    name: 'pickup.time',
  });
  const [startTime, endTime] = pickupTime?.split(' - ') ?? ['', ''];

  const generateTimeOptions = (type = 'startTime', initTime = '0:0') => {
    let [initHour, initMin] = initTime.split(':').map(Number);
    const newTimeOptions = [];
    for (let hour = initHour; hour < 24; hour++) {
      let startMinute =
        hour === initHour ? (type === 'startTime' ? initMin : initMin + 15) : 0;
      for (let minute = startMinute; minute < 60; minute += 15) {
        const newTime = ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2);
        newTimeOptions.push(newTime);
      }
    }
    return newTimeOptions;
  };

  const startTimeOptions = useMemo(() => {
    return generateTimeOptions();
  }, []);

  const endTimeOptions = useMemo(() => {
    if (!startTime) return [];
    return generateTimeOptions('endTime', startTime);
  }, [startTime]);

  const updatePickupTime = (start, end) => {
    setValue('pickup.time', `${start} - ${end}`, {
      shouldDirty: true,
    });
  };

  const handleStartTimeClick = (time) => {
    const [clickHour, clickMin] = time.split(':').map(Number);
    const defaultEndTime =
      clickMin === 45
        ? `${('0' + (clickHour + 1)).slice(-2)}:00`
        : `${('0' + clickHour).slice(-2)}:${clickMin + 15}`;

    updatePickupTime(time, defaultEndTime);
  };

  const handleEndTimeClick = (time) => {
    updatePickupTime(startTime, time);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="timePicker" ref={dropdownRef}>
      <div className="dropdown">
        <button
          className="dropdown-toggle rounded-3 border border-1 border-gray-400 d-flex align-items-center bg-white"
          onClick={toggleDropdown}
          type="button"
        >
          <div className="py-2 px-5">
            {startTime && endTime ? `${startTime} - ${endTime}` : '請選擇時間'}
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div
          className={`dropdown-menu rounded-3 time-range-picker overflow-hidden ${
            isOpen ? 'show' : ''
          }`}
        >
          <div className="d-flex">
            {/* 開始時間 */}
            <ul
              className="list-unstyled dropdown-menu-start-time"
              id="start-time"
            >
              {startTimeOptions.map((time) => (
                <li
                  key={time}
                  className={`${startTime === time ? 'checked' : ''}`}
                  onClick={() => handleStartTimeClick(time)}
                >
                  {time}
                </li>
              ))}
            </ul>
            {/* 結束時間 */}
            <ul
              className={`list-unstyled dropdown-menu-end-time ${
                endTimeOptions.length === 0 ? 'disabled' : ''
              }`}
              id="end-time"
            >
              {endTimeOptions.map((time) => (
                <li
                  key={time}
                  className={`${endTime === time ? 'checked' : ''}`}
                  onClick={() => handleEndTimeClick(time)}
                >
                  {time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimePicker;
