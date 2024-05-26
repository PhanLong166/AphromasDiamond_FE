import * as Styled from '../ProductPage/Material.styled';
import { Link } from 'react-router-dom';
import { SearchOutlined, FilterOutlined, DownOutlined, PlusCircleOutlined,
    ArrowLeftOutlined, ArrowRightOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Select } from 'antd';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import ProductMenu from '../../../components/Admin/ProductMenu/ProductMenu';

    const Material = () => {
        const items: MenuProps['items'] = [
            {
              label: <a href="/">Low to High</a>,
              key: '2',
            },
            {
                label: <a href="/">High to Low</a>,
                key: '3',
            }
          ];


            
        return(
            <>
                <Styled.ProductAdminArea>
                        <Sidebar/>
                        
                        <Styled.AdminPage>
                            <ProductMenu/>

                            <Styled.AdPageContent>
                                <Styled.AdPageContent_Head>
                                    <Styled.AdPageContent_HeadTop>
                                        <h2>Material</h2>
                                        <button>
                                            <PlusCircleOutlined />
                                            Add New Material
                                        </button>
                                    </Styled.AdPageContent_HeadTop>
                                    <Styled.AdPageContent_HeadBenefit>
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
                                    </Styled.AdPageContent_HeadBenefit>
                                </Styled.AdPageContent_Head>

                                <Styled.Pending_Table>
                                    <table>
                                        <tr>
                                            <th>No</th>
                                            <th>ID Material</th>
                                            <th>Material</th>
                                            <th>% gold</th>
                                            <th>Price per Gram</th>
                                            <th className='TextAlign'>Edit</th>
                                            <th className='TextAlign'>Delete</th>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td>#12345123</td>
                                            <td><input type="text" name="MaterialName" value="14K White Gold"/></td>
                                            <td><input type="text" name="PercentGold" value="58% gold"/></td>
                                            <td><input type="text" name="PriceGram" value="$43.91 USD"/></td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Save</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>#12345123</td>
                                            <td><input type="text" name="MaterialName" value="14K Yellow Gold"/></td>
                                            <td><input type="text" name="PercentGold" value="58% gold"/></td>
                                            <td><input type="text" name="PriceGram" value="$43.91 USD"/></td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Save</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>#12345123</td>
                                            <td><input type="text" name="MaterialName" value="14K Rose Gold"/></td>
                                            <td><input type="text" name="PercentGold" value="58% gold"/></td>
                                            <td><input type="text" name="PriceGram" value="$43.91 USD"/></td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Save</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td>#12345123</td>
                                            <td><input type="text" name="MaterialName" value="Platinum"/></td>
                                            <td><input type="text" name="PercentGold" value="0% gold"/></td>
                                            <td><input type="text" name="PriceGram" value="$33.32 USD"/></td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Save</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>#12345123</td>
                                            <td><input type="text" name="MaterialName" value="18K White Gold"/></td>
                                            <td><input type="text" name="PercentGold" value="75% gold"/></td>
                                            <td><input type="text" name="PriceGram" value="$33.32 USD"/></td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Save</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>06</td>
                                            <td>#12345123</td>
                                            <td><input type="text" name="MaterialName" value="18K White Gold"/></td>
                                            <td><input type="text" name="PercentGold" value="75% gold"/></td>
                                            <td><input type="text" name="PriceGram" value="$33.32 USD"/></td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Save</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                    </table>
                                </Styled.Pending_Table>
                                
                                <Styled.AdPageContent_Foot>
                                    <Styled.PageNum>
                                        <p className="nowPage">1</p>
                                        <p>of</p>
                                        <p className="lastPage">5</p>
                                    </Styled.PageNum>
                                    <Styled.MovePage>
                                        <button className="backArrow">
                                            <ArrowLeftOutlined />
                                        </button>
                                        <button className="nextArrow">
                                            <ArrowRightOutlined />
                                        </button>
                                    </Styled.MovePage>
                                </Styled.AdPageContent_Foot>
                            </Styled.AdPageContent>
                        </Styled.AdminPage>
                    </Styled.ProductAdminArea> 
            </>
    )
};

export default Material; 