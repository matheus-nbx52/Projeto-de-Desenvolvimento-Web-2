// import { Link } from 'react-router-dom';
import { NotFound, LinkStyle } from './404style';

export default function Page404() {
  return (
    <NotFound>
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops! Nothing was found</h2>
        <p>
          The page you are looking for might have been removed had its name changed or
          is temporarily unavailable.
          <LinkStyle to="/">Return to homepage</LinkStyle>
        </p>
      </div>
    </NotFound>
  );
}
