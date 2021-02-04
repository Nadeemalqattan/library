import { HomeImage, HomeTitle } from "../styles";

const Home = () => {
  return (
    <div className="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-end">
      <div className="one-forth d-flex align-items-center ftco-animate js-fullheight fadeInUp ftco-animated">
        <div className="one-forth d-flex align-items-center ftco-animate js-fullheight fadeInUp ftco-animated">
          <HomeImage
            className="one-third js-fullheight align-self-end order-md-last img-fluid"
            alt="Reading Book"
            src="https://preview.colorlib.com/theme/author/images/undraw_book_lover_mkck.svg"
          />

          <div className="text mt-8">
            <HomeTitle>All The Books You Need</HomeTitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
