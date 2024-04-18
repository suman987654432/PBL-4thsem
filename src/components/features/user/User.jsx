import React, { useState, useEffect } from 'react';
import { PencilIcon } from '@heroicons/react/solid';
import bg_image from "../../../assets/bg_image.jpeg"
import { fb_logo, insta_logo, linkedIn_logo, yt_logo } from '../../../assets';
import ProfileForm from './ProfileUpdateForm';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileAsync, updateUserProfileAsync, selectUserData } from '../userSlice';

const User = () => {
    const dispatch = useDispatch();
    const userData = useSelector(selectUserData);
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        dispatch(getUserProfileAsync());
    }, [dispatch]);

    const handleFormSubmit = async (formData) => {
        try {
            await dispatch(updateUserProfileAsync(formData));
            dispatch(getUserProfileAsync());
            setIsFormVisible(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleFormCancel = () => {
        setIsFormVisible(false);
    };

    const handleEditClick = () => {
        setIsFormVisible(true);
    };

    const plateforms = [
        { platform: 'youtube', logo: yt_logo, alt: 'YouTube' },
        { platform: 'facebook', logo: fb_logo, alt: 'Facebook' },
        { platform: 'instagram', logo: insta_logo, alt: 'Instagram' },
        { platform: 'linkedin', logo: linkedIn_logo, alt: 'LinkedIn' },
    ]

    return (
        <div className="md:w-9/12 lg:w-7/12 mx-4 md:mx-auto sm:mx-6 mt-32 bg-n-5/50 rounded-xl relative">
            {isFormVisible ? (
                <ProfileForm userData={userData} initialData={userData} onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
            ) : (
                <>
                    <div className="w-full rounded-t-xl overflow-hidden">
                        <img src={bg_image} alt="background-img" className="w-full h-40 object-cover" />
                    </div>

                    <div className="absolute ml-2 top-[122px] sm:top-[108px] md:top-[100px] left-0 right-0 flex justify-between items-center p-4">
                        <img
                            src="https://www.gravatar.com/avatar/?d=mp&s=200"
                            alt="Profile Picture"
                            className="w-24 h-24 sm:w-32 sm:h-32 md:h-36 md:w-36 rounded-full border-2 object-fill border-white"
                        />
                        <button
                            onClick={handleEditClick}
                            className="hover:text-gray-500 border p-2 rounded-full border-n-4/60"
                        >
                            <PencilIcon className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="flex flex-col p-4 mx-2 md:ml-5 mt-16 sm:mt-24">
                        <h2 className="text-2xl font-bold mt-4">{userData.name}</h2>

                        <p className="mt-2 md:max-w-[800px] text-justify body-2">
                            {userData.bio}
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-28 md:space-x-40 lg:space-x-80">
                            <div>
                                <h3 className="font-semibold">Promotion Interests:</h3>
                                <ul className="list-disc ml-6 mt-2">
                                    {userData.interests && userData.interests.map((interest, index) => (
                                        <li className="list-none mb-1 body-2" key={index}>{interest}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex mt-6 sm:mt-0 flex-col justify-center space-y-2">
                                {userData.socialDetails && userData.socialDetails
                                    .filter(link => link.href)
                                    .map((link, index) => (
                                        <a key={index} href={link.href} target="_blank">
                                            <div className="flex md:justify-start items-center gap-5">
                                                {plateforms.map((social) => (
                                                    link.href.includes(social.platform) && (
                                                        <img
                                                            key={social.platform}
                                                            className="w-10 sm:w-12"
                                                            src={social.logo}
                                                            alt={social.alt}
                                                        />
                                                    )
                                                ))}
                                                <p className="">{link.userName}</p>
                                            </div>
                                        </a>
                                    ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col p-4 mx-4 pb-8">
                        <h2 className="text-2xl font-bold">About</h2>

                        <p className="mt-2 md:max-w-[800px] text-justify body-2">
                            {userData.about}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default User;
