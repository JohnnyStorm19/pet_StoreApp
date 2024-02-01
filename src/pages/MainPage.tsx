import CtAHero from "../components/CtAHero/CtAHero";
import CtAImage from "../components/CtAImage/CtAImage";
import CtAOffers from "../components/CtAOffers/CtAOffers";
import NewsLetterSubscribeForm from "../components/Form/NewsLetterSubscribeForm";
import MainHero from "../components/MainHero/MainHero";

const MainPage = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-24 scroll-smooth">
      <MainHero />
      <CtAHero>Покупай, поторапливайся</CtAHero>
      <CtAOffers title="нью" type="new" id="new" />
      <CtAOffers title="сэйл" type="sale" id="sale" />
      <CtAOffers title="бест селлерс" type="best-sellers" id="best-sellers" />
      <div className="px-[30px] flex justify-end md:gap-[90px] gap-5 items-center md:flex-row flex-col">
        <CtAImage image="src/assets/images/CtA/CtA_2_small.jpg" navigateLink="/new" title="Новое поступление" />
        <CtAImage image="src/assets/images/CtA/CtA_1_large.jpg" navigateLink="/catalogue" title="Возьми все" />
      </div>
      <NewsLetterSubscribeForm />
    </div>
  );
};

export default MainPage;
