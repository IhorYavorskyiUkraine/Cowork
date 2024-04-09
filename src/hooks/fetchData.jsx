import { useMemo } from "react";

const useFetchData= () => {
	const fetchTables = useMemo(() => async (index) => {
		try {
			const response = await fetch('http://localhost:3001/tables');
			const jsonData = await response.json();
			const tables1to3 = jsonData.filter(table => table.id >= 1 && table.id <= `${index}`);
			return tables1to3;
		} catch (error) {
			console.error('Error', error);
		}
	}, []);

	return {fetchTables};
}

export default useFetchData;