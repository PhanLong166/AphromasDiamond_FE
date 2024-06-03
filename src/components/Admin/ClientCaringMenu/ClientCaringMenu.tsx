import * as Styled from './ClientCaringMenu.styled';
import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
    
const ClientCaringMenu = () => {
    const location = useLocation();
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        switch (location.pathname) {
            case '/admin/client-caring':
                setActive('Message');
                break;
            case '/admin/client-caring/feedback':
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
                                <p>Advice to customers</p>
                            </Styled.TitlePage>
                            
                            <Styled.OrderCatalog>
                                <Styled.OrderCatalog_Ele className={active === 'Message' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Message' ? 'adMenu_active-line' : 'adMenu_line'} `} onClick={() => handleSetActive('Message')} ></div>
                                    <Link to="/admin/client-caring">
                                        <h3>Message</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Feedback' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Feedback' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Feedback')}></div>
                                    <Link to="/admin/client-caring/feedback">
                                        <h3>Feedback</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                            </Styled.OrderCatalog>
                </>
    )
};

export default ClientCaringMenu; 