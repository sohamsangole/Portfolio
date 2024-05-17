"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/assets/articles.json')
            .then(response => response.json())
            .then(data => {
                setArticles(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setError('Error fetching articles. Please try again later.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }





    return (
        <div className="flex flex-wrap justify-center gap-14 py-12">
            {articles.map((article, index) => (
                <div key={index} className="max-w-md rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-110">
                    <Link
                        href={{
                            pathname: `/articles/article${index + 1}`,
                            query: { id: index },
                        }}
                    >
                        <div>
                            <img
                                src={article.image}
                                alt={article.name}
                                className="w-full h-56 object-cover"
                            />

                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{article.name}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ArticlesList;
