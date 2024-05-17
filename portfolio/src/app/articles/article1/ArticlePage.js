"use client";
import React, { useState, useEffect } from 'react';

const ArticlePage = ({ id }) => {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetch(`/assets/articles/${id}.json`)
            .then(response => response.json())
            .then(data => setArticle(data))
            .catch(error => console.error('Error fetching article:', error));
    }, [id]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">{article.name}</h1>
            <p>{article.content}</p>
        </div>
    );
}

export default ArticlePage;
