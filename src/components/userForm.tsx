import React, { useState, ChangeEvent, FormEvent } from 'react';
import { findMentor} from '../utilities/types';

const UserForm = () => {
  const [formData, setFormData] = useState<findMentor>({
    id:0,
    fullName: '',
    firstName: '',
    lastName: '',
    location: '',
    language: [],
    joined: '',
    availability: false,
    aboutSelf: '',
    profession: '',
    experience: [],
    picture: '',
  });

  const [errors, setErrors] = useState({id:0,
    fullName: '',
    firstName: '',
    lastName: '',
    location: '',
    language: [],
    joined: '',
    availability: false,
    aboutSelf: '',
    profession: '',
    experience: [],
    picture: '',});

  // const validate = () => {
  //   const errors:  Partial<findMentor> = {};
  //   if (!formData.fullName) errors.fullName = 'Full Name is required';
  //   if (!formData.firstName) errors.firstName = 'First Name is required';
  //   if (!formData.lastName) errors.lastName = 'Last Name is required';
  //   if (!formData.location) errors.location = 'Location is required';
  //   if (!formData.language) errors.language = 'At least one language is required';
  //   if (!formData.joined) errors.joined = 'Join date is required';
  //   if (!formData.aboutSelf) errors.aboutSelf = 'Please tell us something about yourself';
  //   if (!formData.profession) errors.profession = 'Profession is required';
  //   if (!formData.experience.length) errors.experience = 'At least one experience is required';
  //   if (!formData.picture) errors.picture = 'Profile picture URL is required';
  //   return errors;
  // };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (name === 'language' || name === 'experience') {
      setFormData({
        ...formData,
        [name]: value.split(',').map((item) => item.trim()),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const validationErrors = validate();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //   } else {
  //     console.log('Form data submitted:', formData);
  //     setErrors({});
  //     // Clear the form if needed
  //     setFormData({
  //       id:1,
  //       fullName: '',
  //       firstName: '',
  //       lastName: '',
  //       location: '',
  //       language: [],
  //       joined: '',
  //       availability: false,
  //       aboutSelf: '',
  //       profession: '',
  //       experience: [],
  //       picture: '',
  //     });
  //   }
  // };

  return (
    <form className="space-y-4">
  <div>
    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name:</label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      value={formData.fullName}
      onChange={handleChange}
      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
  </div>

  <div>
    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
  </div>

  <div>
    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
  </div>
  <div>
    <label htmlFor="profession" className="block text-sm font-medium text-gray-700">Profession:</label>
    <input
      type="text"
      id="profession"
      name="profession"
      value={formData.profession}
      onChange={handleChange}
      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.profession && <p className="text-red-500 text-sm">{errors.profession}</p>}
  </div>
  <div>
    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location:</label>
    <input
      type="text"
      id="location"
      name="location"
      value={formData.location}
      onChange={handleChange}
      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
  </div>

  <div>
    <label htmlFor="language" className="block text-sm font-medium text-gray-700">Languages (comma-separated):</label>
    <input
      type="text"
      id="language"
      name="language"
      value={formData.language}
      onChange={handleChange}
      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.language && <p className="text-red-500 text-sm">{errors.language}</p>}
  </div>
  <div>
    <label htmlFor="aboutSelf" className="block text-sm font-medium text-gray-700">About Yourself:</label>
    <textarea
      id="aboutSelf"
      name="aboutSelf"
      value={formData.aboutSelf}
      // onChange={handleChange}
      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.aboutSelf && <p className="text-red-500 text-sm">{errors.aboutSelf}</p>}
  </div>

  <div>
    <label htmlFor="joined" className="block text-sm font-medium text-gray-700">Joined Date:</label>
    <input
      type="datetime-local"
      id="joined"
      name="joined"
      value={formData.joined}
      onChange={handleChange}
      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.joined && <p className="text-red-500 text-sm">{errors.joined}</p>}
  </div>  

  <div>
    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience (comma-separated):</label>
    <input
      type="text"
      id="experience"
      name="experience"
      value={formData.experience.join(', ')}
      onChange={handleChange}
      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
  </div>

  <div>
    <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability:</label>
    <input
      type="checkbox"
      id="availability"
      name="availability"
      checked={formData.availability}
      onChange={handleChange}
      className="rounded-md border-gray-300 size-6 focus:ring-blue-500"
    />
  </div>

  <div>
    <label htmlFor="picture" className="block text-sm font-medium text-gray-700">Profile Picture URL:</label>
    <input
      type="file"
      id="picture"
      name="picture"
      value={formData.picture}
      onChange={handleChange}
      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.picture && <p className="text-red-500 text-sm">{errors.picture}</p>}
  </div>

  <button
    type="submit"
    className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400"
  >
    Submit
  </button>
</form>

  );
};

export default UserForm;
