import queryString from 'query-string';
import React from 'react';
import { useNavigate, useParams, useLocation, NavigateFunction, Params, Location,  } from 'react-router-dom';
export interface WithRouterProps {
  navigate: NavigateFunction;
  params: Params;
  query: Record<string, string | string[]>;
  location: Location<any>;
}

function withRouter<P extends WithRouterProps>(
  Component: React.ComponentType<P>
) {
  return function ComponentWithRouterProp(props: Omit<P, keyof WithRouterProps>) {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const query = queryString.parse(location.search);

    return <Component {...(props as P)} location={location} navigate={navigate} params={params} query={query} />;
  };
}

export default withRouter;
