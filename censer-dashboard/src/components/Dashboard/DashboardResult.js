import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import './styles.css';

const DashboardResult = ({ realizado, falta, facturacion_prom_falta }) => (
    <div className='dashboardResult'>
        <div>Realizado:
            <NumberFormat value={realizado} displayType={'text'} thousandSeparator={true}  decimalScale={0} prefix={' G. '}  />
        </div>
        <div>Falta
            <NumberFormat value={falta} displayType={'text'} thousandSeparator={true}  decimalScale={0} prefix={' G. '}  />
        </div>
        <div>Prom. Diario:
            <NumberFormat value={facturacion_prom_falta} displayType={'text'} thousandSeparator={true}  decimalScale={0} prefix={' G. '}  />
        </div>
    </div>
);

DashboardResult.propTypes = {
    resultados: PropTypes.shape({
        realizado: PropTypes.number.isRequired,
        falta: PropTypes.number.isRequired,
        facturacion_prom_falta: PropTypes.number.isRequired,
    }),
};

export default DashboardResult;