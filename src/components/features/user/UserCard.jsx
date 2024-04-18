import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsersAsync, selectAllUsers } from "../userSlice";
import { fb_logo, insta_logo, linkedIn_logo, yt_logo } from "../../../assets";

const UserCard = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);

  const plateforms = [
    { platform: 'youtube', logo: yt_logo, alt: 'YouTube' },
    { platform: 'facebook', logo: fb_logo, alt: 'Facebook' },
    { platform: 'instagram', logo: insta_logo, alt: 'Instagram' },
    { platform: 'linkedin', logo: linkedIn_logo, alt: 'LinkedIn' },
  ]

  return (
    <>
      <div className="mt-36 flex flex-wrap flex-col md:flex-row">
        {users ? (
          users.map((user, index) => (
            <div key={index} className="mt-5 mx-5 lg:w-[30%] bg-n-5/50 flex flex-col shadow-lg rounded-lg p-6">
              {user && (
                <>
                  <div className="flex gap-8">
                    <img
                      className="w-20 h-20 rounded-full mb-4"
                      src="https://www.gravatar.com/avatar/?d=mp&s=200"
                      alt="Profile Picture"
                    />
                    <div>
                      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
                      <p className="body-2 mb-4">{user.bio}</p>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4 sm:space-x-12 mb-2">
                    {user.socialDetails.map((social, index) => (
                      plateforms.map((platform) => (
                        social.href.includes(platform.platform) && (
                          <div key={index} >
                            <a href={social.href} >
                              <img
                                key={platform.platform}
                                className="w-12"
                                src={platform.logo}
                                alt={platform.alt}
                              />
                            </a>
                          </div>
                        )
                      ))
                    ))}
                  </div>
                  <div className="inline-grid grid-cols-2 sm:grid-cols-3 pointer-events-none">
                    {user.interests.map((promotion, index) => (
                      <div
                        key={index}
                        className="mx-auto py-2.5 px-5 mt-4 mb-2 text-sm font-medium text-gray-900 rounded-full border border-white/50 hover:bg-gray-700/30 focus:z-10  dark:focus:ring-gray-700 dark:text-gray-400"
                      >
                        {promotion}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default UserCard;
