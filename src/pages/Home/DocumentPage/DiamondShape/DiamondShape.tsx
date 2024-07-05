import { Layout, Anchor } from "antd";
import { Container } from "./DiamondShape.styled";
import config from "@/config";
import { useNavigate } from "react-router-dom";
import MenuDoc from "@/components/MenuDoc/MenuDoc";

const { Content, Sider } = Layout;
const { Link } = Anchor;

function DiamondShape() {
  const navigate = useNavigate();
  return (
    <Container className="container">
      <Layout style={{ background: "#fff" }}>
        <Sider className="sider" width={260}>
          <MenuDoc />
        </Sider>
        <Layout className="layout" style={{ width: "50%" }}>
          <h1 className="header">Diamond Shape</h1>
          <p className="header subtitle">
            Diamond shape refers to the outline and form of a diamond after it
            has been cut and polished.
          </p>
          <Content>
            <hr className="hr" />
            <div id="section1">
              <p className="para">
                The term "diamond shape" refers to the physical and visual shape
                of the diamond. Each shape has unique attributes influencing the
                diamond's overall appearance and brilliance. When purchasing a
                diamond, customers typically consider its shape as one of the
                primary factors. Diamond cut and shape are often confused and
                used interchangeably, but they are two distinct concepts.
                Diamond cut refers to a diamond's proportions, symmetry, facets,
                and reflective qualities. On the other hand, diamond shape
                refers to a diamond's overall outline or external appearance
                when viewed from above.
              </p>
              <p className="para">
                There are various diamond shapes, each possessing its distinct
                characteristics. However, the round brilliant-cut diamond is the
                most popular and traditional shape. Additionally, there are
                fancy-shaped diamonds, including the princess cut, emerald cut,
                cushion cut, Asscher cut, pear cut, heart cut, oval cut,
                marquise cut, and radiant cut diamonds. These fancy-shaped
                diamonds are highly sought-after for engagement rings and fine
                jewelry due to their unique and breathtaking shapes.
              </p>
              <p className="para">
                Alternative shapes such as octagonal diamonds, trapezoids,
                baguettes, half-moon, and trillion-cut diamonds are gaining
                popularity recently because they create beautiful and
                distinctive designs.
              </p>
              {/* <div className="content tip para">
                MEET THE EXPERT
                <ul style={{ listStyle: "initial" }} className="detail">
                  <li></li>
                  <li></li>
                </ul>
              </div> */}

              {/* <div>
                <p>
                  RELATED: {""}
                  <span
                    className="here"
                    onClick={() => navigate(config.routes.public.allProduct)}
                  >
                    Top 10 ...
                  </span>
                </p>
              </div> */}
            </div>
            <div id="section2">
              <h3>1. Round Cut Diamond</h3>
              <p className="para">
                The most popular and iconic shape of all time, brilliant round
                diamonds are the only perfectly symmetrical diamonds that offer
                an unmatched brilliance than any other shape. Round diamonds
                represent approximately 75% of all sold diamonds and have been
                researched (and developed) by gemologists more than any other
                diamond shape.
              </p>
              <p className="para">
                With nearly 60 facets, this shape boasts excellent light
                refraction properties and is renowned for its unrivaled fire and
                brilliance. Round-cut diamonds are a timeless and classic choice
                for diamond engagement rings and other jewelry, and round
                diamonds are more highly valued than other diamond shapes.
              </p>
              <h4>Depth % Range for Round Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20124514.png?alt=media&token=412903c9-c001-48fa-91e7-29b521bbcd9c"
              ></img>
              <h4>Table % Range for Round Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20124535.png?alt=media&token=c200a6a1-f116-4062-9af6-70112b452f54"
              ></img>

              <div className="content tip para">
                <p>
                  A round diamond's brilliance is enhanced by its cut which is
                  determined by the use of scientific calculations performed by
                  expert diamond cutters. These calculations help create a
                  better cut, polish and symmetry, making a round diamond appear
                  even more brilliant. With other diamond shapes, settling for
                  lower grades of color or clarity usually means sacrificing
                  some of the beauty of the stone. Round diamonds, because they
                  are better at reflecting light and dispelling color, usually
                  maintain the same aesthetic appeal, even when they have a
                  lower clarity or color rating.
                </p>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.diamond)}
                >
                  AD's all round diamond
                </span>
              </p>
            </div>
            <div id="section3">
              <h3>2. Princess Cut Diamond</h3>
              <p className="para">
                Princess cut diamonds are known for their contemporary and
                eye-catching style and are the second most popular diamond
                shape, following round diamonds.
              </p>
              <p className="para">
                The most desirable princess-cut diamonds have a perfectly square
                shape, sharp angles, and similar facet patterns to brilliant
                round diamonds. They are highly versatile, as they can be set in
                various styles and metals, allowing for a range of stunning and
                unique looks.
              </p>
              <h4>Depth % Range for Princess Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20232054.png?alt=media&token=a16b7aec-a867-412b-aeee-2affaa62d5d3"
              ></img>
              <h4>Table % Range for Princess Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20232110.png?alt=media&token=f2da2a95-5707-4ad4-833d-14184b551e08"
              ></img>

              <div className="content tip para">
                <p>
                  Princess diamonds are a great choice not only because they
                  shine brightly, but because they tend to be less costly. When
                  cutting a princess shape, there is less rough diamond lost
                  because of the cutting process. In fact, the princess cut
                  diamond is one of the most efficiently cut shapes utilizing
                  more than 60% of the original stone’s weight. Relative to
                  other diamond shapes, this keeps costs significantly lower and
                  lowers the cost to you as the customer.
                </p>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.diamond)}
                >
                  AD's all princess diamond
                </span>
              </p>
            </div>
            <div id="section4">
              <h3>3. Asscher Cut Diamond</h3>
              <p className="para">
                Introduced in 1902 by renowned diamond cutter Joseph Asscher,
                the Asscher diamond shape utilizes many of the same cutting
                techniques as the emerald cut. Their uniquely angled and cropped
                corners set Asscher cut diamonds apart, creating a timeless
                look. Moreover, Asscher cut diamonds often exhibit more
                brilliance than emerald cut diamonds.
              </p>
              <p className="para">
                Asscher cut diamonds are popular for vintage and Art
                Deco-inspired engagement rings and other diamond jewelry pieces.
              </p>
              <h4>Depth % Range for Asscher Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20232426.png?alt=media&token=2ea85fc5-0b50-4cbf-9236-6352db4461f3"
              ></img>
              <h4>Table % Range for Asscher Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20232435.png?alt=media&token=a83ea7cc-4260-4f2d-8d41-b78c03985b5a"
              ></img>

              <div className="content tip para">
                <p>
                  Many diamond experts compare the facets of a properly cut
                  Asscher to a seemingly endless hallway lined with reflective
                  mirrors, radiating a great deal of shine. Although new cutting
                  techniques are always emerging to optimize the sparkle of the
                  Asscher cut diamond, the same basic characteristics have
                  endured for more than a century. Since the cutting style of an
                  Asscher makes imperfections more visible, it is recommended to
                  choose a diamond clarity grade of SI1 or higher.
                </p>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.diamond)}
                >
                  AD's all asscher diamond
                </span>
              </p>
            </div>
            <div id="section5">
              <h3>4. Radiant Cut Diamond</h3>
              <p className="para">
                Relatively new to the jewelry industry, radiant cut diamonds
                were introduced over 20 years ago. This diamond shape is a
                modified square shape, a stunning hybrid of the elegant emerald
                cut diamond and the traditional round diamond. Radiant cut
                diamonds are available in a range of rectangular and square
                shapes (and even in-between sizes), each with its
                length-to-width ratio.
              </p>
              <p className="para">
                As the name suggests, radiant cut diamonds emit a beautiful and
                memorable glow.
              </p>
              <h4>Depth % Range for Radiant Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20232737.png?alt=media&token=f0bfcdbc-c77f-4833-bf5a-0595055738c4"
              ></img>
              <h4>Table % Range for Radiant Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20232748.png?alt=media&token=afa32d6b-292c-464d-9766-8248a3b70bc1"
              ></img>

              <div className="content tip para">
                <p>
                  When shopping for a radiant cut we suggest you choose an H or
                  I diamond color rating or higher because this shape can show
                  more color when compared to a Round cut. Mixed cuts, including
                  the radiant, have been gaining popularity since their
                  invention. These cuts preserve more of the rough stone than
                  brilliant cuts, giving you more diamond per dollar spent. On
                  diamond grading reports, radiants are often categorized as
                  “Cut Cornered Modified Brilliant” shapes.
                </p>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.diamond)}
                >
                  AD's all radiant diamond
                </span>
              </p>
            </div>
            <div id="section6">
              <h3>5. Cushion Cut Diamond</h3>
              <p className="para">
                First introduced to the jewelry market in the early 1800s, the
                cushion cut diamond is rich with diamond history. They were
                initially known as the "old mine cut," the cushion diamond
                served as the standard diamond shape for many years. This
                classic cut features a square or rectangular shape with soft,
                rounded corners and sides, resembling a pillow or cushion.
              </p>
              <p className="para">
                Cushion cut diamonds remain popular as they are often considered
                a romantic and vintage-inspired alternative to the brilliant
                round diamond.
              </p>
              <h4>Depth % Range for Cushion Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20233112.png?alt=media&token=22a87fa3-c7a6-44fc-973b-b8abc7165f8c"
              ></img>
              <h4>Table % Range for Cushion Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20233121.png?alt=media&token=a8c387d0-e5e9-468d-9a2a-02817dd6ad16"
              ></img>

              <div className="content tip para">
                <p>
                  Nowadays, an even newer method is used when cutting cushion
                  diamonds that add an extra row of facets to the pavilion or
                  bottom of the diamond. Cushions cut this way are generally
                  referred to as a “modified cushion brilliant” on diamond
                  grading reports. Adding a modern flair, they can sometimes
                  look like crushed ice with an enhanced sparkle. Some diamond
                  cutters even use a hybrid of the two methods (larger facets),
                  which decreases the “crushed ice” appearance but retains some
                  of the modified sparkles.
                </p>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.diamond)}
                >
                  AD's all cushion diamond
                </span>
              </p>
            </div>
            <div id="section7">
              <h3>6. Emerald Cut Diamond</h3>
              <p className="para">
                Emerald cut diamonds are the most popular step-cut shape,
                typically rectangular with cut corners and a large, open table.
                Emerald-cut diamonds are distinguished by their beveled corners
                and step-cut facets, which produce a unique, geometric "hall of
                mirrors" effect.
              </p>
              <p className="para">
                Emerald cut diamonds are rare, more transparent than other
                diamond shapes, and often require higher standards of clarity.
              </p>
              <h4>Depth % Range for Emerald Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20234027.png?alt=media&token=3964c25c-03e7-4853-899c-ddaa4aa2402d"
              ></img>
              <h4>Table % Range for Emerald Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20234038.png?alt=media&token=c718cde6-9ff6-4eb2-81ed-3eb0afc3e13a"
              ></img>

              <div className="content tip para">
                <p>
                  Emerald cut diamonds are a popular choice among
                  budget-conscious jewelry consumers. The decreased number of
                  facets preserves more of the diamond’s rough weight when
                  cutting, making them less costly than a similarly weighted
                  round or princess stone. Emerald diamonds look best in rings
                  that highlight their clarity and size, such as three stone
                  settings or settings with small accent diamonds. Emerald cuts,
                  because of their wider shape, look great on long, slender
                  fingers and can actually look larger than they actually are.
                </p>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.diamond)}
                >
                  AD's all emerald diamond
                </span>
              </p>
            </div>
            <div id="section8">
              <h3>7. Marquise Cut Diamond</h3>
              <p className="para">
                The marquise cut is rumored to have been specially developed for
                King Louis XIV of France, who desired a diamond resembling
                Marquise de Pompadour's smile. The marquise shape features an
                elongated shape with pointed ends resembling a football.
              </p>
              <p className="para">
                The marquise cut diamond is renowned for its unique and
                flattering shape, which imparts a dramatically beautiful appeal.
                This romantic diamond shape offers striking elegance that will
                withstand the test of time.
              </p>
              <h4>Depth % Range for Marquise Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20234255.png?alt=media&token=f92956cb-1b0a-463a-9f6e-d1c05d687652"
              ></img>
              <h4>Table % Range for Marquise Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20234303.png?alt=media&token=fb2fedf5-f9ab-490a-a915-fe252df6355c"
              ></img>

              <div className="content tip para">
                <p>
                  There is no denying the timeless elegance of a marquise cut
                  diamond. Due to their extended length, marquise diamonds can
                  appear larger than other diamond shapes with the same carat
                  weight or size. Boasting a brilliant 58 facets, the shape
                  shines with substantial fire and sparkle. The marquise cut’s
                  flattering effect creates the illusion of long, slender
                  fingers. Due to their vintage flair, marquise diamonds are
                  popular in vintage heirloom jewelry and look particularly
                  stunning in accessory pieces, such as pendants, brooches or
                  necklaces.
                </p>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.diamond)}
                >
                  AD's all marquise diamond
                </span>
              </p>
            </div>
            <div id="section9">
              <h3>8. Oval Cut Diamond</h3>
              <p className="para">
                With the same number of facets as a round diamond, the oval
                diamond was introduced in the 1960s as a variation of the round
                diamond. The oval diamond is a popular choice for those seeking
                to maximize their budget, as its elongated shape creates the
                illusion of a larger diamond while emitting nearly the same
                brilliance and fire as the round diamond.
              </p>
              <p className="para">
                Oval cut diamonds are versatile diamond shapes that combine
                classic and modern styles.
              </p>
              <h4>Depth % Range for Oval Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20234654.png?alt=media&token=56664706-23e2-4b44-bf75-465d9bd8f81a"
              ></img>
              <h4>Table % Range for Oval Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20234704.png?alt=media&token=8ba543fa-c5d0-421c-bfa1-6163f316e2e9"
              ></img>

              <div className="content tip para">
                <p>
                  The oval cut diamond may exhibit a “bow-tie” effect across the
                  center of the stone. This darkened area can be seen in certain
                  angles of light and is not a feature desired by most buyers.
                  “Bow-ties” are more common in oval diamonds that are more
                  elongated (those with length to width ratios greater than 1.55
                  to 1) and in excessively deep or shallow stones. Additionally,
                  oval cuts are prone to showing color more easily, so we
                  suggest selecting a stone with an H color or higher. As
                  always, it is advisable to get a visual inspection on any
                  loose oval diamond prior to purchasing.
                </p>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.diamond)}
                >
                  AD's all oval diamond
                </span>
              </p>
            </div>
            <div id="section10">
              <h3>9. Pear Cut Diamond</h3>
              <p className="para">
                Known as the "teardrop diamond," the pear-cut diamond combines
                the characteristics of both a round and marquise shape. It
                features a rounded end and tapers to a point on the other,
                resembling the shape of a drop of water. This diamond shape was
                first created in the 1400s by a Flemish polisher named Lodewyk
                van Berquem.
              </p>
              <p className="para">
                Pear cut diamonds are a modified brilliant cut and are renowned
                for their versatility. Depending on the setting, they can exude
                a modern or vintage aesthetic. Additionally, the shape of a pear
                cut diamond creates the illusion of longer and slimmer fingers
                when worn.
              </p>
              <h4>Depth % Range for Pear Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20234858.png?alt=media&token=b0ed3420-b315-4303-a87a-5ca8005d5d88"
              ></img>
              <h4>Table % Range for Pear Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20234906.png?alt=media&token=5e5b66ec-682a-4865-82a8-a4b19b34383d"
              ></img>

              <div className="content tip para">
                <p>
                  In an ideal pear cut diamond, the point lines up with the apex
                  of the rounded arc, and both sides of the arc are symmetrical.
                  Similar to the elongated shapes of the marquise and oval cuts,
                  pear cut diamonds that have larger length-to-width ratios are
                  prone to a darkening in the center of the stone that is
                  visible in a certain light. This “bow-tie” effect can be
                  viewed with the naked eye, so it is important to get a visible
                  inspection on your diamond before finalizing your purchase.
                </p>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.diamond)}
                >
                  AD's all pear diamond
                </span>
              </p>
            </div>
            <div id="section11">
              <h3>10. Heart Cut Diamond</h3>
              <p className="para">
                Heart-shaped diamonds are an unmistakable symbol of love and
                affection, making them an excellent choice for anniversary or
                engagement rings. Heart-shaped diamonds are among the most
                unique fancy shapes available.
              </p>
              <p className="para">
                Featuring a pointed cleft at the top and a rounded shape at the
                bottom, creating a heart-shaped diamond is one of the most
                challenging diamond cuts, and it demands great skill and
                dexterity from the diamond cutter.
              </p>
              <h4>Depth % Range for Heart Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20235054.png?alt=media&token=7a746383-f00e-4d5f-9f24-b83b721db92b"
              ></img>
              <h4>Table % Range for Heart Cut Diamonds</h4>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20235101.png?alt=media&token=2bd9db17-ea54-4a23-8ba2-21605a0d1430"
              ></img>

              <div className="content tip para">
                <p>
                  Nothing says “love” like a heart, and that is what makes the
                  heart shapeespecially popular in an anniversary gift or
                  engagement ring. Cut similarly to the pear shape, the heart
                  features two rounded edges divided by a single cleft, rather
                  than a single rounded arc. The heart cut is often featured in
                  a simple ring setting to accentuate its unique qualities. The
                  heart shape is best viewed in a diamond larger than .5 carats,
                  as it is difficult to see the details of the cleft and point
                  in smaller stones. If you require a smaller diamond, we
                  recommend a bezel or 3-prong setting to better showcase the
                  heart’s unique shape.
                </p>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.diamond)}
                >
                  AD's all cushion diamond
                </span>
              </p>
            </div>
            <div>
              <p>
                Explore AD's all diamond{""}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.diamond)}
                >
                  here
                </span>
                :
              </p>
            </div>
            <img
              style={{ width: "100%" }}
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Fsnapedit_1719690260501.jpg?alt=media&token=989f1529-ffe6-4208-adb0-b0fd5263e096"
            ></img>
          </Content>
        </Layout>
        <Anchor className="anchor">
          <h6 className="in-this-article">IN THIS ARTICLE</h6>
          <Link href="#section2" title="01 Round Cut Diamond" />
          <Link href="#section3" title="02 Princess Cut Diamond" />
          <Link href="#section4" title="03 Asscher Cut Diamond" />
          <Link href="#section5" title="04 Radiant Cut Diamond" />
          <Link href="#section6" title="05 Cushion Cut Diamond" />
          <Link href="#section7" title="06 Emerald Cut Diamond" />
          <Link href="#section8" title="07 Marquise Cut Diamond" />
          <Link href="#section9" title="08 Oval Cut Diamond" />
          <Link href="#section10" title="09 Pear Cut Diamond" />
          <Link href="#section11" title="10 Heart Cut Diamond" />
        </Anchor>
      </Layout>
    </Container>
  );
}

export default DiamondShape;
