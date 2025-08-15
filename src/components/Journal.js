import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Journal = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await axios.get('/api/journal');
      setEntries(response.data);
    };
    fetchEntries();
  }, []);

  return (
    <div>
      <h1>Journal Entries</h1>
      <ul>
        {entries.map(entry => (
          <li key={entry._id}>{entry.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Journal;