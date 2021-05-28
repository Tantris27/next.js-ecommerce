// import { css } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Products() {
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>
      <div>
        <h1>Products</h1>
      </div>
      <div>
        <ul>
          {guestList.map((guest) => {
            return (
              <div key={guest.id}>
                <div key={guest.id}>
                  <li key={guest.id}>
                    Guest {guest.id}: {'            '}
                    {guest.firstName.firstName}
                    {'            '}
                    {guest.lastName.lastName}
                    {'            '}
                    <br />
                    status:{guest.attending ? ' attending' : ' not coming'}
                    {'            '}
                    <br />
                    <button
                      onClick={async () => {
                        await fetch(`${baseUrl}${guest.id}`, {
                          method: 'DELETE',
                        });
                        // setListUpdate(!listUpdate);
                      }}
                    >
                      {' '}
                      Delete Guest{' '}
                    </button>
                    <button
                      onClick={async () => {
                        await fetch(`${baseUrl}${guest.id}`, {
                          method: 'PATCH',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({ attending: !guest.attending }),
                        });
                      }}
                    >
                      {' '}
                      Update Status{' '}
                    </button>
                  </li>{' '}
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}
