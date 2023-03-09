import React from "react";
import menu from "../Assets/menu.png";
import help1 from "../Assets/help1.png";
import help2 from "../Assets/help2.png";
import test1 from "../Assets/test1.png";
import test2 from "../Assets/test2.png";
import test3 from "../Assets/test3.png";
import Ellipse6 from "../Assets/Ellipse6.png";
import Ellipse7 from "../Assets/Ellipse7.png";
import Ellipse8 from "../Assets/Ellipse8.png";
import facebook from "../Assets/facebook.png";
import twitter from "../Assets/twitter.png";
import youtube from "../Assets/youtube.png";

function Homepage() {
  return (
    <div>
      <header id="header">
        <nav
          id="navbar-large"
          class="hidden lg:flex navbra items-center justify-between"
        >
          <h1 class="logo font-semibold">WDC</h1>
          <div class="flex navbra-text flex-row gap-10">
            <h1 class=" text-2xl">Home</h1>
            <h1 class=" text-2xl">What we do</h1>
            <h1 class=" text-2xl">How to help</h1>
            <h1 class=" text-2xl">Testimonials</h1>
          </div>
          <button class="button">Donate Now</button>
        </nav>

        <nav
          id="navbar-small"
          class="flex navbra items-center justify-between flex-row lg:hidden"
        >
          <div>
            <img src={menu} alt="Hamburger Menu" />
          </div>
          <h1 class="logo font-semibold">WDC</h1>

          <button class="button">Donate Now</button>
        </nav>

        <main class="flex bodh flex-col items-center">
          <div class="Ltext">
            Improving The Lives of Women Who Have Been Abused
          </div>
          <div class="flex flex-row buns">
            <button class="button">Donate Now</button>
            <button class="buttonh">Contact Us</button>
          </div>
        </main>
      </header>

      <main class=" flex flex-col items-center">
        <section
          id="numbers"
          class="flex flex-col lg:flex-row lg:justify-between justify-center lg:items-center w-full max-w-lg lg:max-w-none"
        >
          <div
            id="left"
            class="flex flex-col lg:flex-row lg:items-center order-2 lg:order-1"
          >
            <div id="left-left">
              <div id="caa" class="flex ca1 flex-col">
                <h1 class="num-text0">736</h1>
                <h1 class="num-text1">
                  million women are subject to physical or sexual violence by
                  their partner
                </h1>
              </div>
              <div id="caa" class="flex ca2 flex-col">
                <h1 class="num-text0">59%</h1>
                <h1 class="num-text12">
                  of people’s finance is negatively impacted by their abuser
                </h1>
              </div>
            </div>
            <div class="sp">
              <div id="caa" class="flex ca3 flex-col">
                <h1 class="num-text0">70%</h1>
                <h1 class="num-text13">
                  of domestic violence victims are forbidden to work by their
                  abusers
                </h1>
              </div>
            </div>
          </div>
          <div id="right" class=" order-1 lg:order-2 block">
            <div id="right-con">It’s All in the Numbers...</div>
          </div>
        </section>

        <section id="whatwedo">
          <div>
            <h1 class="wha-head">What We Do</h1>
          </div>

          <div class="card-container flex-col lg:flex-row lg:justify-between flex">
            <div class="card-out">
              <div>
                <div class="card-1-cont">
                  <div class="card-1">1</div>
                  <div class="line"></div>
                </div>
                <div class="card-2">Provide financial support</div>
              </div>
              <div class="card-3">
                We provide monetary support to abused women who need it until
                they get back on their feet.
              </div>
            </div>
            <div class="card-solid flex flex-col justify-between">
              <div>
                <div class="card-1-conts">
                  <div class="card-1s">2</div>
                  <div class="lines"></div>
                </div>
                <div class="card-2s">Provide shelter</div>
              </div>
              <div class="card-3s">
                We provide shelter to abused women who have no roof on their
                heads while they recover.
              </div>
            </div>
            <div class="card-out flex flex-col justify-between">
              <div>
                <div class="card-1-cont">
                  <div class="card-1">3</div>
                  <div class="line"></div>
                </div>
                <div class="card-2">Help start a business</div>
              </div>
              <div class="card-3">
                We help abused women interested in starting a business accrue
                capital to fund their ideas.
              </div>
            </div>
          </div>
        </section>

        <div class="overview w-full lg:w-auto flex justify-center">
          <div class="overview-container flex flex-col lg:flex-row">
            <div class="flex mm flex-row">
              <div class="oc-cont">
                <h1>400</h1>
                <h2>Women helped</h2>
              </div>
              <div class="oc-cont ll">
                <h1>100+</h1>
                <h2>Businesses created</h2>
              </div>
            </div>
            <div class="flex mm2">
              <div class="oc-cont">
                <h1>70+</h1>
                <h2>Volunteers</h2>
              </div>
              <div class="oc-cont ll">
                <h1>200+</h1>
                <h2>Donations made</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="help-cont">
          <div class="help">How to help</div>
          <div>
            <div class="item-container">
              <div class="item">
                <div class="item-img">
                  <img src={help1} alt="imagee 1" />
                </div>
                <div class="item-text">
                  <h1>Volunteer</h1>
                  <h2>
                    WDC needs volunteers who can help reach out to, counsel or
                    assist abused women.
                  </h2>
                  <button class="buttons">Contact Us</button>
                </div>
              </div>
              <div class="lline"></div>
              <div class="item">
                <div class="item-img">
                  <img src={help2} alt="imagee 1" />
                </div>
                <div class="item-text">
                  <h1>Make a donation</h1>
                  <h2>
                    Your donation to the cause would go a long way in helping
                    these women get back on their feet.
                  </h2>
                  <button class="buttons">Donate Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="partners" class="bg-dark w-full">
          <div class="part-cont">Our Partners</div>
          <div class="part-conttt">
            <h1>C-CHECK</h1>
            <h1>W.H.O</h1>
            <h1>PEPSI</h1>
            <h1>MTN</h1>
          </div>
        </div>

        <div class="testi">
          <h1 class="testi-head">Testimonials</h1>
          <div class="testi-cont ">
            <div class="testi-card flex justify-between flex-col cs1">
              <div class="flex flex-col">
                <div class="tc-img">
                  <div>
                    <img src={test3} alt="mas" />
                  </div>
                </div>
                <div class="tc-text">
                  <h2>
                    I was badly beaten up & hospitalized by my ex-husband when
                    WDC found me. They cleared my hospital bills & gave me a
                    place to stay. Grateful for them.
                  </h2>
                </div>
              </div>
              <div class="tc-text2">
                <h1>Asanat Asanat</h1>
                <h2>Entrepreneur</h2>
              </div>
            </div>
            <div class="testi-cards flex justify-between flex-col cs2">
              <div class="flex flex-col">
                <div class="tc-img">
                  <div>
                    <img src={test2} alt="mas" />
                  </div>
                </div>
                <div class="tc-text">
                  <h2>
                    White Dove Center has been a blessing in my life. They
                    helped me when I was at my lowest.
                  </h2>
                  <h2>
                    I have a full running business now thanks to their capital
                    funding.
                  </h2>
                </div>
              </div>
              <div class="tc-text2s">
                <h1>Vicky Ozohu</h1>
                <h2>Entrepreneur</h2>
              </div>
            </div>
            <div class="testi-card flex justify-between flex-col cs3">
              <div class="flex flex-col">
                <div class="tc-img">
                  <div>
                    <img src={test1} alt="mas" />
                  </div>
                </div>
                <div class="tc-text hidden lg:block">
                  <h2>
                    Like an angel, WDC swooped in in time of crisis. They helped
                    me get back on track after I was thrown out by my
                    ex-husband.
                  </h2>
                  <h2>
                    Through them, I found a 2nd family. I can’t wait to give
                    back!
                  </h2>
                </div>
                <div class="tc-text4 lg:hidden">
                  Like an angel, WDC swooped in in time of crisis. They helped
                  me get back on track after I was thrown out by my ex-husband.
                  Through them, I found a 2nd family. I can’t wait to give back!
                </div>
              </div>
              <div class="tc-text2">
                <h1>Amina Dawodu</h1>
                <h2>Graphic Designer</h2>
              </div>
            </div>
          </div>
          <div class="flex justify-center cs4 pta">
            <img src={Ellipse6} alt="for round-grey" />
            <img src={Ellipse7} alt="for round-RED" class="ptap" />
            <img src={Ellipse8} alt="for round-grey" />
          </div>
        </div>

        <div class="subscribe">
          <div class="sub-text">Subscribe to our newsletter</div>
          <div class="empc">
            <input class="emainp" type="email" placeholder="Email Address" />
            <button class="sub-button">Subscribe</button>
          </div>
        </div>
      </main>

      <footer class="flex flex-col lg:flex-row">
        <div class="fleft">
          <h1>WDC</h1>
          <h2>Helping abused women get right back on their feet!</h2>
          <div class="fmid hidden lg:flex gap-6">
            <img src={facebook} alt={facebook} />
            <img class="fmid" src={twitter} alt={twitter} />
            <img src={youtube} alt={youtube} />
          </div>
        </div>
        <div class="fright">
          <div class="fright-cont">
            <h1>Contact</h1>
            <div class="ehe">
              <h2 class="ehe-1">
                Mayflower bustop, Iyesi road, Lagos state, Nigeria
              </h2>
              <h2>wdcnigeria@hotmail.com</h2>
              <h2>+234 9125 123 450</h2>
            </div>
          </div>
          <div class="fright-cont">
            <h1>Quick links</h1>
            <div class="ehe">
              <h2>About Us</h2>
              <h2>what we do</h2>
              <h2>how to help</h2>
            </div>
          </div>
        </div>
        <div class="lg:hidden justify-center w-full flex gap-6">
          <img class="w-6 h-6" src={facebook} alt={facebook} />
          <img class="w-6 h-6" src={twitter} alt={twitter} />
          <img class="w-6 h-6" src={youtube} alt={youtube} />
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
