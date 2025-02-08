import React, { useState } from 'react';
import { createClient } from 'contentful-management';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');

  // Create Contentful client
  const client = createClient({
    accessToken: 'CFPAT-nhcL6B4O6jGoWpdCmK06uZLgtViXfQgU-KWDBxepp_k', // Replace with your Contentful Management API token
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    console.log('Submitting new blog post...');

    const richTextContent = {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          content: [
            {
              nodeType: 'text',
              value: content, // Dynamically add the user-provided content
              marks: [],
              data: {},
            },
          ],
          data: {},
        },
      ],
    };

    try {
      const space = await client.getSpace('u78i0523nrmp'); // Replace with your Space ID
      console.log('Connected to space:', space);

      const environment = await space.getEnvironment('master');
      console.log('Connected to environment:', environment);

      const entry = await environment.createEntry('blogPost', {
        fields: {
          title: {
            'en-US': title,
          },
          content: {
            'en-US': richTextContent, // Use the RichText content
          },
        },
      });

      console.log('Entry created successfully:', entry);
      setStatus('Blog post created successfully!');
    } catch (error) {
      console.error('Error creating blog post:', error);
      setStatus('Error creating blog post. See console for details.');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter blog title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-medium mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter blog content"
            rows="6"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#016162] text-white py-2 px-4 rounded hover:bg-[#014F4F]"
        >
          Submit
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
};

export default Admin;
