import * as Styled from './Admin.styled'
import Sidebar from '../../components/Admin/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined, SendOutlined} from '@ant-design/icons';

// import { IonIcon } from '@ionic/react'

interface Chat {
    name: string;
    imgSrc: string;
  }
  
  interface ShellElement {
    name: string;
  }

const Admin = () => {
    const chats: Chat[] = [
        {
          name: 'Phan Long Bui',
          imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/z2997477598872_57e3387a49bd183f37bfcce959c1cf29.jpg?alt=media&token=c6ac8714-1739-4c0e-95b5-9f366fd81048',
        },
        {
          name: 'Phan Long Bui',
          imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/%3BNCT%20chatroom%20-%20ended%3B.jpg?alt=media&token=e1cafd80-754a-431f-81c9-0d514f938dc0',
        },
        {
          name: 'Phan Long Bui',
          imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/248671492_405943994418474_7837095966314867087_n.jpg?alt=media&token=d0100107-c017-4601-bbc7-51da0ffbec57',
        },
    ];
    
    const shellElements: ShellElement[] = [
        { name: 'Phan Long Bui' },
        { name: 'Phan Long Bui' },
        { name: 'Phan Long Bui' },
        { name: 'Phan Long Bui' },
    ];
    
    const jewelryElements: ShellElement[] = [
        { name: 'Rings' },
        { name: 'Necklaces' },
        { name: 'Earrings' },
        { name: 'Bracelets' },
    ];
    
    const ringShellElements: ShellElement[] = [
        { name: 'Emerald Cut Diamond' },
        { name: 'Petite Micropavé Diamond Ring' },
        { name: 'Petite Halo Solitaire Diamond Ring' },
        { name: 'Twisted Halo Diamond Ring' },
    ];
    return(
        <>
            <Styled.AdminContainer>            
                <div className="dashboardArea">
                <Sidebar/>

                    <div className="dashboard">
                        <div className="titlePage">
                            <h1>Dashboard</h1>
                            <p>View all status from the dashboard</p>
                        </div>
                        <div className="dashboardContent">
                            <div className="dashContent_1">
                            <div className="statistiBox">
                                <p className="statistics">678</p>
                                <p className="statistics_explain">Total Customers</p>
                            </div>
                            <div className="statistiBox">
                                <p className="statistics">1,024</p>
                                <p className="statistics_explain">Total Orders</p>
                            </div>
                            <div className="statistiBox">
                                <p className="statistics">$19,217</p>
                                <p className="statistics_explain">Annual revenue</p>
                            </div>
                            </div>
                            <div className="dashContent_2">
                                <div className="chatNofi">
                                    <div className="chatNofi_title">
                                        <div className="mainTitle">
                                            <h2>Chats</h2>
                                            <p>0 unread messages</p>
                                        </div>
                                        <div className="viewAll">
                                            <p>View All</p>
                                            <ArrowRightOutlined />
                                        </div>
                                    </div>
                                    <div className="chatNofi_content">
                                        {chats.map((chat, index) => (
                                            <div className="cusChat" key={index}>
                                                <div className="cusChat_ava-name">
                                                    <img src={chat.imgSrc} alt={chat.name} />
                                                    <p>{chat.name}</p>
                                                </div>
                                                <div className="cusChat_link">
                                                    <SendOutlined />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="revenue">
                                    <div className="revenue_title">
                                        <h2>Revenue</h2>
                                    </div>
                                    <div className="revenue_content">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/NBcharts-hColumnCharts.png?alt=media&token=27ce2c97-508f-43fb-a07c-5b501bc1d3ab"
                                            alt=""/>
                                    </div>
                                </div>
                                <div className="topTime">
                                    <div className="topMonth">
                                        <p className="topMonth_title">Top month</p>
                                        <h2>November</h2>
                                        <p className="topMonth-Year">2022</p>
                                    </div>
                                    <div className="topYear">
                                        <p className="topYear_title">Top year</p>
                                        <h2>2023</h2>
                                        <p className="topYear-Detail">96K sold so far</p>
                                    </div>
                                </div>
                            </div>
                            <div className='dashContent_3'>
                                <div className="shell">
                                    <div className="shell_title">
                                        <h2>Promotional</h2>
                                        <div className="viewAll">
                                            <p>View All</p>
                                            <ArrowRightOutlined />
                                        </div>
                                    </div>
                                    <div className="shell_content">
                                        <div className="shell_titleTable">
                                            <p>Name</p>
                                            <p>Action</p>
                                        </div>
                                        {shellElements.map((ShellElement, index) => (
                                            <div className="shell_ele" key={index}>
                                                <div className="shell_ele-name">
                                                    <p>{ShellElement.name}</p>
                                                </div>
                                                <button className="shell_ele-button">View</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="shell">
                                    <div className="shell_title">
                                        <h2>Jewelry</h2>
                                        <div className="viewAll">
                                            <p>View All</p>
                                            <ArrowRightOutlined />
                                        </div>
                                    </div>
                                    <div className="shell_content">
                                        <div className="shell_titleTable">
                                            <p>Name</p>
                                            <p>Action</p>
                                        </div>
                                        {jewelryElements.map((jewelryElements, index) => (
                                            <div className="shell_ele" key={index}>
                                                <div className="shell_ele-name">
                                                    <p>{jewelryElements.name}</p>
                                                </div>
                                                <button className="shell_ele-button">View</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="shell">
                                    <div className="shell_title">
                                        <h2>Jewelry</h2>
                                        <div className="viewAll">
                                            <p>View All</p>
                                            <ArrowRightOutlined />
                                        </div>
                                    </div>
                                    <div className="shell_content">
                                        <div className="shell_titleTable">
                                            <p>Name</p>
                                            <p>Action</p>
                                        </div>
                                        {ringShellElements.map((ringShellElements, index) => (
                                            <div className="shell_ele" key={index}>
                                                <div className="shell_ele-name">
                                                    <p>{ringShellElements.name}</p>
                                                </div>
                                                <button className="shell_ele-button">View</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

    </Styled.AdminContainer>
        </>
    )
};

export default Admin;