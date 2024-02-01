import { useState } from "react";

const NewsLetterSubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleEmailChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value.trim());
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isChecked) {
      console.log("Please check");
      return;
    }
  };

  return (
    <div className="w-[86.6%] mx-auto">
      <div className="w-[93%] mx-auto lg:ml-auto lg:mr-0 py-[3vw] lg:border-2 lg:border-black md:border-t-2 md:border-black">
        <div className="flex flex-wrap gap-[6%] items-center justify-center">
          <img src="images/form_img.jpg" className="xl:-ml-[7.7%]" />
          <form className="flex flex-col gap-12 w-3/4 xl:w-[45%] uppercase" onSubmit={submitHandler}>
            <label htmlFor="email" className="font-neue-bold text-3xl md:text-5xl xl:text-left text-center">
              Подпишись на рассылку
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-MAIL"
              value={email}
              onChange={handleEmailChange}
              className="pb-5 border-b-2 border-black focus:outline-none"
              required
            />
            <label
              htmlFor="aggrement-checkbox"
              className="text-xs flex items-center"
            >
              <input
                type="checkbox"
                name="checkbox"
                id="aggrement-checkbox"
                onChange={handleCheckboxChange}
                className="accent-black w-5 h-5 mr-5"
              />
              <p className="w-[60%]">
                Я ознакомился и согласен с политикой обработки персональных данных
              </p>
            </label>
            <button type="submit" className="button-primary">
              Подписаться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSubscribeForm;
