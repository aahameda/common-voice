import { Localized } from '@fluent/react';
import * as React from 'react';
import { trackNav, getTrackClass } from '../../services/tracker';
import URLS from '../../urls';
import {
  ContributableLocaleLock,
  LocaleNavLink,
  useLocale,
} from '../locale-helpers';

import './nav.css';

const LocalizedNavLink = ({ id, to }: { id: string; to: string }) => {
  const [locale] = useLocale();
  return (
    <Localized id={id}>
      <LocaleNavLink
        className={getTrackClass('fs', id)}
        to={to}
        exact
        onClick={() => trackNav(id, locale)}
      />
    </Localized>
  );
};

export default ({ children, ...props }: { [key: string]: any }) => (
  <nav {...props} className="nav-list">
    <div className="nav-links">
      <ContributableLocaleLock>
      <LocalizedNavLink id="listen" to={URLS.LISTEN} />
        <LocalizedNavLink id="speak" to={URLS.SPEAK} />
      </ContributableLocaleLock>
      <LocalizedNavLink id="dashboard" to={URLS.DASHBOARD} />
      <LocalizedNavLink id="languages" to={URLS.LANGUAGES} />
    </div>
    {children}
  </nav>
);
