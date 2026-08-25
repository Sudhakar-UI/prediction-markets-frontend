'use client'
import React, { useState } from "react";
import Link from 'next/link';
import { Image, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation'


const Leftsidemenu = () => {

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const closeCollapse = () => {
    setIsOpen(false);
  }

  return (
    <>
      <div className="backgroundoverlay" id="backgroundoverlay" onClick={closeCollapse}></div>
      {/* <div className="leftsidemenu shadow-sm" id="leftsidemenu">
        <div className="closeiconbtn" onClick={closeCollapse}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className="leftsidescroll">
          <ul>
            <li>
              <Link
                id="profile-settings" href="/profile-settings" className={`titlemenu ${pathname === '/profile-settings' ? 'active' : ''}`} onClick={menuclick}>
                <i> <Image className="side-icons"
                  src={
                    pathname === '/profile-settings'
                      ? "assets/images/profile-active.svg"
                      : "assets/images/profile.svg"
                  }
                  alt="icon" width={100} height={100} />
                </i>  <div>Profile</div>
              </Link>
            </li>
            <li>
              <Link
                id="account-settings" href="/account-settings" className={`titlemenu ${pathname === '/account-settings' ? 'active' : ''}`} onClick={menuclick}>
                <i> <Image className="side-icons"
                  src={
                    pathname === '/account-settings'
                      ? "assets/images/account-active.svg"
                      : "assets/images/s-2.png"
                  }
                  alt="icon" width={100} height={100} />
                </i>  <div>Account</div>
              </Link>
            </li>
            <li>
              <Link
                id="trading-settings" href="/trading-settings" className={`titlemenu ${pathname === '/trading-settings' ? 'active' : ''}`} onClick={menuclick}>
                <i> <Image className="side-icons"
                  src={
                    pathname === '/trading-settings'
                      ? "assets/images/trading-active.svg"
                      : "assets/images/s-3.png"
                  }
                  alt="icon" width={100} height={100} />
                </i>  <div>Trading</div>
              </Link>
            </li>
            <li>
              <Link
                id="notification-settings" href="/notification-settings" className={`titlemenu ${pathname === '/notification-settings' ? 'active' : ''}`} onClick={menuclick}>
                <i> <Image className="side-icons"
                  src={
                    pathname === '/notification-settings'
                      ? "assets/images/notification-active.svg"
                      : "assets/images/s-4.png"
                  }
                  alt="icon" width={100} height={100} />
                </i>  <div>Notifications</div>
              </Link>
            </li>
            <li>
              <Link
                id="builder-settings" href="/builder-settings" className={`titlemenu ${pathname === '/builder-settings' ? 'active' : ''}`} onClick={menuclick}>
                <i> <Image className="side-icons"
                  src={
                    pathname === '/builder-settings'
                      ? "assets/images/builder-codes-active.svg"
                      : "assets/images/s-5.png"
                  }
                  alt="icon" width={100} height={100} />
                </i>  <div>Builder Codes</div>
              </Link>
            </li>
            <li>
              <Link
                id="private-key" href="/private-key" className={`titlemenu ${pathname === '/private-key' ? 'active' : ''}`} onClick={menuclick}>
                <i> <Image className="side-icons"
                  src={
                    pathname === '/private-key'
                      ? "assets/images/private-key-active.svg"
                      : "assets/images/s-6.png"
                  }
                  alt="icon" width={100} height={100} />
                </i>  <div>Private Key</div>
              </Link>
            </li>

          </ul>
        </div>
      </div> */}
      
    </>
  )
}

export default Leftsidemenu