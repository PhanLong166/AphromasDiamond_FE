import * as Styled from './Dashboard.styled'
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
// import { Link } from 'react-router-dom';
import { ArrowRightOutlined, SendOutlined} from '@ant-design/icons';

// import { IonIcon } from '@ionic/react'

interface Chat {
    name: string;
    imgSrc: string;
  }
  
  interface ShellElement {
    name: string;
  }

const Dashboard = () => {
    const chats: Chat[] = [
        {
          name: 'Aphromas Diamond',
          imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/z2997477598872_57e3387a49bd183f37bfcce959c1cf29.jpg?alt=media&token=c6ac8714-1739-4c0e-95b5-9f366fd81048',
        },
        {
          name: 'Aphromas Diamond',
          imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/%3BNCT%20chatroom%20-%20ended%3B.jpg?alt=media&token=e1cafd80-754a-431f-81c9-0d514f938dc0',
        },
        {
          name: 'Aphromas Diamond',
          imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/248671492_405943994418474_7837095966314867087_n.jpg?alt=media&token=d0100107-c017-4601-bbc7-51da0ffbec57',
        },
    ];
    
    const shellElements: ShellElement[] = [
        { name: 'AphromasDiamond' },
        { name: 'AphromasDiamond' },
        { name: 'AphromasDiamond' },
        { name: 'AphromasDiamond' },
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
                <Sidebar/>

                <Styled.AdminPage>
                    <Styled.TitlePage>
                        <h1>Dashboard</h1>
                        <p>View all status from the dashboard</p>
                    </Styled.TitlePage>
                    <Styled.DBContent>
                        <Styled.DBContent_1>
                            <Styled.StatistiBox>
                                <p className="statistics">678</p>
                                <p className="statistics_explain">Total Customers</p>
                            </Styled.StatistiBox>
                            <Styled.StatistiBox>
                                <p className="statistics">1,024</p>
                                <p className="statistics_explain">Total Orders</p>
                            </Styled.StatistiBox>
                            <Styled.StatistiBox>
                                <p className="statistics">$19,217</p>
                                <p className="statistics_explain">Annual revenue</p>
                            </Styled.StatistiBox>
                        </Styled.DBContent_1>

                        <Styled.DBContent_2>
                            <Styled.ChatGene>
                                <Styled.ChatGene_Title>
                                    <Styled.MainTitle>
                                        <h2>Chats</h2>
                                        <p>0 unread messages</p>
                                    </Styled.MainTitle>
                                    <Styled.ViewAll>
                                        <p>View All</p>
                                        <ArrowRightOutlined />
                                    </Styled.ViewAll>
                                </Styled.ChatGene_Title>
                                <Styled.ChatGene_Content>
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
                                </Styled.ChatGene_Content>
                                    <div className="chatNofi_content">
                                        
                                    </div>
                            </Styled.ChatGene>
                            <Styled.Revenue>
                                <Styled.Revenue_Title>
                                    <h2>Revenue</h2>
                                </Styled.Revenue_Title>
                                <Styled.Revenue_Content>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/NBcharts-hColumnCharts.png?alt=media&token=27ce2c97-508f-43fb-a07c-5b501bc1d3ab"
                                            alt=""/>
                                </Styled.Revenue_Content>
                            </Styled.Revenue>
                            <Styled.TopTime>
                                <Styled.TopMonth>
                                    <p className="topMonth_title">Top month</p>
                                    <h2>November</h2>
                                    <p className="topMonth-Year">2022</p>
                                </Styled.TopMonth>
                                <Styled.TopYear>
                                    <p className="topYear_title">Top year</p>
                                    <h2>2023</h2>
                                    <p className="topYear-Detail">96K sold so far</p>
                                </Styled.TopYear>
                            </Styled.TopTime>
                        </Styled.DBContent_2>

                        <Styled.DBContent_3>
                            <Styled.Shell>
                                <Styled.Shell_Title>
                                    <h2>Promotional</h2>
                                    <Styled.ViewAll>
                                        <p>View All</p>
                                        <ArrowRightOutlined />
                                    </Styled.ViewAll>
                                </Styled.Shell_Title>
                                <Styled.Shell_Content>
                                    <Styled.Shell_TableTitle>
                                        <p>Name</p>
                                        <p>Action</p>
                                    </Styled.Shell_TableTitle>
                                    {shellElements.map((ShellElement, index) => (
                                        <div className="shell_ele" key={index}>
                                            <div className="shell_eleName">
                                                <p>{ShellElement.name}</p>
                                            </div>
                                            <button className="shell_eleButton">View</button>
                                        </div>
                                    ))}
                                </Styled.Shell_Content>
                            </Styled.Shell>
                            <Styled.Shell>
                                <Styled.Shell_Title>
                                    <h2>Jewelry Type</h2>
                                    <Styled.ViewAll>
                                        <p>View All</p>
                                        <ArrowRightOutlined />
                                    </Styled.ViewAll>
                                </Styled.Shell_Title>
                                <Styled.Shell_Content>
                                    <Styled.Shell_TableTitle>
                                        <p>Name</p>
                                        <p>Action</p>
                                    </Styled.Shell_TableTitle>
                                    {jewelryElements.map((jewelryElements, index) => (
                                            <div className="shell_ele" key={index}>
                                                <div className="shell_eleName">
                                                    <p>{jewelryElements.name}</p>
                                                </div>
                                                <button className="shell_eleButton">View</button>
                                            </div>
                                        ))}
                                </Styled.Shell_Content>
                            </Styled.Shell>
                            <Styled.Shell>
                                <Styled.Shell_Title>
                                    <h2>Jewelry</h2>
                                    <Styled.ViewAll>
                                        <p>View All</p>
                                        <ArrowRightOutlined />
                                    </Styled.ViewAll>
                                </Styled.Shell_Title>
                                <Styled.Shell_Content>
                                    <Styled.Shell_TableTitle>
                                        <p>Name</p>
                                        <p>Action</p>
                                    </Styled.Shell_TableTitle>
                                    {ringShellElements.map((ringShellElements, index) => (
                                            <div className="shell_ele" key={index}>
                                                <div className="shell_eleName">
                                                    <p>{ringShellElements.name}</p>
                                                </div>
                                                <button className="shell_eleButton">View</button>
                                            </div>
                                        ))}
                                </Styled.Shell_Content>
                            </Styled.Shell>
                        </Styled.DBContent_3>
                    </Styled.DBContent>
                </Styled.AdminPage>
            </Styled.AdminContainer>
        </>
    )
};

export default Dashboard;