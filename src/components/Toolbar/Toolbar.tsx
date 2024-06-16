import { ToolbarProps } from "./Toolbar.type";
import * as Styled from './Toolbar.styled';
import { Avatar, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Toolbar = ({
    menu,
    avatar
}: ToolbarProps) => {
    return (
        <>
            <Styled.ToolbarAvatarWrapper>
                <Dropdown menu={{ items: menu}} arrow placement="bottomRight" trigger={['click']}>
                    {avatar ? (
                        <Avatar size={20} src={avatar} alt="avatar"/>
                    ) : (
                        <Avatar size={20} icon={<UserOutlined/>} />
                    )}
                </Dropdown>
            </Styled.ToolbarAvatarWrapper>
        </>
    )
}

export default Toolbar;