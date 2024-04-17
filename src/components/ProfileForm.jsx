import React, { useState, useEffect } from 'react';
import { fb_logo, insta_logo, linkedIn_logo, yt_logo } from '../assets';

const ProfileForm = ({ userData, onSubmit, onCancel }) => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [interests, setInterests] = useState([]);
    const [socialDetails, setSocialDetails] = useState([
        { href: '', src: fb_logo, alt: 'Facebook', userName: '' },
        { href: '', src: yt_logo, alt: 'YouTube', userName: '' },
        { href: '', src: linkedIn_logo, alt: 'LinkedIn', userName: '' },
        { href: '', src: insta_logo, alt: 'Instagram', userName: '' },
    ]);
    const [about, setAbout] = useState('');

    useEffect(() => {
        if (userData) {
            setName(userData.name || '');
            setBio(userData.bio || '');
            setInterests(userData.interests || []);
            setSocialDetails(userData.socialDetails || []);
            setAbout(userData.about || '');
        }
    }, [userData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, bio, interests, socialDetails, about });
    };

    const handleSocialDetailChange = (index, key, value) => {
        const updatedSocialDetails = [...socialDetails];
        updatedSocialDetails[index] = { ...updatedSocialDetails[index], [key]: value };
        setSocialDetails(updatedSocialDetails);
    };

    const plateforms = [
        { platform: 'youtube', logo: yt_logo, alt: 'YouTube' },
        { platform: 'facebook', logo: fb_logo, alt: 'Facebook' },
        { platform: 'instagram', logo: insta_logo, alt: 'Instagram' },
        { platform: 'linkedin', logo: linkedIn_logo, alt: 'LinkedIn' },
    ]

    return (
        <form onSubmit={handleSubmit} className="p-4 lg:p-8 border-b border-n-6 bg-n-8/40 backdrop-blur-sm rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Update Profile</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1 mt-5" htmlFor="name">
                    Name
                </label>
                <input
                    className="mt-1 block w-full border rounded-md py-2 px-4 focus:outline-none sm:text-sm placeholder-gray-400/50 bg-n-5/50 border-n-5/80 mb-4"
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1 mt-5" htmlFor="bio">
                    Bio
                </label>
                <textarea
                    className="mt-1 block w-full border rounded-md py-2 px-4 focus:outline-none sm:text-sm placeholder-gray-400/50 bg-n-5/50 border-n-5/80 mb-4"
                    id="bio"
                    rows={3}
                    placeholder="Write your description"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1 mt-5" htmlFor="interests">
                    Interests (one per line)
                </label>
                <textarea
                    className="mt-1 block w-full border rounded-md py-2 px-4 focus:outline-none sm:text-sm placeholder-gray-400/50 bg-n-5/50 border-n-5/80 mb-4"
                    rows={5}
                    id="interests"
                    placeholder="Enter your interests, one per line"
                    value={interests.join('\n')}
                    onChange={(e) => setInterests(e.target.value.split('\n'))}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm mb-2 font-medium mt-5">
                    Social Media Details (Maximum 4)
                </label>
                {socialDetails.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                        <div className="flex md:justify-start items-center gap-5">
                            {plateforms.map((social) => (
                                detail.href.includes(social.platform) && (
                                    <img
                                        key={social.platform}
                                        className="w-12"
                                        src={social.logo}
                                        alt={social.alt}
                                    />
                                )
                            ))}
                        </div>
                        <p className="hidden sm:flex w-1/4">{detail.alt}</p>
                        <input
                            type="text"
                            className="w-2/4 border rounded-md py-2 px-4 focus:outline-none sm:text-sm placeholder-gray-400/50 bg-n-5/50 border-n-5/80"
                            placeholder="Link"
                            value={detail.href}
                            onChange={(e) => handleSocialDetailChange(index, 'href', e.target.value)}
                        />
                        <input
                            type="text"
                            className="w-2/4 border rounded-md py-2 px-4 focus:outline-none sm:text-sm placeholder-gray-400/50 bg-n-5/50 border-n-5/80"
                            placeholder="Username"
                            value={detail.userName}
                            onChange={(e) => handleSocialDetailChange(index, 'userName', e.target.value)}
                        />
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1 mt-5" htmlFor="about">
                    About
                </label>
                <textarea
                    className="mt-1 block w-full border rounded-md py-2 px-4 focus:outline-none sm:text-sm placeholder-gray-400/50 bg-n-5/50 border-n-5/80 mb-4"
                    id="about"
                    rows={4}
                    placeholder="Write about yourself"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-between mt-10 mb-3">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
                <button
                    onClick={onCancel}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default ProfileForm;
