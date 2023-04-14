import React from "react";

const Link = ({ className, href, children }) => {
  // prevent full page reload
  const onClick = (event) => {
// if ctrl or meta key are held on click, allow default behavior of opening link in new tab
    if (event.metaKey || event.ctrlKey) {
        return;
      }
    event.preventDefault();
    window.history.pushState({}, "", href)

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;