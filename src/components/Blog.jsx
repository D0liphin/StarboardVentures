import { Link, Switch, Route } from 'react-router-dom';
import React from 'react';

import Background from './Background';
import BottomBar from './BottomBar';
import TopBar from './TopBar';
import Page from './Page';
import makeKebab from '../util/makeKebab';

import Article1 from './articles/Article1';
import Article2 from './articles/Article2';
import Article3 from './articles/Article3';
import Article4 from './articles/Article4';
import Article5 from './articles/Article5';

/**
 * Used only internally. Used to render the clickable article
 * widgets.
 */
const ArticleWidget = ({ title, date, author, description, image }) => {
  return (
    <div class="article-widget">
      <div style={{ padding: '20px' }}>
        <div class="big-meta">
          <div class="text-container">
            <div class="title">{title}</div>
            <div class="description">{description}</div>
          </div>
          <div class="img-container">
            <img src={image} alt="" />
          </div>
        </div>
        <div class="description-mobile">{description}</div>
        <div class="small-meta">
          <div class="date">{date}</div>
          <div>·</div>
          <div class="author">{author}</div>
        </div>
      </div>
    </div>
  );
};

/**
 * Creates the page for a given article, from a given `meta`
 * parameter, which is the props of an `ArticleWidget`.
 */
function createArticlePage(meta) {
  return (
    <Page useMarginHeight={false}>
      <div class="article">
        <div class="big-meta-positioner">
          <div class="title">{meta.title}</div>
        </div>
        <div class="small-meta-positioner">
          <Link to="/blog">
            <div class="return-to-blog">
              <img src="./arrow.svg" alt="return arrow" />
              Blog
            </div>
          </Link>
          <div class="small-meta">
            <div style={{ flexFlow: '2', width: '100%' }}></div>
            <div class="small-meta-item">{meta.date}</div>
            <div class="small-meta-item">·</div>
            <div class="small-meta-item">{meta.author}</div>
          </div>
        </div>
        <div
          style={{
            display: 'block',
            borderBottom: '1px solid var(--dark-blue)',
            marginBottom: '15px',
          }}
        />
        {meta.children}
      </div>
    </Page>
  );
}

/**
 * Creates the blog page (with all the article widgets) from a
 * list of `ArticleWidget` components
 */
function createBlogPage(iArticles) {
  return (
    <Page>
      <major-heading>Blog</major-heading>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '20px',
        }}
      >
        {(() => {
          let key = 0;
          return iArticles.map((article) => {
            let meta = article.props;
            let link = '/blog/' + (meta.customLink || makeKebab(meta.title));
            return (
              <Link to={link}>
                <ArticleWidget
                  title={meta.title}
                  date={meta.date}
                  author={meta.author}
                  description={meta.description}
                  image={meta.image}
                  key={key++}
                />
              </Link>
            );
          });
        })()}
      </div>
    </Page>
  );
}

const Articles = ({ children }) => {
  let [articles] = React.useState({});
  // article interfaces - basically articles that have not yet been
  // built to DOM
  let iArticles = children.length > 1 ? children : [children];

  return (
    <Switch>
      {/* Returns a list of `Route` components, each with the whole page 
        they are creating inside */}
      {(() => {
        let key = 0;
        return iArticles.map((article) => {
          let meta = article.props;
          return (
            <Route
              path={'/blog/' + (meta.customLink || makeKebab(meta.title))}
              key={key++}
            >
              {createArticlePage(meta)}
            </Route>
          );
        });
      })()}
      <Route path="/">
        <Background imgSrc="/home-background-3.jpg" />
        {createBlogPage(iArticles)}
      </Route>
    </Switch>
  );
};

const Blog = () => (
  <>
    <TopBar />
    <Articles>
      {Article5}
      {Article4}
      {Article3}
      {Article2}
      {Article1}
    </Articles>
    <BottomBar />
  </>
);

export default Blog;
