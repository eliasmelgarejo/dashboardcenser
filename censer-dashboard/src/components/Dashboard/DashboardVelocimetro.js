import React from 'react';
import NumberFormat from 'react-number-format';
import './styles.css';

const DashboardVelocimetro = ({ cumplimiento }) => (
    <div className='dashboardVelocimetro'>
        <p>Cumplimiento:
            <NumberFormat value={cumplimiento} displayType={'text'} thousandSeparator={false} decimalSeparator={','} decimalScale={2} suffix={'%'}  />
        </p>
    </div>
);

export default DashboardVelocimetro;