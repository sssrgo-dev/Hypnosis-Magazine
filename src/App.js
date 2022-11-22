import React from 'react';
import './sass/App.scss';

import Banner from './components/Banner/Banner';
import SiteNavigation from './components/SiteNavigation/SiteNavigation';
import MainHeading from './components/MainHeading';
import Author from './components/ArticleMeta/Author';
import SocialShareBlock from './components/ArticleMeta/SocialShareBlock';

import { bannersMain } from './content/content';

const App = () => {
  return (
    <>
      <header className="section">
        {/* regard splitting this section to different elements */}
        <SiteNavigation
          classes={['grid', 'grid--padded', 'grid--align-items_center']}
        />
      </header>
      <main>
        <>
          <section className="section section--light-bottom">
            <MainHeading classes={['grid', 'grid--padded']} />
          </section>
          <section className="section">
            <div
              className={[
                'grid',
                'grid--padded',
                'grid--justify-content_space-between',
                'grid--align-items_center',
                'author-info',
              ].join(' ')}
            >
              <>
                <Author
                  classes={[
                    'grid__col-desk-4',
                    'grid',
                    'grid--align-items_center',
                    'author',
                  ]}
                />
                <SocialShareBlock
                  classes={[
                    'grid__col-desk-6',
                    'grid',
                    'grid--justify-content_flex-end',
                    'buttons-share',
                  ]}
                />
              </>
            </div>
          </section>
          <section className="section--main grid">
            <Banner blockModifier="main" content={bannersMain[0]}></Banner>
          </section>
        </>
      </main>
    </>
  );
};

export default App;
