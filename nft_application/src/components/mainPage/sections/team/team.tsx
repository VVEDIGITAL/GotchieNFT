import { Trans } from "@lingui/macro";
import member1 from "../../../../assets/main/1_1.png";
import member2 from "../../../../assets/main/2_2.png";
import member3 from "../../../../assets/main/3_3.png";
import member4 from "../../../../assets/main/4_4.png";
import member5 from "../../../../assets/main/5_5.png";

import "./team.sass";

export function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <h1>
          <Trans>Team</Trans>
        </h1>
        <div className="members">
          <div className="first-row">
            <div className="member">
              <div className="member-img red">
                <img src={member1} alt="gotchie face" />
                <div className="shadow"></div>
              </div>
              <div className="text">
                <span>Julia</span>
                <h4>
                  <Trans>3D designer</Trans>
                </h4>
              </div>
            </div>

            <div className="member mobile">
              <div className="member-img blue">
                <img src={member5} alt="gotchie face" />
                <div className="shadow"></div>
              </div>
              <div className="text">
                <span>Anthony</span>
                <h4>
                  <Trans>Project manager</Trans>{" "}
                </h4>
              </div>
            </div>

            <div className="member">
              <div className="member-img orange">
                <img src={member2} alt="gotchie face" />
                <div className="shadow"></div>
              </div>
              <div className="text">
                <span>Jay</span>
                <h4>
                  <Trans>Web designer</Trans>
                </h4>
              </div>
            </div>
          </div>

          <div className="mobile-row">
            <div className="member">
              <div className="member-img blue">
                <img src={member5} alt="gotchie face" />
                <div className="shadow"></div>
              </div>
              <div className="text">
                <span>Alex</span>
                <h4>
                  <Trans>blockchain dev</Trans>{" "}
                </h4>
              </div>
            </div>
          </div>

          <div className="second-row">
            <div className="member">
              <div className="member-img yellow">
                <img src={member4} alt="gotchie face" />
                <div className="shadow"></div>
              </div>
              <div className="text">
                <span>Mark</span>
                <h4>
                  <Trans>CMO</Trans>
                </h4>
              </div>
            </div>

            <div className="member">
              <div className="member-img pink">
                <img src={member3} alt="gotchie face" />
                <div className="shadow"></div>
              </div>
              <div className="text">
                <span>Ivano</span>
                <h4>
                  <Trans>CEO</Trans>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
