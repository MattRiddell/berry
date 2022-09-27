import {useLocation}                      from '@docusaurus/router';
import {useDocsSidebar}                   from '@docusaurus/theme-common/internal';
import BackToTopButton                    from '@theme/BackToTopButton';
import DocPageLayoutMain                  from '@theme/DocPage/Layout/Main';
import DocPageLayoutSidebar               from '@theme/DocPage/Layout/Sidebar';
import Layout                             from '@theme/Layout';
import React, {useLayoutEffect, useState} from 'react';

import styles                             from './styles.module.css';

// eslint-disable-next-line arca/no-default-export
export default function DocPageLayout({children}) {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);

  const route = useLocation();

  useLayoutEffect(() => {
    // eslint-disable-next-line no-undef
    document.body.setAttribute(`x-doc-route`, route.pathname);
  });

  return (
    <Layout wrapperClassName={styles.docsWrapper}>
      <BackToTopButton />
      <div className={styles.docPage}>
        {sidebar && (
          <DocPageLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocPageLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
          {children}
        </DocPageLayoutMain>
      </div>
    </Layout>
  );
}
