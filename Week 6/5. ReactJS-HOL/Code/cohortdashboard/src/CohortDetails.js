import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const { name, trainer, status } = props;

  const statusStyle = {
    color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={statusStyle}>{name}</h3>
      <dl>
        <dt>Trainer</dt>
        <dd>{trainer}</dd>
        <dt>Status</dt>
        <dd>{status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
