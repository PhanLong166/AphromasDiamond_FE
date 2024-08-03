import * as Styled from "../ClientCaringPage/Feedback.styled";
import React, { useEffect, useState } from "react";
import {
  SearchOutlined,
} from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Rate,
  notification
} from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import { showFeedbacks, updateFeedback } from "@/services/feedBackAPI";


interface EditableCellProps {
  editing: boolean;
  dataIndex: string;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: any;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
        name={dataIndex.toString()}
        style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};



const Feedback = () => {
  const [form] = Form.useForm();
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [api, contextHolder] = notification.useNotification();

  
  type NotificationType = "success" | "info" | "warning" | "error";

  const openNotification = (
    type: NotificationType,
    method: string,
    error: string
  ) => {
    api[type]({
      message: type === "success" ? "Notification" : "Error",
      description:
        type === "success" ? `${method} manager successfully` : error,
    });
  };

  
  const fetchData = async () => {
    try {
      const response = await showFeedbacks();
      const { data } = response.data;

      const formattedFeedbacks = data
      .filter((feedback: any) => (feedback.IsActive))
      .map((feedback: any) => ({
        key: feedback.FeedbackID,
        feedbackID: feedback.FeedbackID,
        stars: feedback.Stars,
        comment: feedback.Comment,
        commentTime: feedback.CommentTime,
        diamondID: feedback.DiamondID,
        account: feedback.account.Name,
      }));
      setFeedbacks(formattedFeedbacks);
    } catch (error) {
      console.error("Failed to fetch types:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleDelete = async (feedbackID: number) => {
    try {
      const response = await updateFeedback(feedbackID, {
        IsActive: false,
      });
      console.log("Delete Response:", response.data);
      if (response.status === 200) {
        openNotification("success", "Delete", "");
        fetchData();
      } else {
        openNotification("error", "Delete", "Failed to delete diamond.");
      }
    } catch (error: any) {
      console.error("Failed to delete diamond:", error);
      openNotification("error", "Delete", error.message);
    }
  };


  const columns: TableColumnsType<any> = [
    {
      title: "ID",
      dataIndex: "feedbackID",
      sorter: (a, b) => parseInt(a.feedbackID) - parseInt(b.feedbackID),
    },
    {
      title: "Date",
      dataIndex: "commentTime",
      defaultSortOrder: "descend",
      sorter: (a, b) => new Date(a.commentTime).getTime() - new Date(b.commentTime).getTime(),
      render: (date) => new Date(date).toLocaleDateString(),
    },    
    {
      title: "Product Name",
      dataIndex: "diamondID",
    },
    {
      title: "Customer Name",
      dataIndex: "account",
    },
    {
      title: "Comment",
      dataIndex: "comment",
    },
    {
      title: "Star",
      dataIndex: "stars",
      sorter: (a, b) => a.stars - b.stars,
      render: (_, record) => <Rate disabled defaultValue={record.stars} />
    },
    {
      title: "Delete",
      dataIndex: "delete",
      className: "TextAlign",
      render: (_: unknown, record: any) =>
        feedbacks.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const [searchText, setSearchText] = useState("");

  const onSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  return (
    <>
    {contextHolder}
    <Styled.GlobalStyle/>
      <Styled.FeedbackAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          {/* <ClientCaringMenu /> */}
          <Styled.TitlePage>
            <h1>Client Caring</h1>
            <p>Advice to customers</p>
          </Styled.TitlePage>

          <Styled.AdPageContent>
          <Styled.AdPageContent_Head>
              <Styled.SearchArea>
                <Input
                  className="searchInput"
                  type="text"
                  // size="large"
                  placeholder="Search here..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  prefix={<SearchOutlined className="searchIcon" />}
                />
              </Styled.SearchArea>
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>

              <Form form={form} component={false}>
                <Table
                  components={{
                    body: {
                      cell: EditableCell,
                    },
                  }}
                  bordered
                  dataSource={feedbacks}
                  columns={columns}
                  rowClassName="editable-row"
                  pagination={{
                    // onChange: cancel,
                    pageSize: 6,
                  }}
                />
              </Form>
            </Styled.AdminTable>

            
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.FeedbackAdminArea>
    </>
  );
};

export default Feedback;
