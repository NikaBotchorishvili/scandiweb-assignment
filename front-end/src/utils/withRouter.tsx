import queryString from 'query-string';
import React from 'react';
import { useNavigate, useParams, useLocation, NavigateFunction, Params,  } from 'react-router-dom';
export interface WithRouterProps {
  navigate: NavigateFunction;
  params: Params;
  query: Record<string, string | string[]>;
}

function withRouter<P extends WithRouterProps>(
  Component: React.ComponentType<P>
) {
  return function ComponentWithRouterProp(props: Omit<P, keyof WithRouterProps>) {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const query = queryString.parse(location.search);

    return <Component {...(props as P)} navigate={navigate} params={params} query={query} />;
  };
}

export default withRouter;
