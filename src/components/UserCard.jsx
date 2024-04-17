import React from "react";
import { fb_logo, insta_logo, linkedIn_logo, notification4, yt_logo } from "../assets/index";

const UserCard = () => {
  
  const users = [
    {
      name: "John Doe",
      bio: "Software Developer with a passion for web technologies.",
      profilePic: notification4,
      socialMediaLinks: [
        { href: "#", src: fb_logo, alt: "Facebook" },
        { href: "#", src: yt_logo, alt: "YouTube" },
        { href: "#", src: linkedIn_logo, alt: "LinkedIn" },
        { href: "#", src: insta_logo, alt: "Instagram" },
      ],
      promotions: ["Promotion 1", "Promotion 2", "Promotion 3", "Promotion 4", "Promotion 5", "Promotion 6"],
    },
    {
      name: "John Doe",
      bio: "Software Developer with a passion for web technologies.",
      profilePic: notification4,
      socialMediaLinks: [
        { href: "#", src: fb_logo, alt: "Facebook" },
        { href: "#", src: yt_logo, alt: "YouTube" },
        { href: "#", src: linkedIn_logo, alt: "LinkedIn" },
        { href: "#", src: insta_logo, alt: "Instagram" },
      ],
      promotions: ["Promotion 1", "Promotion 2", "Promotion 3",],
    },
    {
      name: "John Doe",
      bio: "Software Developer with a passion for web technologies.",
      profilePic: notification4,
      socialMediaLinks: [
        { href: "#", src: fb_logo, alt: "Facebook" },
        { href: "#", src: yt_logo, alt: "YouTube" },
        { href: "#", src: linkedIn_logo, alt: "LinkedIn" },
        { href: "#", src: insta_logo, alt: "Instagram" },
      ],
      promotions: ["Promotion 1", "Promotion 2", "Promotion 3", "Promotion 4"],
    },
  ];

  return (
    <>
      <div className="mt-36 flex flex-wrap flex-col md:flex-row">
        {users.map((user, index) => (
          <div key={index} className="mt-5 mx-5 md:w-[30%] bg-n-5/50 flex flex-col shadow-lg rounded-lg p-6">
            <div className="flex gap-8">
              <img
                className="w-20 h-20 rounded-full mb-4"
                src={user.profilePic}
                alt="Profile"
              />
              <div>
                <h2 className="text-xl font-bold mb-2">{user.name}</h2>
                <p className="body-2 mb-4">{user.bio}</p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              {user.socialMediaLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={link.src}
                    alt={link.alt}
                  />
                </a>
              ))}
            </div>
            <div className="inline-grid grid-cols-2 sm:grid-cols-3">
              {user.promotions.map((promotion, index) => (
                <div
                  key={index}
                  className="mx-auto py-2.5 px-5 mt-4 mb-2 text-sm font-medium text-gray-900 rounded-full border border-white/50 hover:bg-gray-700/30 focus:z-10  dark:focus:ring-gray-700 dark:text-gray-400"
                >
                  {promotion}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserCard;
