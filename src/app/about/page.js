import Link from "next/link";
import paolla7 from "@/assets/images/paolla/paolla7.jpg";

export default function About() {
  return (
    <main className="page">
      <div id="content" className="site-content">
        <div className="header-content content-1170 center-relative block">
          <h1 className="entry-title">
            Jeg er Paolla og jobber som
            <br />
            <i>
              <span className="">modell</span> &amp;{" "}
              <span className="">content creator. </span>
            </i>
          </h1>
        </div>
        <div className="about page-header-image content-1170 center-relative">
          <img src={paolla7.src} alt="About" />
        </div>

        <div className="page-content-wrapper center-relative content-1170">
          {/* paragraph text */}
          <div className="page-content">
            <div className="one_half">
              <p>
                At as in understood an remarkably solit alitude mean them very
                seen she she use totally written the observe pressed at justice.
                Instantly cordially far intention recommend estimable yet her
                his ladies stairs. Enough esteem add fat all enable. Needed its
                design than of winter see.
              </p>
            </div>
            <div className="one_half last">
              <p>
                Great turbulent clouds intelligent beings Apollonius of Perga
                trillion courage of our questions white dwarf Euclid kidling the
                energy hidden in matter, a very small stage in a vast cosmic
                arena culture and billions upon billions inconspicuous motes of
                rock and gas light years.
              </p>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
