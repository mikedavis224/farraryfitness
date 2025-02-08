import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const client = createClient({
    space: "u78i0523nrmp", // Your Contentful Space ID
    accessToken: "a59qku8BBzEr_9sfROSaS_wHIaQ145I0IlGWAW1IjwM", // Your Contentful Delivery API Access Token
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({
          content_type: "blogPost", // Replace with your content type ID
          order: "-fields.publishDate", // Order by publish date descending
        });
        setPosts(response.items || []);
      } catch (err) {
        console.error("Failed to load blog posts.", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Blog</h1>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.sys.id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <Link to={`/blog/${post.fields.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 text-[#016162] hover:underline">
                  {post.fields.title}
                </h2>
              </Link>
              <p className="text-gray-500 text-sm mb-4">
                {new Date(post.fields.publishDate).toLocaleDateString()}
              </p>
              <div className="text-gray-700">
                {post.fields.content ? (
                  documentToReactComponents(post.fields.content, {
                    renderNode: {
                      "paragraph": (node, children) => (
                        <p>{children}</p>
                      ),
                    },
                  }).slice(0, 1) // Show only the first paragraph as excerpt
                ) : (
                  "No content available."
                )}
              </div>
              <Link
                to={`/blog/${post.fields.slug}`}
                className="text-[#016162] hover:underline mt-4 inline-block"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No blog posts available at the moment.</p>
      )}
    </div>
  );
};

export default Blog;
