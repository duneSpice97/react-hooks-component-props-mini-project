import React from "react";
import Article from "./Article";

function ArticleList({articles}) {
  const posts = articles.map(post => {
    return (
        <Article key={Math.random()} articleTitle={post.title} articleDate={post.date} articlePreview={post.preview}/>
    )
  });

  return <main>{posts}</main>;
}

export default ArticleList;
