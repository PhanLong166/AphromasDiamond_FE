import { Layout, Anchor } from "antd";
import { Container } from "./EarringEdu.styled";
import MenuDoc from "@/components/MenuDoc/MenuDoc";
import config from "@/config";
import { useNavigate } from "react-router-dom";

const { Content, Sider } = Layout;
const { Link } = Anchor;

function EarringEdu() {
  const navigate = useNavigate();
  return (
    <Container className="container">
      <Layout style={{ background: "#fff" }}>
        <Sider className="sider" width={260}>
          <MenuDoc />
        </Sider>
        <Layout className="layout" style={{ width: "50%" }}>
          <h1 className="header">Earrings: Education & Buying Tips</h1>
          <p className="header subtitle">
            Earrings make the perfect gift because they are always the right
            fit. The most basic jewelry wardrobe piece, everyone can enjoy the
            style earrings add to an outfit.
          </p>
          <Content>
            <hr className="hr" />
            <div id="section1">
              <p className="para">
                Most earrings go with anything, adding style to every occasion.
                The wide variety of earring types, sizes, and prices available
                makes it easy to find the perfect pair for a gift. Your gift
                recipient will remember you every time they wear the earrings
                you got them.
              </p>
            </div>
            <div id="section2">
              <h3>General Introduction to Earrings</h3>
              <div>
                <h4>1. Concept and History</h4>
                <p className="para">
                  Diamond earrings are a type of jewelry worn on the ears,
                  typically made from precious metals and adorned with valuable
                  diamonds. The history of diamond earrings dates back thousands
                  of years, with early examples found in ancient civilizations
                  such as Egypt, Greece, and Rome. Diamond earrings were symbols
                  of power and wealth, often reserved for nobility and royalty.
                </p>
              </div>
              <div>
                <h4>2. Importance:</h4>
                <p className="para">
                  Diamond earrings are not only valuable jewelry but also bring
                  style and elegance to the wearer. They signify sophistication,
                  class, and personal style. Diamonds, with their brilliance and
                  durability, symbolize love and eternity, often used in special
                  occasions like weddings, anniversaries, and significant
                  events.
                </p>
              </div>
            </div>
            <div id="section3">
              <h3>Types of Earrings</h3>
              <div
                className="content tip para"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  style={{ width: "28%", marginRight: "20px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FStuds.png?alt=media&token=4f40ee42-9d5f-4480-9aa0-87c45bb79da8"
                  alt="Studs"
                />
                <div>
                  <h4>Studs</h4>
                  <p>
                    Because they're small, stud earrings are easy to wear. They
                    go as easily with a cocktail dress as they do with jeans.
                    You'll find a variety of styles in cultured pearl earrings,
                    diamond earrings and gemstone earrings, or use our Build
                    Your Own Earrings® feature.
                  </p>
                </div>
              </div>
              <div
                className="content tip para"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  style={{ width: "28%", marginRight: "20px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FHoops.png?alt=media&token=c4eb0124-d3c2-4f4c-bde9-cd72bfd4590e"
                  alt="Hoops"
                />
                <div>
                  <h4>Hoops</h4>
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
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FDrops.png?alt=media&token=da01c0e8-81d6-4096-91ac-19fcdf59e2ec"
                  alt="Drops"
                />
                <div>
                  <h4>Drops </h4>
                  <p>
                    Drop earrings are made to dangle below their setting.
                    Swaying with movement, they can add an elegant touch. Pearl,
                    diamond, and gemstone drop earrings are available in various
                    settings.
                  </p>
                </div>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.allProduct)}
                >
                  AD's ALL EARRING
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
              <h3>Choosing Earrings for Your Face Shape</h3>
              <h4>1. How Do I Determine My Face Shape?</h4>
              <p className="para">
                Unsure what your face shape is? You are not alone! But never
                fear because we are here to help you figure out your face shape
                in just a few easy steps!
              </p>
              <ul style={{ listStyle: "initial" }} className="detail para">
                <li>
                  Measure from the peak of one eyebrow arch to the other
                  FOREHEAD
                </li>
                <li>
                  Measure from the point of your upper cheekbone to the other
                  CHEEKBONES
                </li>
                <li>
                  Measure your jaw across at its widest point (approximately an
                  inch below your ears) JAWLINE
                </li>
                <li>
                  Measure from the center of your hairline to the bottom of your
                  chin FACE
                </li>
              </ul>
              <p className="para">
                If the numbers for 2 and 4 are similar and are higher than 1 and
                3, you have a round shaped face. If 1 is higher than 3, and 2 is
                about the same as 1, with a narrow jawline, you have a heart
                shaped face.
              </p>
              <p className="para">
                If all your measurements are similar, you have a square shaped
                face. If 4 is the highest number, followed by 2 then 1, with 3
                being the smallest, you have a diamond shaped face. If 4 is
                higher than 2, and 1 is higher than 3, you have an oval shaped
                face.
              </p>
              <div className="img">
                <img
                  style={{ width: "80%" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Ffaceshape.jpg?alt=media&token=99f0753a-f345-4a4c-98cb-b266097abf93"
                ></img>
              </div>
              <div>
                <h4>2. Find The Best Earrings For Your Face Shape</h4>
                <div>
                  <h4>1. Round Face</h4>
                  <p className="para">
                    Round-shaped faces are greatly flattered by long, dangling
                    or drop earrings, which have a lengthening effect. Long,
                    slim earrings will compliment the roundness of your face’s
                    shape. Tassels are another great, stylistic way to add a
                    lengthening effect using earrings.
                  </p>
                  <p className="para">
                    Most experts recommend avoiding rounder, wide, and chunky
                    earrings, as these shapes can enhance the roundness of your
                    face.
                  </p>
                  <div
                    className="content tip para"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      style={{ width: "28%", marginRight: "20px" }}
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FDrops.png?alt=media&token=da01c0e8-81d6-4096-91ac-19fcdf59e2ec"
                      alt="Drops"
                    />
                    <div>
                      <h4>Drops </h4>
                      <p>
                        Drop earrings are made to dangle below their setting.
                        Swaying with movement, they can add an elegant touch.
                        Pearl, diamond, and gemstone drop earrings are available
                        in various settings.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>2. Heart Face</h4>
                  <p className="para">
                    Heart-shaped faces are most flattered by earrings with a
                    wide bottom, creating a proportional balance. Your face’s
                    shape screams love, grab earrings that do the same by
                    choosing earrings that start slim at the top and get wide at
                    the bottom.
                  </p>
                  <div
                    className="content tip para"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      style={{ width: "28%", marginRight: "20px" }}
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FDrops.png?alt=media&token=da01c0e8-81d6-4096-91ac-19fcdf59e2ec"
                      alt="Drops"
                    />
                    <div>
                      <h4>Drops </h4>
                      <p>
                        Drop earrings are made to dangle below their setting.
                        Swaying with movement, they can add an elegant touch.
                        Pearl, diamond, and gemstone drop earrings are available
                        in various settings.
                      </p>
                    </div>
                  </div>
                  <div
                    className="content tip para"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      style={{ width: "28%", marginRight: "20px" }}
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FHoops.png?alt=media&token=c4eb0124-d3c2-4f4c-bde9-cd72bfd4590e"
                      alt="Hoops"
                    />
                    <div>
                      <h4>Hoops</h4>
                      <p>
                        Platinum, gold, or silver hoops give a feminine touch,
                        and precious metals go with anything. For added sparkle,
                        choose a pair with diamonds. Prices start at around $66
                        for silver hoops.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>3. Square Face</h4>
                  <p className="para">
                    Square-shaped faces look great with earrings that Softline
                    your beautifully strong jawline. Go for earrings that are
                    round or have flowing styles with fewer angles. It is best
                    to choose earrings that balance the strength of your face’s
                    angles; hoop earrings are a great option here.
                  </p>
                  <div
                    className="content tip para"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      style={{ width: "28%", marginRight: "20px" }}
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FHoops.png?alt=media&token=c4eb0124-d3c2-4f4c-bde9-cd72bfd4590e"
                      alt="Hoops"
                    />
                    <div>
                      <h4>Hoops</h4>
                      <p>
                        Platinum, gold, or silver hoops give a feminine touch,
                        and precious metals go with anything. For added sparkle,
                        choose a pair with diamonds. Prices start at around $66
                        for silver hoops.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>4. Diamond Face</h4>
                  <p className="para">
                    The highlight of diamond-shaped faces is usually the eyes at
                    the widest part of the face. Enhance this gorgeous feature
                    with earrings such as studs that stay close to the ear to
                    create balance.
                  </p>
                  <div
                    className="content tip para"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      style={{ width: "28%", marginRight: "20px" }}
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FStuds.png?alt=media&token=4f40ee42-9d5f-4480-9aa0-87c45bb79da8"
                      alt="Studs"
                    />
                    <div>
                      <h4>Studs</h4>
                      <p>
                        Because they're small, stud earrings are easy to wear.
                        They go as easily with a cocktail dress as they do with
                        jeans. You'll find a variety of styles in cultured pearl
                        earrings, diamond earrings and gemstone earrings, or use
                        our Build Your Own Earrings® feature.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>5. Oval Face</h4>
                  <p className="para">
                    Oval-shaped faces are flattered by the largest variety of
                    shapes, both a blessing and a curse. You can wear almost
                    anything, but the options are enormous! Studs, hoops, small
                    drops, huggies and more all highlight your face’s shape.
                  </p>
                  <div
                    className="content tip para"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      style={{ width: "28%", marginRight: "20px" }}
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FStuds.png?alt=media&token=4f40ee42-9d5f-4480-9aa0-87c45bb79da8"
                      alt="Studs"
                    />
                    <div>
                      <h4>Studs</h4>
                      <p>
                        Because they're small, stud earrings are easy to wear.
                        They go as easily with a cocktail dress as they do with
                        jeans. You'll find a variety of styles in cultured pearl
                        earrings, diamond earrings and gemstone earrings, or use
                        our Build Your Own Earrings® feature.
                      </p>
                    </div>
                  </div>
                  <div
                    className="content tip para"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      style={{ width: "28%", marginRight: "20px" }}
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FHoops.png?alt=media&token=c4eb0124-d3c2-4f4c-bde9-cd72bfd4590e"
                      alt="Hoops"
                    />
                    <div>
                      <h4>Hoops</h4>
                      <p>
                        Platinum, gold, or silver hoops give a feminine touch,
                        and precious metals go with anything. For added sparkle,
                        choose a pair with diamonds. Prices start at around $66
                        for silver hoops.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="section6">
              <h3>Care and Maintenance</h3>
              <div>
                <h4>1. Cleaning Diamond Earrings</h4>
                <h4>a. Use Warm Water and Mild Soap:</h4>
                <ul style={{ listStyle: "initial" }} className="detail para">
                  <li>
                    Method: Fill a small bowl with warm water and add a few
                    drops of mild soap. Stir the water gently to create a soapy
                    solution. Place your diamond earrings in the solution and
                    let them soak for about 15-20 minutes. This will help to
                    loosen any dirt or oils.
                  </li>
                  <li>
                    Brush Gently: After soaking, use a soft brush, such as a
                    baby toothbrush, to gently brush the diamonds and the metal
                    setting. Make sure to reach all the crevices where dirt can
                    accumulate. Be gentle to avoid scratching the metal or
                    loosening the stones.
                  </li>
                  <li>
                    Rinse and Dry: Rinse the earrings thoroughly under lukewarm
                    running water to remove all soap residue. Use a soft,
                    lint-free cloth to gently pat them dry. Avoid using tissues
                    or paper towels as they can leave fibers or scratch the
                    metal.
                  </li>
                </ul>

                <h4>b. Avoid Harsh Chemicals:</h4>
                <ul style={{ listStyle: "initial" }} className="detail para">
                  <li>
                    Why: Harsh chemicals and detergents can cause damage to both
                    the diamonds and the metal settings. Chemicals like
                    chlorine, bleach, and ammonia can discolor or weaken the
                    metal, and some cleaning solutions can dull the brilliance
                    of the diamonds.
                  </li>
                  <li>
                    How to Avoid: Stick to mild soap and water for regular
                    cleaning. If professional cleaning is needed, take your
                    earrings to a jeweler who can clean them using safe methods.
                  </li>
                  <li>
                    Special Note: Always remove your earrings before swimming in
                    chlorinated pools or using household cleaning products.
                  </li>
                </ul>
              </div>
              <div>
                <h4>2. Storage</h4>
                <h4>a. Store Separately:</h4>
                <ul style={{ listStyle: "initial" }} className="detail para">
                  <li>
                    Method: To avoid scratches and tangling, store each earring
                    separately. You can use soft pouches or individual
                    compartments in a jewelry box. This will prevent the
                    earrings from rubbing against each other or other pieces of
                    jewelry.
                  </li>
                  <li>
                    Specialized Containers: Consider using jewelry boxes with
                    separate, padded compartments designed specifically for
                    earrings. This ensures each piece is protected and easy to
                    find.
                  </li>
                </ul>

                <h4>b. Avoid Direct Sunlight:</h4>
                <ul style={{ listStyle: "initial" }} className="detail para">
                  <li>
                    Method: Store your diamond earrings in a cool, dry place
                    away from direct sunlight. Prolonged exposure to sunlight
                    can cause certain metals to tarnish and can affect the
                    durability of some settings.
                  </li>
                  <li>
                    Humidity Control: Avoid storing your earrings in humid
                    environments, such as bathrooms. Use a jewelry box with a
                    desiccant packet (silica gel) to help control humidity and
                    prevent tarnishing.
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
                AD's ALL EARRINGS
              </span>
            </p>
            <img
              style={{ width: "100%" }}
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Fearringedu.png?alt=media&token=4ebbce7b-bc34-4e63-9055-db606670baad"
            ></img>
          </Content>
        </Layout>
        <Anchor className="anchor">
          <h6 className="in-this-article">IN THIS ARTICLE</h6>
          <Link href="#section2" title="01 General" />
          <Link href="#section3" title="02 Types of Earrings" />
          <Link href="#section4" title="03 Diamond Quality" />
          <Link href="#section5" title="04 Choosing Earrings" />
          <Link href="#section6" title="05 Care and Maintenance" />
        </Anchor>
      </Layout>
    </Container>
  );
}

export default EarringEdu;
