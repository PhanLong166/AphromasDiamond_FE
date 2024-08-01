import { Layout, Anchor } from "antd";
import { Container } from "./../DocumentPage.styled";
import MenuDoc from "@/components/MenuDoc/MenuDoc";
import config from "@/config";
import { useNavigate } from "react-router-dom";

const { Content, Sider } = Layout;
const { Link } = Anchor;

function NecklaceEdu() {
  const navigate = useNavigate();
  return (
    <Container className="container">
      <Layout style={{ background: "#fff" }}>
        <Sider className="sider" width={260}>
          <MenuDoc />
        </Sider>
        <Layout className="layout" style={{ width: "50%" }}>
          <h1 className="header">Necklaces: Education & Buying Tips</h1>
          <p className="header subtitle">
            The right necklace or pendant will add style to any outfit. A
            necklace is a fashionable gift that's perfect for any occasion.
            Learn more about diamond, gold, silver, pearl and platinum necklaces
            along with details about necklace chain lengths and styles.
          </p>
          <Content>
            <hr className="hr" />
            <div id="section1">
              <p className="para">
                Here, you'll find everything you need to know about selecting
                the perfect diamond necklace. From ancient history to modern
                fashion, necklaces have always symbolized elegance and personal
                expression. Our guide will help you understand different styles,
                lengths, and care tips, ensuring you make a confident and
                informed choice. Explore the beauty and significance of diamond
                necklaces with us.
              </p>
            </div>
            <div id="section2">
              <h3>General Introduction to Necklaces</h3>
              <div>
                <h4>1. Concept and History</h4>
                <p className="para">
                  Necklaces have been worn as adornments for centuries, dating
                  back to ancient civilizations such as the Egyptians, Greeks,
                  and Romans. Originally made from natural materials like bones,
                  shells, and stones, necklaces evolved into intricate pieces
                  crafted from precious metals and gemstones. Over time,
                  necklaces have been used not only as decorative accessories
                  but also as symbols of status, wealth, and cultural identity.
                </p>
              </div>
              <div>
                <h4>2. Importance:</h4>
                <p className="para">
                  Necklaces hold a significant place in the world of jewelry due
                  to their ability to enhance an outfit and express personal
                  style. A well-chosen necklace can be a statement piece,
                  drawing attention and adding a touch of elegance. Diamond
                  necklaces, in particular, are prized for their brilliance and
                  timeless beauty, often marking special occasions such as
                  weddings, anniversaries, and celebrations.
                </p>
              </div>
            </div>
            <div id="section3">
              <h3>Types of Necklace</h3>
              <div
                className="content tip para"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  style={{ width: "28%", marginRight: "20px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FMetalChains.png?alt=media&token=bc3ce37d-fd19-471c-a1ee-0688349d1347"
                  alt="Metal Chains"
                />
                <div>
                  <h4>Metal Chains</h4>
                  <p>
                    Chains go with everything. A fine platinum chain in a choker
                    length will add just a touch of shine. If you're giving the
                    gift of a classic chain necklace, consider giving an 18-inch
                    sterling silver or 18k gold chain to add an element of
                    visual interest to your gift recipient's wardrobe.
                  </p>
                </div>
              </div>
              <div
                className="content tip para"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  style={{ width: "28%", marginRight: "20px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FNecklaces.png?alt=media&token=7881d8f9-3352-4ffe-99bb-f68b5aea4ac9"
                  alt="Necklaces"
                />
                <div>
                  <h4>Necklaces</h4>
                  <p>
                    Platinum, gold, or silver hoops give a feminine touch, and
                    precious metals go with anything. For added sparkle, choose
                    a pair with diamonds. Prices start at around $66 for silver
                    hoops.
                  </p>
                </div>
              </div>
              <div
                className="content tip para"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  style={{ width: "28%", marginRight: "20px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FSolitairePendants.png?alt=media&token=a45d9833-8c00-45e2-ba6a-84744a928ec1"
                  alt="Solitaire Pendants"
                />
                <div>
                  <h4>Solitaire Pendants</h4>
                  <p>
                    The simple design of a solitaire pendant allows all the
                    attention to focus on a beautiful diamond, pearl, or
                    gemstone. These timeless pieces can be worn with a dress or
                    with jeans. Our Build Your Own Diamond Pendant® feature
                    allows you to select a diamond and setting to create a
                    unique piece of jewelry.
                  </p>
                </div>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.allProduct)}
                >
                  AD's ALL NECKLACES
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
              <h3>Choose The Right Length</h3>
              <img
                style={{ width: "60%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Fnecklacelength.webp?alt=media&token=ea30ca16-98c5-4c61-b988-5dc6e646122c"
                alt="NecklaceLength"
              />
              <div>
                <h4>1. Collar (12-14 inches):</h4>
                <p className="para">
                  Sits tightly around the neck. Best for open-neck clothing such
                  as V-necks, scoop necks, and off-the-shoulder styles.
                </p>
              </div>
              <div>
                <h4>2. Choker (14-16 inches):</h4>
                <p className="para">
                  Sits at the base of the neck. Complements almost any neckline
                  and is versatile for both casual and formal outfits.
                </p>
              </div>
              <div>
                <h4>3. Princess (17-19 inches):</h4>
                <p className="para">
                  Rests near the collarbone. Ideal for crew and high necklines,
                  adding a touch of elegance.
                </p>
              </div>
              <div>
                <h4>4. Matinee (20-24 inches):</h4>
                <p className="para">
                  Falls between the collarbone and the bust. Suitable for both
                  business and casual attire.
                </p>
              </div>
              <div>
                <h4>5. Opera (28-36 inches):</h4>
                <p className="para">
                  Hangs below the bust. Can be worn as a single strand or
                  doubled for a layered effect. Perfect for high or crew
                  necklines and evening wear.
                </p>
              </div>
              <div>
                <h4>6. Rope (over 36 inches):</h4>
                <p className="para">
                  Falls below the waist. Can be styled in multiple ways,
                  including doubled or knotted. Adds a dramatic effect to any
                  outfit.
                </p>
              </div>
            </div>
            <div id="section7">
              <h3>Care and Maintenance</h3>
              <div>
                <h4>1. Cleaning Diamond Necklace</h4>
                <h4>a. Use Warm Water and Mild Soap:</h4>
                <ul style={{ listStyle: "initial" }} className="detail para">
                  <li>
                    Use Warm Water and Mild Soap: Soak the necklace in a
                    solution of warm water and mild soap for about 15-20
                    minutes. Gently brush the diamonds and chain with a soft
                    toothbrush to remove any dirt or grime.
                  </li>
                  <li>
                    Rinse Thoroughly: Rinse the necklace under lukewarm running
                    water to remove all soap residues. Dry it with a soft,
                    lint-free cloth.
                  </li>
                </ul>

                <h4>b. Avoid Harsh Chemicals:</h4>
                <ul style={{ listStyle: "initial" }} className="detail para">
                  <li>
                    Reason: Harsh chemicals like bleach, chlorine, and ammonia
                    can damage the diamonds and metal settings, causing
                    discoloration or weakening the structure.
                  </li>
                  <li>
                    How to Avoid: Use only mild soap and water for cleaning.
                    Remove your necklace before swimming in chlorinated pools or
                    using household cleaning products.
                  </li>
                </ul>
              </div>
              <div>
                <h4>2. Storage</h4>
                <ul style={{ listStyle: "initial" }} className="detail para">
                  <li>
                    Store Separately: To prevent scratches and tangling, store
                    each necklace in a separate compartment or a soft pouch.
                    Avoid mixing different types of jewelry in one container.
                  </li>
                  <li>
                    Avoid Direct Sunlight: Store your necklaces in a cool, dry
                    place away from direct sunlight. Prolonged exposure to
                    sunlight can affect the durability of some settings and
                    cause tarnishing.
                  </li>
                  <li>
                    Use a Jewelry Box: A jewelry box with individual
                    compartments and a soft lining is ideal for storing
                    necklaces. This helps maintain their shine and prevents
                    damage.
                  </li>
                </ul>
              </div>
            </div>
            <p>
              RELATED:{" "}
              <span
                className="here"
                onClick={() => navigate(config.routes.public.allProduct)}
              >
                AD's ALL NECKLACES
              </span>
            </p>
            <img
              style={{ width: "100%" }}
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Fbannernecklace.png?alt=media&token=ba0484fb-5c94-4cae-83e6-d5e5f5425bed"
            ></img>
          </Content>
        </Layout>
        <Anchor className="anchor">
          <h6 className="in-this-article">IN THIS ARTICLE</h6>
          <Link href="#section2" title="01 General" />
          <Link href="#section3" title="02 Types of Necklace" />
          <Link href="#section4" title="03 Diamond Quality" />
          <Link href="#section5" title="04 Chain Types" />
          <Link href="#section6" title="05 Right Length" />
        </Anchor>
      </Layout>
    </Container>
  );
}

export default NecklaceEdu;
