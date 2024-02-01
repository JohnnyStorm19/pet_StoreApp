import { useState } from "react";

interface IFilterProps {
  handleFilters: (e: React.SyntheticEvent<HTMLSpanElement>) => void;
  activeGender: string;
  activeCategories: string[];
}

const Filter = ({handleFilters, activeGender, activeCategories}: IFilterProps) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const onFilterClick = () => {
    setIsFilterVisible(!isFilterVisible);
  };



  return (
    <div className="px-[30px] pt-24 md:pt-[72px] mb-4 ">
      <div className="">
        <div className="flex gap-1 mb-2 lg:mb-4 w-fit cursor-pointer" onClick={onFilterClick}>
          <h3 className="uppercase font-neue-bold">Фильтр</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
          </svg>
        </div>
      </div>
      <div className={`${!isFilterVisible ? 'grid-rows-[0fr] opacity-0' : 'grid-rows-[1fr] opacity-100'} grid grid-cols-filter transition-all duration-300 ease-in-out uppercase bg-white z-30`}>
        
        <div className={`flex gap-y-1 gap-x-2 lg:gap-5 items-center [&>span]:cursor-pointer overflow-hidden`}>
          <h3 className="font-neue-bold">Для кого:</h3>
            <span onClick={handleFilters} data-gender="women" className={`${activeGender === 'women' ? 'underline' : ''}`}>Вумэн</span>
            <span onClick={handleFilters} data-gender="men" className={`${activeGender === 'men' ? 'underline' : ''}`}>Мэн</span>
        </div>
        <div className={`flex gap-y-1 gap-x-1 lg:gap-5 items-center flex-wrap [&>span]:cursor-pointer overflow-hidden`}>
          <h3 className="font-neue-bold">Категория:</h3>
          <span data-category="clothes" onClick={handleFilters} className={`${activeCategories.includes('clothes') ? 'underline' : ''}`}>Одежда</span>
          <span data-category="shoes" onClick={handleFilters} className={`${activeCategories.includes('shoes') ? 'underline' : ''}`}>Обувь</span>
          <span data-category="accessories" onClick={handleFilters} className={`${activeCategories.includes('accessories') ? 'underline' : ''}`}>Акссесуары</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;

