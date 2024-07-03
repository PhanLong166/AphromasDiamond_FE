import { Layout, Anchor } from "antd";
import { Container } from "./../DocumentPage.styled";
import MenuDoc from "@/components/MenuDoc/MenuDoc";

const { Content, Sider } = Layout;
const { Link } = Anchor;

function MetalEdu() {
  return (
    <Container className="container">
      <Layout style={{ background: "#fff" }}>
        <Sider className="sider" width={260}>
          <MenuDoc />
        </Sider>
        <Layout className="layout" style={{ width: "50%" }}>
          <h1 className="header">Metal Education Guide</h1>
          <p className="header subtitle">
            Our comprehensive Metal Guide offers an in-depth understanding of
            the various metals commonly used in jewelry and rings. This guide
            provides detailed insights into each metal's unique characteristics,
            strengths, and weaknesses, enabling you to make an informed choice
            for your particular piece.
          </p>
          <Content>
            <hr className="hr" />
            <div id="section1">
              <p className="para">
                In jewelry, various metals are used to create stunning and
                enduring pieces. Gold, in its various yellow, white, and rose
                hues, offers versatility and timeless appeal, making it a
                perennial favorite. Platinum stands out for its durability and
                unique sheen, ideal for those seeking a sophisticated and
                lasting option. For a more modern touch, metals like titanium
                and tungsten are gaining popularity, known for their strength
                and resistance to wear. Palladium, a less-known but equally
                luxurious choice, offers a lightweight feel with a lustrous
                finish. Each of these metals brings its charm and distinct
                properties, allowing for a wide range of styles and preferences
                in jewelry design.
              </p>
            </div>
            <div id="section2">
              <h3>Most Popular Metals</h3>
              <div>
                <h4>1. White Gold</h4>
                <p className="para">
                  Renowned for its gleaming luster and denseness, white gold is
                  one of the most popular metal choices for jewelry, adding a
                  timeless and classic beauty to engagement rings.
                </p>
              </div>
              <div>
                <h4>2. Yellow Gold</h4>
                <p className="para">
                  Known as the most popular shade of precious metal, yellow gold
                  is extremely popular, not only in fine jewelry but in the
                  market today. A mixed array of copper alloys and silver
                  creates its luxurious and warm hue.
                </p>
              </div>
              <div>
                <h4>3. Rose Gold</h4>
                <p className="para">
                  Often known as the most "romantic" metal, rose gold is an
                  extremely popular metal choice for those looking for a
                  feminine or luxurious touch. The combination of copper and
                  silver creates its darker hue. By adding a larger portion of
                  copper to the ring, the "rose" tones in the metal will become
                  more apparent.
                </p>
              </div>
              <div>
                <h4>4. Platinum</h4>
                <p className="para">
                  Platinum is hypoallergenic and is four times more durable than
                  gold. Its silvery-white surface is comparable to white gold,
                  although it’s noticeably heavier.
                </p>
              </div>
            </div>
            <div id="section3">
              <h3>Why Choose Gold?</h3>
              <p className="para">
                Renowned for its gleaming luster and denseness, gold is known as
                the softest and most pliable natural metal. In its purest form,
                gold is bright yellow in color, but is often mixed with other
                metals, such as silver and copper, to form a more durable alloy
                that's more resistant to everyday wear and tear.
              </p>
              <p className="para">
                Additionally, these alloys help color gold and produce shades of
                white, yellow, and rose. At Brilliance, we specialize in
                high-quality 14 carat and 18 carat pieces, the standard for fine
                gold jewelry.
              </p>
              <div>
                <h4>1. Gold Purity</h4>
                <p className="para">
                  There are various grades of gold purity, determined by the
                  ratio of their alloy composition and rated by a carat system.
                  Typical carat purities range from 10 carats to 24 carats (pure
                  gold), with a wide variation of usage from country to country.
                  In the United States, the most popular composition is 14 carat
                  gold.
                </p>

                <div className="content tip para">
                  <h4>10 Carat</h4>
                  <p>
                    This tier of the metal consists of 41.7% gold. This is the
                    minimum purity that can still be considered gold in the
                    United States and is not used for high quality jewelry.
                  </p>
                </div>
                <div className="content tip para">
                  <h4>14 Carat</h4>
                  <p>
                    14 carat gold is 58.3% pure gold; the remainder is comprised
                    of alloy metals. Any gold purity less than 14 carat gold is
                    not recommended for high quality jewelry.
                  </p>
                </div>
                <div className="content tip para">
                  <h4>18 Carat</h4>
                  <p>
                    This alloy consists of 75% gold and 25% alloy metals. 18
                    karat gold has been found to be the perfect balance between
                    gold purity and strength. Brilliance offers a variety of
                    exquisite 18 karat gold jewelry.
                  </p>
                </div>
                <div className="content tip para">
                  <h4>22 Carat</h4>
                  <p>
                    This level of gold is 91.7% pure which is still too soft to
                    make jewelry and not as durable as 18K or 14K.
                  </p>
                </div>
                <div className="content tip para">
                  <h4>24 Carat</h4>
                  <p>
                    In its purest form, the metal is comprised of 100% gold with
                    virtually no alloy metals. Pure gold is extremely soft and
                    pliable, which is why it's often mixed with other metals,
                    such as copper and silver, to forge jewelry.
                  </p>
                </div>
              </div>
              <div>
                <h4>2. Color of Gold</h4>
                <p>
                  Due to its inherent softness and malleability, gold is rarely
                  used alone when forging a jewelry piece. Instead, it's blended
                  with other fine metals to lend more hardness and durability.
                  When pure gold is combined with these other metals, it takes
                  on a variety of rich shades that have become desirable in
                  their own right.
                </p>
                <img
                  style={{ width: "100%" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FColorGold.png?alt=media&token=5f079a3c-8b5d-4cfc-bc7f-19af748e046e"
                ></img>
              </div>
              <div>
                <h4>3. Care & Maintenance</h4>
                <p className="para">
                  Gold maintenance is essential for preserving its shine and
                  value. Clean gold items regularly using warm water mixed with
                  mild dish soap, gently scrubbing with a soft brush. Avoid
                  using harsh chemicals like chlorine, as they can damage the
                  metal. After cleaning, rinse well and dry with a lint-free
                  cloth.
                </p>
                <p className="para">
                  Store gold pieces separately in soft cloth pouches to prevent
                  scratches. Regularly inspect jewelry for loose clasps or
                  settings. It’s also advisable to keep gold away from extreme
                  temperatures and to remove it during physical activities to
                  avoid potential damage.
                </p>
                <img
                  style={{ width: "100%" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FCare1.jpg?alt=media&token=f4640ac4-3841-4120-bc42-38ad71fbad21"
                ></img>
              </div>
              <div>
                <h4>4. History of Gold</h4>
                <p className="para">
                  Discovered as early as 3,000 BC, gold has served as an
                  ornamental and economic fixture for many centuries. A chemical
                  element, it's a highly prized metal mined from rocks and
                  sediment. From the ancient civilizations of Egypt, Greece, and
                  Rome through the Middle Ages and the modern period of the
                  1800s, gold has figured prominently in the history and culture
                  of societies spanning the globe.
                </p>
                <p className="para">
                  In 1848, the California gold rush brought about a drastic
                  spike in the production and distribution of the metal. Today,
                  gold lends timeless beauty and longevity to a majority of the
                  fine jewelry on the market today. At Brilliance, we're proud
                  to offer a hand-picked assortment of gold rings, earrings,
                  bracelets, and necklaces, available in a rich medley of colors
                  and karat weights.
                </p>
              </div>
            </div>
            <div id="section4">
              <h3>All About Platinum</h3>
              <p className="para">
                Platinum is considered among the most pure and precious metals
                used in modern-day jewelry making. It has become synonymous with
                luxury and longevity. Because of its hardness and durability,
                pure platinum is often mixed with other metals to make it more
                malleable. The most common alloy metals paired with platinum are
                copper, palladium, rhodium, iridium, and titanium.
              </p>
              <p className="para">
                Often heralded as just as beautiful as the gems it displays,
                platinum boasts a silvery-white luster that imparts unmistakable
                elegance and blends well with a variety of metals and stones.
                Four times stronger than gold, platinum is renowned for its
                hard-wearing properties, resistance to damage and wear, and its
                substantial heft.
              </p>
              <div>
                <h4>1. Platinum Purity</h4>
                <p className="para">
                  Although some alloys may be billed as platinum by jewelry
                  sellers, there are stringent requirements for what constitutes
                  a 'pure' platinum piece. Only metals marked with a 950 or 900
                  purity designation are considered high-grade platinum. Alloys
                  containing a lower ratio are often used to make jewelry, but
                  these pieces don't impart the same high standards of quality,
                  longevity, or beauty. At Brilliance, we use only the purest
                  platinum alloys to craft our fine jewelry.
                </p>

                <div className="content tip para">
                  <h4>850 Platinum</h4>
                  <p>
                    This metal is 85% platinum and 15% alloy metals. Despite its
                    lower level of purity, 850 platinum is still considered
                    high-quality and a more affordable platinum for jewelry.
                  </p>
                </div>
                <div className="content tip para">
                  <h4>900 Platinum</h4>
                  <p>
                    These pieces are made of 90% platinum and 10% alloy metals.
                    Not as pure as 950 platinum, 900PLAT pieces are still indeed
                    great quality and durable enough for use in jewelry.
                  </p>
                </div>
                <div className="content tip para">
                  <h4>950 Platinum</h4>
                  <p>
                    Pieces marked with a 950 purity are a blend of 95% platinum
                    and 5% alloy metals. 950 platinum is top quality and the
                    most popular choice for making jewelry.
                  </p>
                </div>
                <div className="content tip para">
                  <h4>999 Platinum</h4>
                  <p>
                    99.9% pure platinum is the most expensive type of platinum.
                    However, in its purest state platinum is very soft, and thus
                    not the best suitable for crafting jewelry.
                  </p>
                </div>
              </div>

              <div>
                <h4>2. Care & Maintenance</h4>
                <p className="para">
                  At Brilliance, we offer complimentary cleaning services for
                  all jewelry products we sell. Contact us to learn more about
                  how your favorite platinum jewelry can look new again.
                </p>
                <p className="para">
                  For at-home cleaning, immerse your platinum jewelry in a mild,
                  non-abrasive jewelry cleaner and then gently rub the surface
                  with a soft cloth. Twice a year you should have a professional
                  jeweler perform a thorough cleaning and buff the surface free
                  of any scratches. You can also ask them to polish the metal
                  for a shinier look; otherwise, it will acquire a matte patina
                  over time. When not being worn, it's best to store jewelry in
                  a cloth bag, sealable plastic bag, or lined box to keep it
                  from coming into contact with others to prevent scratching.
                </p>
                <img
                  style={{ width: "100%" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FCare2.webp?alt=media&token=cfb71022-86c5-4bdc-94f3-3c29227f67ea"
                ></img>
              </div>
              <div>
                <h4>3. Color of Gold</h4>
                <p>
                  Due to its inherent softness and malleability, gold is rarely
                  used alone when forging a jewelry piece. Instead, it's blended
                  with other fine metals to lend more hardness and durability.
                  When pure gold is combined with these other metals, it takes
                  on a variety of rich shades that have become desirable in
                  their own right.
                </p>
                <img
                  style={{ width: "100%" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Fplatinumcolor.png?alt=media&token=58d43d7a-0e1a-4555-88a0-ab1bca322ae9"
                ></img>
              </div>
              <div>
                <h4>4. History of Platinum</h4>
                <p className="para">
                  Platinum is a metal with a rich and deep-rooted history. Mined
                  in Russia and South Africa, it was first used in decorative
                  applications in ancient Egypt more than 3,000 years ago.
                  Preferred for its remarkable strength and longevity, the metal
                  was used to adorn Egyptian coffins. The South American Inca
                  Indians also made use of platinum to decorate their artifacts.
                </p>
                <p className="para">
                  With the Spanish conquest of South America, the metal's value
                  was diminished, as the Spanish people considered it to be far
                  inferior to silver. It wasn't until the 1800s that platinum
                  began to reclaim its original status as a precious and
                  treasured metal. Today, it's regarded as the premier choice
                  for the setting of fine diamonds and other gemstones.
                </p>
              </div>
            </div>

            <img
              style={{ width: "100%" }}
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Fsnapedit_1719690260501.jpg?alt=media&token=989f1529-ffe6-4208-adb0-b0fd5263e096"
            ></img>
          </Content>
        </Layout>
        <Anchor className="anchor">
          <h6 className="in-this-article">IN THIS ARTICLE</h6>
          <Link href="#section2" title="01 The Importance of the 4Cs" />
          <Link href="#section3" title="02 Why Choose Gold?" />
          <Link href="#section4" title="03 All About Platinum" />
        </Anchor>
      </Layout>
    </Container>
  );
}

export default MetalEdu;
