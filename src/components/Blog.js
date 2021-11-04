import { Link, Switch, Route } from 'react-router-dom';
import React from 'react';

import Background from './Background';
import BottomBar from './BottomBar';
import TopBar from './TopBar';
import Page from './Page';

import Article1 from './articles/Article1';
import Article2 from './articles/Article2';
import Article3 from './articles/Article3';
import Article4 from './articles/Article4';

const makeKebab = (text) => text.toLowerCase().replace(/ /g, '-');

const ArticleWidget = ({ title, date, author, description, image }) => {
  return (
    <div class="blog-widget">
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

const Articles = ({ children }) => {
  let [articles, setArticles] = React.useState({});

  children = children.length > 1 ? children : [children];

  return (
    <Switch>
      {(() => {
        let key = 0;
        return children.map((article) => {
          let meta = article.props;
          return (
            <Route
              path={'/blog/' + (meta.customLink || makeKebab(meta.title))}
              key={key++}
            >
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
            </Route>
          );
        });
      })()}
      <Route path="/">
        <Background image="/home-background-3.jpg" />
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
              return children.map((article) => {
                let meta = article.props;
                let link =
                  '/blog/' + (meta.customLink || makeKebab(meta.title));
                articles[link] = meta;
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
      </Route>
    </Switch>
  );
};

const Blog = () => (
  <>
    <TopBar />
    <Articles>
      {Article1}
      {Article2}
      {Article3}
      {Article4}
    </Articles>
    <BottomBar />
  </>
);

export default Blog;
