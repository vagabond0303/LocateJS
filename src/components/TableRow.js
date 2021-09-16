/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { ReactComponent as XCircle } from '../xCircle.svg';
import { ReactComponent as CheckCircle } from '../checkCircle.svg';

const TableRow = ({ item }) => {
  const [workerData, setWorkerData] = useState('');
  const [issues, setIssues] = useState(false);

  useEffect(() => {
    if (item.issues.length !== 0) {
      setIssues(true);
    }
    // checkWebWorker(item.key, setWorkerData);
  }, []);

  // useEffect(() => {
  //   if (workerData !== '') {
  //     setIssues(true);
  //   }
  // }, [workerData]);

  return (
    <tr>
      <td>{item.key}</td>
      <td>{item.value}</td>
      <td>
        {issues ? (
          <XCircle className="circleButton" />
        ) : (
          <CheckCircle className="circleButton" />
        )}
      </td>
    </tr>
  );
};

export default TableRow;
