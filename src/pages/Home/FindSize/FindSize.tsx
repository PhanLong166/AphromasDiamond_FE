// import React from "react";
import { Layout, Menu, Typography, Table} from "antd";

const { Header, Content, Sider } = Layout;
const { Title, Paragraph } = Typography;
// const { Link } = Anchor;

const menuItems = [
  {
    label: "Diamond Education",
    key: "diamond-education",
    children: [
      { label: "Learn about the 4Cs", key: "learn-4cs" },
      { label: "Diamond Certification", key: "diamond-certification" },
    ],
  },
  { label: "Buying Guide", key: "buying-guide" },
  { label: "Metal Education", key: "metal-education" },
  { label: "Find Your Ring Size", key: "find-ring-size" },
  { label: "Earrings Education", key: "earrings-education" },
  { label: "Necklaces Education", key: "necklaces-education" },
  { label: "Bracelets Education", key: "bracelets-education" },
  { label: "Engagement Ring Education", key: "engagement-ring-education" },
  { label: "Wedding Ring Education", key: "wedding-ring-education" },
];

function FindSize() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={250} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["find-ring-size"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {menuItems.map((item) => {
            if (item.children) {
              return (
                <Menu.SubMenu key={item.key} title={item.label}>
                  {item.children.map((subItem) => (
                    <Menu.Item key={subItem.key}>{subItem.label}</Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            } else {
              return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
            }
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Title level={2} style={{ textAlign: "center" }}>
            HƯỚNG DẪN CÁCH ĐO NI CHO NHẪN
          </Title>
        </Header>
        <Content style={{ padding: "0", background: "#fff" }}>
          {/* <Anchor>
            <Link href="#section1" title="Giới thiệu về việc đo size nhẫn" />
            <Link href="#section2" title="Chuẩn bị trước khi đo size nhẫn" />
            <Link href="#section3" title="Các phương pháp đo size nhẫn" />
            <Link href="#section4" title="Lưu ý khi đo size nhẫn" />
            <Link href="#section5" title="Bảng quy đổi size nhẫn" />
            <Link href="#section6" title="Liên hệ hỗ trợ" />
            <Link href="#section7" title="Banner" />
          </Anchor> */}
          {/* <Divider /> */}
          <hr style={{ marginBottom: "30px" }} />
          <div id="section1">
            <Title level={3}>1. Giới thiệu về việc đo size nhẫn</Title>
            <Paragraph>
              Việc đo size nhẫn chính xác rất quan trọng để đảm bảo chiếc nhẫn
              vừa vặn và thoải mái khi đeo. Một chiếc nhẫn quá chật có thể gây
              khó chịu và khó tháo ra, trong khi một chiếc nhẫn quá rộng dễ bị
              rơi mất. Đo size nhẫn đúng cách giúp bạn tránh những phiền toái
              này và tận hưởng trang sức của mình một cách tốt nhất.
            </Paragraph>
          </div>
          <div id="section2">
            <Title level={3}>2. Chuẩn bị trước khi đo size nhẫn</Title>
            <Paragraph>
              Trước khi bắt đầu đo size nhẫn, bạn cần chuẩn bị các dụng cụ sau:
            </Paragraph>
            <ul>
              <li>Dây hoặc giấy: để quấn quanh ngón tay.</li>
              <li>Thước dây: để đo chiều dài đoạn dây hoặc giấy.</li>
              <li>Thước đo nhẫn chuyên dụng: nếu có.</li>
              <li>Bảng size nhẫn: để tra cứu size từ số đo.</li>
              <li>Bút và giấy: để ghi lại kết quả đo.</li>
            </ul>
            <Paragraph>
              Lưu ý: Đo size nhẫn vào cuối ngày khi ngón tay ở kích thước lớn
              nhất và tránh đo khi tay quá lạnh hoặc quá nóng.
            </Paragraph>
          </div>
          <div id="section3">
            <Title level={3}>3. Các phương pháp đo size nhẫn</Title>
            <Title level={4}>Phương pháp sử dụng dây hoặc giấy</Title>
            <Paragraph>
              Quấn dây hoặc giấy quanh phần dày nhất của ngón tay, thường là
              phần gần khớp ngón tay. Đánh dấu điểm giao nhau của dây hoặc giấy.
              Tháo dây hoặc giấy ra và đo chiều dài từ điểm đầu đến điểm đánh
              dấu bằng thước dây. Tra cứu chiều dài vừa đo trong bảng quy đổi để
              tìm size nhẫn tương ứng.
            </Paragraph>
            <Title level={4}>
              Phương pháp sử dụng thước đo nhẫn chuyên dụng
            </Title>
            <Paragraph>
              Chọn một chiếc thước đo nhẫn có sẵn. Đeo từng kích thước của thước
              đo lên ngón tay cho đến khi tìm được chiếc nhẫn vừa vặn nhất. Đọc
              số size ghi trên thước đo nhẫn để biết kích thước chính xác.
            </Paragraph>
            <Title level={4}>Phương pháp sử dụng nhẫn cũ</Title>
            <Paragraph>
              Lấy một chiếc nhẫn cũ vừa ngón tay cần đo. Đo đường kính bên trong
              của chiếc nhẫn bằng thước kẻ hoặc thước dây. Sử dụng bảng quy đổi
              để tìm size nhẫn từ đường kính đo được.
            </Paragraph>
          </div>
          <div id="section4">
            <Title level={3}>4. Lưu ý khi đo size nhẫn</Title>
            <Paragraph>
              Tránh kéo dây hoặc giấy quá căng khi đo. Đo nhiều lần để đảm bảo
              kết quả chính xác. Nếu khớp ngón tay lớn hơn phần thân ngón tay,
              đo cả hai và chọn size trung gian hoặc lớn hơn một chút. Mỗi ngón
              tay có thể có kích thước khác nhau, vì vậy hãy đo riêng từng ngón
              nếu cần.
            </Paragraph>
          </div>
          <div id="section5">
            <Title level={3}>5. Bảng quy đổi size nhẫn</Title>
            <Paragraph>
              Bảng quy đổi từ chiều dài dây hoặc giấy sang size nhẫn
            </Paragraph>
            <Table
              dataSource={[
                { key: "1", length: "45 mm", size: "3" },
                { key: "2", length: "46 mm", size: "3.5" },
                // Add more rows as needed
              ]}
              columns={[
                {
                  title: "Chiều dài dây hoặc giấy (mm)",
                  dataIndex: "length",
                  key: "length",
                },
                { title: "Size nhẫn", dataIndex: "size", key: "size" },
              ]}
              pagination={false}
            />
          </div>
          <div id="section6">
            <Title level={3}>6. Liên hệ hỗ trợ</Title>
            <Paragraph>
              Nghiên cứu kỹ và stock sẵn 3 size nhẫn phổ biến với hầu hết số đo
              ngón tay các bạn nữ ở Việt Nam theo 3 size S, M, L với hướng dẫn
              quy đổi cụ thể tùy từng mẫu nhẫn. Nếu còn chưa chắc chắn về size
              nhẫn của mình, bạn hãy liên hệ với đội ngũ tư vấn nhà Cara Luna
              hoặc đến hệ thống cửa hàng của Cara Luna để được trực tiếp đo size
              phù hợp nhất:
            </Paragraph>
            <ul>
              <li>Email</li>
              <li>Hotline</li>
            </ul>
          </div>
          <div id="section7">
            <Title level={3}>Banner</Title>
            <Paragraph>
              <a href="/all-rings">ALL RING</a>
            </Paragraph>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default FindSize;
