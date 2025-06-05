"use client";

import conf from '@/lib/config';
import React, { useEffect } from 'react';

const Page = () => {
  const runMigration = async () => {
    try {
        console.log(conf.apiBaseUri)
      const res = await fetch(`${conf.apiBaseUri}/migration`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log('Migration result:', data);
    } catch (error) {
      console.error('Migration error:', error);
    }
  };

  useEffect(() => {
    runMigration();
  }, []); // empty dependency array to run only on mount

  return <div>Migration Triggered</div>;
};

export default Page;
