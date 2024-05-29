import * as Styled from './ClientCaringMenu.styled';
import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
    
const ClientCaringMenu = () => {
    const location = useLocation();
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        switch (location.pathname) {
            case '/clientcaringAdmin':
                setActive('Message');
                break;
            case '/clientcaringAdmin/feedback':
                setActive('Feedback');
                break;
            default:
                setActive('');
        }
    }, [location.pathname]);

    const handleSetActive = (menuItem: string) => {
        setActive(menuItem);
    };


    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { sender: 'You', text: inputValue }]);
      setInputValue('');
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { sender: 'Bot', text: 'This is a response message.' }]);
      }, 1000);
    }
  };


        return(
            <>
                            <Styled.TitlePage>
                                <h1>Client Caring</h1>
                                <p>Advise to customers</p>
                            </Styled.TitlePage>
                            
                            <Styled.OrderCatalog>
                                <Styled.OrderCatalog_Ele className={active === 'Message' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Message' ? 'adMenu_active-line' : 'adMenu_line'} `} onClick={() => handleSetActive('Message')} ></div>
                                    <Link to="/clientcaringAdmin">
                                        <h3>Message</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Feedback' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Feedback' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Feedback')}></div>
                                    <Link to="/clientcaringAdmin/feedback">
                                        <h3>Feedback</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                            </Styled.OrderCatalog>
                </>
    )
};

export default ClientCaringMenu; 