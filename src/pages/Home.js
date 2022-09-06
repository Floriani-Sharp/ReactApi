import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';

import handler from '../images/handler.jpeg';

const columns = [
  { field: 'id', headerName: 'N°', width: 90 },
  {
    field: 'handler',
    headerName: 'Manutentionnaire',
    width: 150,
    editable: true,
  },
  {
    field: 'conteneur_number',
    headerName: 'Numero conteneur',
    width: 150,
    editable: true,
  },
  {
    field: 'conteneur_type',
    headerName: 'Type conteneur',
    width: 150,
    editable: true,
  },
  {
    field: 'reference',
    headerName: 'Réf. déclaration',
    width: 150,
    editable: true,
  },
  {
    field: 'registration_date',
    headerName: 'Date enrégistrement',
    width: 150,
    editable: true,
  },
  {
    field: 'liquidation_date',
    headerName: 'Date liquidation',
    width: 150,
    editable: true,
  },
  {
    field: 'payment_date',
    headerName: 'Date paiement',
    width: 150,
    editable: true,
  },
  {
    field: 'manifest',
    headerName: 'Manifeste',
    width: 150,
    editable: true,
  },
  {
    field: 'num_bl',
    headerName: 'Num. BL',
    width: 150,
    editable: true,
  },
  {
    field: 'transport_id',
    headerName: 'Identite transport',
    width: 150,
    editable: true,
  },
];
const inititalRows = [
  {
    id: 1,
    handler: 'TSOBE',
    conteneur_number: '01',
    reference: '0000A52DG',
    conteneur_type: 'AQ45',
    registration_date: '15/08/2022',
    liquidation_date: '19/08/2022',
    payment_date: '22/08/2022',
    manifest: 'M01A2012',
    num_bl: '520',
    transport_id: 'PM4518a',
  },
  {
    id: 2,
    handler: 'BT',
    conteneur_number: '02',
    conteneur_type: 'C18',
    reference: 'AQWJL500',
    registration_date: '12/07/2022',
    liquidation_date: '13/07/2022',
    payment_date: '24/07/2022',
    manifest: 'WCGDFS200',
    num_bl: '140',
    transport_id: 'PM4518a',
  },
  {
    id: 4,
    handler: 'TSOBE',
    conteneur_number: '04',
    conteneur_type: 'b15',
    reference: 'VFCHJSHG0',
    registration_date: '10/05/2022',
    liquidation_date: '11/05/2022',
    payment_date: '15/05/2022',
    manifest: 'FBVJHGB0',
    num_bl: '400',
    transport_id: 'VHHBBHJ0',
  },
  {
    id: 3,
    handler: 'BT',
    conteneur_number: '03',
    conteneur_type: 'V12',
    reference: 'khj5008',
    registration_date: '08/06/2022',
    liquidation_date: '09/06/2022',
    payment_date: '10/06/2022',
    manifest: 'bvjbjkh0',
    num_bl: '120',
    transport_id: 'QWVOJU0',
  },
];
const Home = () => {
  const [rows, setRows] = useState(inititalRows);

  const searchItem = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === '') {
      setRows(inititalRows);
    } else {
      setRows(
        inititalRows.filter((item) => {
          return (
            item.id.toString() === searchTerm ||
            item.handler?.toLowerCase().includes(searchTerm) ||
            item.conteneur_number?.toLowerCase().includes(searchTerm) ||
            item.conteneur_type?.toLowerCase().includes(searchTerm) ||
            item.reference?.toLowerCase().includes(searchTerm) ||
            item.registration_date?.toLowerCase().includes(searchTerm) ||
            item.liquidation_date?.toLowerCase().includes(searchTerm) ||
            item.payment_date?.toLowerCase().includes(searchTerm) ||
            item.manifest?.toLowerCase().includes(searchTerm) ||
            item.num_bl?.toLowerCase().includes(searchTerm) ||
            item.transport_id?.toLowerCase().includes(searchTerm)
          );
        })
      );
    }
  };
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center py-10"
      style={{ backgroundImage: `url(${handler})` }}
    >
      <div className="bg-white md:w-11/12">
        <form className="my-5 ml-auto mr-5 max-w-xl">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Rechercher par nom, numéro, etc..."
              onChange={searchItem}
            />
          </div>
        </form>

        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Box>
      </div>
    </div>
  );
};
export default Home;
