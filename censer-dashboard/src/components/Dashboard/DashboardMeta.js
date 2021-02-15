import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import './styles.css';

const DashboardMeta = ({ meta, diashabiles }) => {
    return (
        <div className='dashboardMeta'>
            <div>METAS DE VENTAS</div>
            <div>Meta:
                <NumberFormat value={meta} displayType={'text'} thousandSeparator={true}  decimalScale={0} prefix={' G. '}  />
            </div>
            <div>Días Hábiles: {diashabiles}</div>
        </div>
    );
};

DashboardMeta.propTypes = {
    meta: PropTypes.number.isRequired,
    diashabiles: PropTypes.number.isRequired,
};

export default DashboardMeta;