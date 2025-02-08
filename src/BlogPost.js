import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BlogPost = ({ slug }) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const client = createClient({
    space: 'u78i0523nrmp', // Replace with your Contentful Space ID
    accessToken: 'a59qku8BBzEr_9sfROSaS_wHIaQ145I0IlGWAW1IjwM', // Replace with your delivery token
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'blogPost',
          'fields.slug': slug,
        });

        if (response.items.length > 0) {
          setPost(response.items[0].fields);
        } else {
          setError('Post not found.');
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load blog post.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, client]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <div className="prose">
        {documentToReactComponents(post.content)} {/* Render Rich Text */}
      </div>
    </div>
  );
};

export default BlogPost;
