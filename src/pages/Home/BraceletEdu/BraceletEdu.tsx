import { Layout, Anchor } from "antd";
import { Container } from "./BraceletEdu.styled";
import MenuDoc from "@/components/MenuDoc/MenuDoc";
import config from "@/config";
import { useNavigate } from "react-router-dom";

const { Content, Sider } = Layout;
const { Link } = Anchor;

function BraceletEdu() {
  const navigate = useNavigate();
  return (
    <Container className="container">
      <Layout style={{ background: "#fff" }}>
        <Sider className="sider" width={260}>
          <MenuDoc />
        </Sider>
        <Layout className="layout" style={{ width: "50%" }}>
          <h1 className="header">Bracelets: Education & Buying Tips</h1>
          <p className="header subtitle">
            Bracelets are classic accessories anyone can wear. Learn about
            different bracelet styles, designs, chain types and buying tips.
          </p>
          <Content>
            <hr className="hr" />
            <div id="section1">
              <p className="para">
                Discover the elegance and allure of diamond bracelets with us.
                From their rich historical roots as symbols of prestige to their
                modern-day embodiment of sophistication, diamond bracelets hold
                a timeless appeal. Explore their craftsmanship, significance,
                and care tips here, guiding you towards choosing and maintaining
                a treasured piece of jewelry.
              </p>
            </div>
            <div id="section2">
              <h3>General Introduction to Bracelets</h3>
              <div>
                <h4>1. Concept and History</h4>
                <p className="para">
                  Bracelets have adorned wrists throughout history, serving as
                  symbols of wealth, status, and personal style. From ancient
                  civilizations to modern fashion trends, bracelets have evolved
                  from simple adornments made of natural materials to intricate
                  pieces crafted from precious metals and gemstones. They are
                  worn for various purposes, from cultural traditions to
                  personal expressions of love and friendship.
                </p>
              </div>
              <div>
                <h4>2. Importance:</h4>
                <p className="para">
                  Bracelets hold significant meaning in the world of jewelry,
                  symbolizing unity, protection, and personal milestones. They
                  complement an outfit, enhance a personal style, and can be
                  cherished heirlooms passed down through generations. Whether
                  worn alone as a statement piece or stacked for a layered look,
                  bracelets add a touch of elegance and meaning to any occasion.
                </p>
              </div>
            </div>
            <div id="section3">
              <h3>Types of Bracelet</h3>
              <div
                className="content tip para"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  style={{ width: "28%", marginRight: "20px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FChain.png?alt=media&token=b4087950-7cff-40f8-aea9-5d9620bc29ce"
                  alt="Chains"
                />
                <div>
                  <h4>Chains</h4>
                  <p>
                    This is the classic bracelet. You''ll find a variety of
                    chain designs, like the traditional round-link rolo or wheat
                    chain, in a variety of metals like sterling silver, 18k
                    gold, and platinum.
                  </p>
                </div>
              </div>
              <div
                className="content tip para"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  style={{ width: "28%", marginRight: "20px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FBangle.png?alt=media&token=0c916b00-060f-4a98-95a2-5f2e7edf8d42"
                  alt="Bangle"
                />
                <div>
                  <h4>Bangle</h4>
                  <p>
                    A bangle bracelet can be worn by itself for a simple look,
                    or can be combined with several other bangles. Bangles draw
                    the eye with metallic shine, and several bangles clinking
                    together make a pleasant sound.
                  </p>
                </div>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.allProduct)}
                >
                  AD's ALL BRACELETS
                </span>
              </p>
            </div>
            <div id="section4">
              <h3>Diamond Quality</h3>
              <h4>4Cs of Diamonds:</h4>
              <ul style={{ listStyle: "initial" }} className="detail para">
                <li>
                  Cut: The perfection of a diamond's cut directly affects its
                  brilliance and sparkle. A well-cut diamond will reflect light
                  optimally, creating a dazzling effect.
                </li>
                <li>
                  Color: Diamond color is graded from D (completely colorless)
                  to Z (light yellow). Colorless diamonds (D-F) are considered
                  the rarest and most valuable.
                </li>
                <li>
                  Clarity: Diamond clarity is determined by the number and
                  location of inclusions or blemishes within the diamond.
                  Diamonds with high clarity (FL, IF) are very rare and highly
                  valued.
                </li>
                <li>
                  Carat: The weight of a diamond is measured in carats. One
                  carat equals 200 milligrams. Larger diamonds typically have
                  higher value, but other factors such as cut, color, and
                  clarity also impact the overall value.
                </li>
              </ul>
              <p>
                DETAILS:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.cs)}
                >
                  LEARN ABOUT THE 4Cs
                </span>
              </p>
            </div>
            <div id="section5">
              <h3>Chain Types</h3>
              <div className="content tip para">
                <img
                  style={{ width: "50%", marginRight: "20px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FBEADCHAIN.png?alt=media&token=f2d425fb-468d-4368-99c8-e459df9d8517"
                  alt="BEAD"
                />
                <div>
                  <h4>BALL / BEAD CHAIN</h4>
                  <p>
                    The Ball chain, historically worn from the mid-19th century
                    by military personnel with stainless steel Dog Tags, has
                    evolved into a popular jewelry style. It features spherical
                    beads threaded through a single wire, now available in
                    diverse designs including diamond-cut, oval shapes,
                    engraved, spiral, and finishes like 9ct yellow gold and 9ct
                    rose gold.
                  </p>
                </div>
              </div>
              <div className="content tip para">
                <img
                  style={{ width: "50%", marginRight: "20px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FBYZANTINECHAIN.png?alt=media&token=4c9b242e-44da-4a27-ae89-b8c456de35b8"
                  alt="BYZANTINE"
                />
                <div>
                  <h4>BYZANTINE CHAIN</h4>
                  <p>
                    The Byzantine chain features an intricate, interlocking
                    pattern that is both flexible and strong. Its luxurious,
                    detailed design makes it a standout choice for elegant
                    jewelry.
                  </p>
                </div>
              </div>
              <div className="content tip para">
                <img
                  style={{ width: "50%", marginRight: "20px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FCUBANCHAIN.png?alt=media&token=001778c2-13f4-48d4-acc2-7ea01ed2d4a6"
                  alt="CUBAN"
                />
                <div>
                  <h4>CUBAN CHAIN</h4>
                  <p>
                    The Cuban chain is a classic, durable chain known for its
                    thick, interlocking links that lay flat. It's bold and
                    stylish, perfect for both casual and formal wear.
                  </p>
                </div>
              </div>
              <div className="content tip para">
                <img
                  style={{ width: "50%", marginRight: "20px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FMARINACHAIN.png?alt=media&token=aef3125a-a520-4f04-8fac-03fc044d4625"
                  alt="MARINA"
                />
                <div>
                  <h4>MARINA CHAIN</h4>
                  <p>
                    Taking its origin from Maritime the Marina chain is another
                    timeless classic and also known as an Anchor or Mariner
                    chain easily characterised by a pattern of oval shaped links
                    which consist of a single vertical bar in the middle of each
                    link. Just like the Curb and Figaro chain the links are then
                    hammered and diamond cut to create a stunning flat linked
                    chain.
                  </p>
                </div>
              </div>
              <div className="content tip para">
                <img
                  style={{ width: "50%", marginRight: "20px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FMESHCHAIN.png?alt=media&token=577519d5-e774-47b6-9292-ecb51d1033da"
                  alt="MESH"
                />
                <div>
                  <h4>MESH CHAIN</h4>
                  <p>
                    The mesh chain is a delicate and flexible chain type,
                    featuring an intricate woven design that resembles fabric.
                    Lightweight and elegant, it drapes beautifully, making it
                    perfect for both everyday wear and special occasions.
                  </p>
                </div>
              </div>
              <div className="content tip para">
                <img
                  style={{ width: "50%", marginRight: "20px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FSINGAPORECHAIN.png?alt=media&token=80a75eba-ce83-4606-879d-9f7c10857127"
                  alt="SINGAPORE"
                />
                <div>
                  <h4>SINGAPORE CHAIN</h4>
                  <p>
                    The Singapore chain is similar to the Curb chain but with
                    hammed disc shaped links which are twisted like a Rope
                    Chain. This allows light to catch a different angles along
                    the chain and creates a wonderful sparkling ripple effect.
                    Singapore chains are perfect to wear with pendants.
                  </p>
                </div>
              </div>
            </div>
            <div id="section6">
              <h3>Care and Maintenance</h3>
              <p className="para">
                Taking proper care of your diamond bracelets ensures they remain
                stunning and cherished for years. Follow these detailed care
                tips:
              </p>
              <div>
                <h4>1. Regular Cleaning:</h4>
                <p className="para">
                  To keep your diamond bracelets sparkling, regularly clean them
                  with a soft brush and mild soap diluted in warm water. Gently
                  scrub the diamonds and the metal settings to remove any dirt
                  or residue. Rinse thoroughly with lukewarm water and pat dry
                  with a soft, lint-free cloth.
                </p>
              </div>
              <div>
                <h4>2. Avoid Harsh Chemicals:</h4>
                <p className="para">
                  Protect your diamond bracelets from harsh chemicals that can
                  damage both the diamonds and the metal. Avoid exposing them to
                  substances such as bleach, chlorine, and ammonia, which can
                  cause discoloration and weaken the integrity of the jewelry.
                </p>
              </div>
              <div>
                <h4>3. Storage:</h4>
                <p className="para">
                  Store each diamond bracelet separately to prevent scratching
                  and tangling. Consider using individual compartments in a
                  jewelry box or soft pouches to keep them safe and secure.
                  Avoid mixing diamond bracelets with other jewelry pieces that
                  could potentially scratch them.
                </p>
              </div>
              <div>
                <h4>4. Avoid Impact:</h4>
                <p className="para">
                  Remove your diamond bracelets before engaging in activities
                  that may subject them to impact or abrasion. This precaution
                  helps maintain their structural integrity and prevents any
                  accidental damage that could affect their shine and
                  brilliance.
                </p>
              </div>
              <div>
                <h4>5. Professional Maintenance:</h4>
                <p className="para">
                  Periodically, take your diamond bracelets to a professional
                  jeweler for inspection and cleaning. Jewelers have the
                  expertise and tools to thoroughly clean the jewelry, check for
                  loose stones, and ensure that the settings are secure.
                  Professional maintenance helps preserve the beauty and value
                  of your diamond bracelets over time.
                </p>
              </div>
            </div>
            <p>
              RELATED:{" "}
              <span
                className="here"
                onClick={() => navigate(config.routes.public.allProduct)}
              >
                AD's ALL BRACELETS
              </span>
            </p>
            <img
              style={{ width: "100%" }}
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Fbannerbracelet.png?alt=media&token=17b6cb8d-7eb7-4bf6-bfb2-863985b5872a"
            ></img>
          </Content>
        </Layout>
        <Anchor className="anchor">
          <h6 className="in-this-article">IN THIS ARTICLE</h6>
          <Link href="#section2" title="01 General" />
          <Link href="#section3" title="02 Types of Bracelet" />
          <Link href="#section4" title="03 Diamond Quality" />
          <Link href="#section5" title="04 Chain Types" />
          <Link href="#section6" title="05 Care and Maintenance" />
        </Anchor>
      </Layout>
    </Container>
  );
}

export default BraceletEdu;
