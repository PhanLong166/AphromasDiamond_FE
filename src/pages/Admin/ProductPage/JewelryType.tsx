import * as Styled from '../ProductPage/JewelryType.styled';
import { Link } from 'react-router-dom';
import { SearchOutlined, FilterOutlined, DownOutlined, PlusCircleOutlined,
    ArrowLeftOutlined, ArrowRightOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Select } from 'antd';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import ProductMenu from '../../../components/Admin/ProductMenu/ProductMenu';

    const RingShell = () => {
        const items: MenuProps['items'] = [
            {
              label: <a href="/" style={{  }}>A - Z</a>,
              key: '0',
            },
            {
              label: <a href="/">Z - A</a>,
              key: '1',
            },
            // {
            //   type: 'divider',
            // },
          ];

          const handleChange = (value: string) => {
            console.log(`selected ${value}`);
          };

          const shelltype = (
            <Space wrap>
              <Select
                defaultValue="ring"
                className="custom-select"
                style={{ width: 120, background: "#FFF7E8", color: "#102C57" }}
                onChange={handleChange}
                options={[
                  { value: "ring", label: "Ring" },
                  { value: "necklace", label: "Necklace" },
                  { value: "earring", label: "Earring" },
                  { value: "bracelet", label: "Bracelet" },
                  { value: "anklet", label: "Anklet" },
                  { value: "bangle", label: "Bangle" },
                  { value: "choker", label: "Choker" },
                  { value: "pendant", label: "Pendant" },
                ]}
              />
            </Space>
          );


          const material = (
            <Space wrap>
              <Select
                defaultValue="14K White Gold"
                className="custom-select"
                style={{ width: 120, background: "#FFF7E8", color: "#102C57" }}
                onChange={handleChange}
                options={[
                  { value: "14Kwhite", label: "14K White Gold" },
                  { value: "14Kyellow", label: "14K Yellow Gold" },
                  { value: "14Krose", label: "14K Rose Gold" },
                  { value: "18Kwhite", label: "18K White Gold" },
                  { value: "18Kyellow", label: "18K Yellow Gold" },
                  { value: "18Krose", label: "18K Rose Gold" },
                  { value: "platinum", label: "Platinum" },
                ]}
              />
            </Space>
          );
          

            
        return(
            <>
                <Styled.ProductAdminArea>
                        <Sidebar/>
                        
                        <Styled.AdminPage>
                            <ProductMenu/>

                            <Styled.OrderContent>
                                <Styled.OrderContent_Head>
                                    <Styled.OrderContent_HeadTop>
                                        <h2>Jewelry Type</h2>
                                        <button>
                                            <PlusCircleOutlined />
                                            Add New Jewelry Type
                                        </button>
                                    </Styled.OrderContent_HeadTop>
                                    <Styled.OrderContent_HeadBenefit>
                                        <Styled.SearchArea>
                                            <input className="searchInput" type="text" />
                                            <SearchOutlined />
                                        </Styled.SearchArea>
                                        <button>
                                            <Dropdown menu={{ items }} trigger={['click']}>
                                                <a onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                    Sort by
                                                    <DownOutlined />
                                                </Space>
                                                </a>
                                            </Dropdown>
                                        </button>
                                        
                                        <button>
                                            <FilterOutlined /> 
                                            Filters
                                        </button>
                                    </Styled.OrderContent_HeadBenefit>
                                </Styled.OrderContent_Head>

                                <Styled.Pending_Table>
                                    <table>
                                        <tr>
                                            <th>No</th>
                                            <th>ID</th>
                                            <th>Jewelry Type</th>
                                            <th className='TextAlign'>Action</th>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td>#12345123</td>
                                            <td><input type="text" name="JewelryType" value="Ring"/></td>
                                            <td className='TextAlign'><EditOutlined />  |  <DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>#12345123</td>
                                            <td><input type="text" name="JewelryType" value="Necklace"/></td>
                                            <td className='TextAlign'><EditOutlined />  |  <DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>#12345123</td>
                                            <td><input type="text" name="JewelryType" value="Earring"/></td>
                                            <td className='TextAlign'><EditOutlined />  |  <DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td>#12345123</td>
                                            <td><input type="text" name="JewelryType" value="Bracelet"/></td>
                                            <td className='TextAlign'><EditOutlined />  |  <DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>#12345123</td>
                                            <td><input type="text" name="JewelryType" value="Anklet"/></td>
                                            <td className='TextAlign'><EditOutlined />  |  <DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>06</td>
                                            <td>#12345123</td>
                                            <td><input type="text" name="JewelryType" value="Bangle"/></td>
                                            <td className='TextAlign'><EditOutlined />  |  <DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                    </table>
                                </Styled.Pending_Table>
                                
                                <Styled.OrderContent_Foot>
                                    <Styled.PageNum>
                                        <p className="nowPage">1</p>
                                        <p>of</p>
                                        <p className="lastPage">2</p>
                                    </Styled.PageNum>
                                    <Styled.MovePage>
                                        <button className="backArrow">
                                            <ArrowLeftOutlined />
                                        </button>
                                        <button className="nextArrow">
                                            <ArrowRightOutlined />
                                        </button>
                                    </Styled.MovePage>
                                </Styled.OrderContent_Foot>
                            </Styled.OrderContent>
                        </Styled.AdminPage>
                    </Styled.ProductAdminArea> 
            </>
    )
};

export default RingShell; 