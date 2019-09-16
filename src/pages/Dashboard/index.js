import React from 'react';
import api from '~/services/api';

export default function Dashboard() {
  api.get('categories');
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
