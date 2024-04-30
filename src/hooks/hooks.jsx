import { useMemo, useState } from "react";

const useFetchData= () => {
	const fetchTables = useMemo(() => async (index) => {
		try {
			const response = await fetch('http://localhost:3001/tables');
			const jsonData = await response.json();
			return jsonData;
		} catch (error) {
			console.error('Error', error);
		}
	}, []);

	const fetchTrusted = useMemo(() => async () => {
		try {
			const response = await fetch('http://localhost:3001/trustedCompanies');
			const jsonData = await response.json();
			return jsonData;
		} catch (error) {
			console.error('Error', error);
		}
	}, []);

	const fetchTWhyChoose = useMemo(() => async () => {
		try {
			const response = await fetch('http://localhost:3001/whyChoose');
			const jsonData = await response.json();
			return jsonData;
		} catch (error) {
			console.error('Error', error);
		}
	}, []);

	const fetchHearClients = useMemo(() => async () => {
		try {
			const response = await fetch('http://localhost:3001/hearClients');
			const jsonData = await response.json();
			return jsonData;
		} catch (error) {
			console.error('Error', error);
		}
	}, []);

	return {fetchTables, fetchTrusted, fetchTWhyChoose, fetchHearClients};
}

const useLoading = () => {
	const [loading, setLoading] = useState(false);

	const startLoading = () => {
		setLoading(true);
	};

	const stopLoading = () => {
		setLoading(false);
	};

	return { loading, startLoading, stopLoading };
}

export {useFetchData, useLoading};