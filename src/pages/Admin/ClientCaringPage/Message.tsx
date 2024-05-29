import * as Styled from './Message.styled';
import { InputField, SendButton } from './Message.styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined, SendOutlined} from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import ClientCaringMenu from '../../../components/Admin/ClientCaringMenu/ClientCaringMenu';

interface Message {
    sender: string;
    text: string;
    timestamp: Date;
}

interface Chat {
    id: number;
    img: string;
    name: string;
    messages: Message[];
}

const initialChats: Chat[] = [
    { id: 1, 
    img: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/z2997477598872_57e3387a49bd183f37bfcce959c1cf29.jpg?alt=media&token=c6ac8714-1739-4c0e-95b5-9f366fd81048', 
    name: 'Alice', 
    messages: [{sender: '', text: '', timestamp: new Date()}]
    },
    { id: 2, 
    img: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/%3BNCT%20chatroom%20-%20ended%3B.jpg?alt=media&token=e1cafd80-754a-431f-81c9-0d514f938dc0',
    name: 'Bob', 
    messages: [{sender: '', text: '', timestamp: new Date()}] 
    },
    { id: 3, 
    img: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/248671492_405943994418474_7837095966314867087_n.jpg?alt=media&token=d0100107-c017-4601-bbc7-51da0ffbec57',
    name: 'Charlie', 
    messages: [{sender: '', text: '', timestamp: new Date()}] 
    },
];

    const CancelledOrder = () => {
        const items: MenuProps['items'] = [
            {
              label: <a href="/" style={{  }}>Soonest</a>,
              key: '0',
            },
            {
              label: <a href="/">Latest</a>,
              key: '1',
            },
            {
              label: <a href="/">Low to High</a>,
              key: '2',
            },
            {
                label: <a href="/">High to Low</a>,
                key: '3',
            }
        ];

        const [chats, setChats] = useState<Chat[]>(initialChats);
        const [activeChatId, setActiveChatId] = useState<number | null>(null);
        const [inputValue, setInputValue] = useState('');

        const activeChat = chats.find(chat => chat.id === activeChatId);

        const sendMessage = () => {
            if (inputValue.trim() !== '' && activeChat) {
              const updatedChats = chats.map(chat => {
                if (chat.id === activeChatId) {
                  return { 
                    ...chat, 
                    messages: [...chat.messages, { sender: 'You', text: inputValue, timestamp: new Date() }] 
                  };
                }
                return chat;
              });
              setChats(updatedChats);
              setInputValue('');
        
              // Simulate bot response
              setTimeout(() => {
                const botResponse = { sender: 'Customer', text: 'This is a response message.', timestamp: new Date() };
                setChats(prevChats => prevChats.map(chat => {
                  if (chat.id === activeChatId) {
                    return { 
                      ...chat, 
                      messages: [...chat.messages, botResponse] 
                    };
                  }
                  return chat;
                }));
              }, 1000);
            }
        };

        const formatTimestamp = (timestamp: Date) => {
            const date = new Date(timestamp);
            return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
        };


        return(
            <>
                <Styled.OrderAdminArea>
                        <Sidebar/>
                        
                        <Styled.AdminPage>
                            <ClientCaringMenu/>

                            <Styled.AdPageContent>
                                <Styled.MessageContent>
                                    <Styled.ChatSidebar>
                                        <Styled.SearchArea>
                                            <input className="searchInput" type="text" />
                                            <SearchOutlined />
                                        </Styled.SearchArea>
                                        <Styled.ChatList>
                                        {chats.map(chat => (
                                            <Styled.ChatListItem 
                                            key={chat.id} 
                                            onClick={() =>  setActiveChatId(chat.id)}
                                            style={{ backgroundColor: activeChatId === chat.id ? '#EADBC8' : 'transparent' }}
                                            >
                                                <Styled.ChatListItem_Text>
                                                <img src={chat.img} alt={chat.id} />
                                                    <div>{chat.name}</div>
                                                    
                                                </Styled.ChatListItem_Text>
                                                <div>
                                                <p>{chat.messages.length > 0 ? formatTimestamp(chat.messages[chat.messages.length - 1].timestamp) : ''}</p>
                                                </div>
                                            
                                            </Styled.ChatListItem>
                                        ))}
                                        </Styled.ChatList>
                                    </Styled.ChatSidebar>

                                    <Styled.ChatContainer>
                                        <Styled.CustomerName>
                                            {activeChat ? (
                                                <>
                                                    <img src={activeChat.img} alt={activeChat.name} />
                                                    <h2>{activeChat.name}</h2>
                                                </>
                                            ) : (
                                                <h2>Select a chat</h2>
                                            )}
                                        </Styled.CustomerName>
                                        <Styled.ChatContent>
                                            <Styled.MessagesContainer>
                                            {activeChat ? activeChat.messages.map((message, index) => (
                                                <Styled.MessageItem key={index} isSender={message.sender === 'You'}>
                                                    <div>
                                                        <strong>{message.sender}: </strong>{message.text}
                                                    </div>
                                                </Styled.MessageItem>
                                            )) : (
                                                <div>Select a chat to start messaging</div>
                                            )}
                                            </Styled.MessagesContainer>
                                            {activeChat && (
                                            <Styled.InputContainer>
                                                <InputField 
                                                type="text" 
                                                placeholder="Type a message..."
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                onKeyPress={(e) => { if (e.key === 'Enter') sendMessage(); }}
                                                />
                                                <SendButton onClick={sendMessage}>
                                                    <SendOutlined />
                                                </SendButton>
                                            </Styled.InputContainer>
                                            )}
                                        </Styled.ChatContent>

                                    </Styled.ChatContainer>
                                </Styled.MessageContent>

                            </Styled.AdPageContent>
                        </Styled.AdminPage>
                    </Styled.OrderAdminArea> 
            </>
    )
};

export default CancelledOrder; 