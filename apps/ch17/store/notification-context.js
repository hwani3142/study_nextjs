import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  notification: null, // {title, message, status}
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

// context 를 전역으로 관리/적용하기 위한 wrapper
export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();
  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        hideNitificationHandler();
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNitificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }
  function hideNitificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNitificationHandler,
    hideNotification: hideNitificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
