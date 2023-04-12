import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eos
            maiores quo eveniet rerum cupiditate, vitae, labore recusandae fuga
            officiis esse et reprehenderit alias voluptate, neque animi tempora
            quaerat rem.
          </p>
          <div className="ctas">
            {/* cta means "Call to Action" */}
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
