import React, { ComponentType } from "react";
import { DocumentNode } from "@apollo/client";
import { apolloClient as client } from "../apollo/client";

interface WithGraphQLDataProps<T> {
	data: T | null;
	loading: boolean;
	error: Error | null;
}

export const withGraphQLData = <TData, TProps extends WithGraphQLDataProps<TData>>(
	WrappedComponent: ComponentType<TProps>,
	query: DocumentNode
) => {
	return class extends React.Component<
		Omit<TProps, keyof WithGraphQLDataProps<TData>>
	> {
		state = {
			data: null as TData | null,
			loading: true,
			error: null as Error | null,
		};

		componentDidMount() {
			client
				.query<TData>({ query })
				.then((response) => {
					this.setState({ data: response.data, loading: false });
				})
				.catch((error) => {
					this.setState({ error, loading: false });
				});
		}

		render() {
			const { data, loading, error } = this.state;

			const props = {
				...this.props,
				data,
				loading,
				error,
			} as TProps;

			return <WrappedComponent {...props} />;
		}
	};
};

export default withGraphQLData;
