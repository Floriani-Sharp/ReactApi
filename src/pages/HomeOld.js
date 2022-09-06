import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

import personWalk from '../images/person_walk.jpg';
import Login from './Login';

const MyInformations = ({
  show,
  loadInformations,
  changeType,
  listInformation,
}) => {
  return !show ? (
    <>
      <label htmlFor="type">
        <strong>Type de manutentionnaire &nbsp;</strong>
        <select name="type" id="type" onChange={changeType}>
          <option value="TSOBE">TSOBE</option>
          <option value="BT">BT</option>
        </select>
      </label>
      <button
        type="button"
        className="my-10 rounded-full bg-gradient-to-br from-purple-700 to-amber-700 py-2 px-4 font-bold 
text-white hover:opacity-70"
        onClick={loadInformations}
      >
        Afficher les informations
      </button>
    </>
  ) : (
    <div className="w-full">
      {listInformation.map((informations) => (
        <div className="flex justify-between" key={informations.label}>
          <span className="mb-2 block w-1/2 text-sm font-bold text-gray-700">
            {informations.label}
          </span>
          <span className="w-1/2">&nbsp;: {informations.value}</span>
        </div>
      ))}
    </div>
  );
};
const Home = () => {
  const [connected, setConnected] = useState(false);
  const [show, setShow] = useState(false);
  const [type, setType] = useState('TSOBE');
  const [listInformation, setListInformation] = useState([]);
  const loadInformations = () => {
    setShow(true);
    setListInformation([
      {
        label: 'Manutentionnaire',
        value: type,
      },
      {
        label: 'Numero conteneur',
        value: 'Numero',
      },
      {
        label: 'Type conteneur',
        value: 'Type',
      },
      {
        label: 'Réf. déclaration',
        value: 'Réf',
      },
      {
        label: 'Date enrégistrement',
        value: 'Enrégistrement',
      },
      {
        label: 'Date liquidation',
        value: 'Liquidation',
      },
      {
        label: 'Date paiement',
        value: 'Paiement',
      },
      {
        label: 'Manifeste',
        value: 'Manifeste',
      },
      {
        label: 'Num. BL',
        value: 'Num',
      },
      {
        label: 'Identite transport',
        value: 'Identite',
      },
    ]);
  };
  const changeType = (e) => {
    setType(e.target.value);
  };
  const logOut = () => {
    setShow(false);
    setType('TSOBE');
    setConnected(false);
  };
  const signIn = () => {
    setConnected(true);
  };
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-amber-700 py-10">
      {connected ? (
        <>
          {/* Login component */}
          <div className="flex shadow-md">
            {/*  Login form */}
            <div
              className="flex flex-col overflow-auto rounded-l-md bg-white py-10 px-6"
              style={{ width: '24rem', height: '32rem' }}
            >
              {/*  Heading */}
              <div>
                <h1 className="text-xl font-semibold">Bienvenue</h1>
                <small className="text-gray-400">
                  Bienvenue ! Cliquez pour afficher les informations
                </small>
              </div>
              {/*  Content */}
              <div className="flex flex-1 flex-col items-center justify-center">
                <MyInformations
                  show={show}
                  listInformation={listInformation}
                  loadInformations={() => loadInformations()}
                  changeType={(e) => changeType(e)}
                />
              </div>
            </div>

            {/*  Login banner */}
            <div
              className="flex flex-wrap content-center justify-center rounded-r-md"
              style={{ width: '24rem', height: '32rem' }}
            >
              <img
                className="h-full w-full rounded-r-md bg-cover bg-center bg-no-repeat"
                alt="Pour vous "
                title="L'application qu'il vous fallait"
                src={personWalk}
              />
            </div>
          </div>
          <button
            type="button"
            className="my-10 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            onClick={logOut}
          >
            DECONNEXION
          </button>
        </>
      ) : (
        <Login
          signIn={() => {
            // eslint-disable-next-line no-unused-expressions
            signIn();
          }}
        />
      )}
    </div>
  );
};

MyInformations.propTypes = {
  show: PropTypes.bool,
  listInformation: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  loadInformations: PropTypes.func,
  changeType: PropTypes.func,
};
export default Home;
