import React from 'react';
import { stylesync } from '../assets';
import { footerData } from '../constants';
import { Link } from 'react-router-dom';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-n-7/50 mt-10">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-center pt-5">
        <div className="w-full md:w-1/7 p-4">
          <Link className="flex w-[12rem] xl:mr-8" to="/">
            <img src={stylesync} width={190} height={40} alt="StyleSync" />
          </Link>
        </div>

        {footerData.map((column, index) => (
          <div key={index} className="w-full md:w-1/7 p-4">
            <h3 className="font-medium mb-1 pointer-events-none">{column.title}</h3>
            <ul>
              {column.items.map((item, itemIndex) => (
                <li className="text-sm text-n-2/80 cursor-pointer hover:text-white" key={itemIndex}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      <p className="font-medium text-sm text-center py-3">Copyright &copy; StyleSync LLC {currentYear}</p>
    </footer>
  );
};

export default Footer;
