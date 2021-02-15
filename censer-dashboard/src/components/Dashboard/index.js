import React, { Component } from "react";
import DashboardMeta from './DashboardMeta';
import DashboardResult from './DashboardResult'
import DashboardVelocimetro from './DashboardVelocimetro'
import './styles.css';
import {error} from "next/dist/build/output/log";

const url_base_sti = "http://localhost:3800/api";

class DashBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            meta: null,
            diashabiles:null,
            realizado:null,
            falta:null,
            facturacion_prom_falta:null,
            cumplimiento:null,
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {

        this.setState({ isLoading:true });

        var dashboar_uri = '/metaventaglobal';

        fetch(url_base_sti + dashboar_uri)
            .then(response => response.json())
            .then(result => {
                console.log('result.META',result.META);
                this.setState({
                    meta:result.META,
                    diashabiles:result.DIAS_HABILES,
                    realizado:result.REALIZADO,
                    falta:result.FALTA,
                    facturacion_prom_falta:result.PROMEDIO_FALTANTE,
                    cumplimiento: (result.REALIZADO/result.META)*100,
                    isLoading:false,
                });
            })
            .catch(error => {
                this.setState({error, isLoading: false});
            });

    }

    render() {
        const { meta,diashabiles,realizado,falta,facturacion_prom_falta,error,isLoading } = this.state;
        if (this.state.error) {
            return <p>{error.message}</p>
        }

        if (isLoading) {
            return  <p>Loading...</p>
        }

        console.log('Render...');
        console.log('Render this.state.realizado: ' + realizado);
        console.log('Render this.state.falta: ' + falta);
        console.log('Render this.state.facturacion_prom_falta: ' + facturacion_prom_falta);
        return (
            <div className='dashBoardContent'>
                <DashboardMeta meta={this.state.meta} diashabiles={this.state.diashabiles} ></DashboardMeta>
                <DashboardResult realizado={this.state.realizado} falta={this.state.falta} facturacion_prom_falta={this.state.facturacion_prom_falta} ></DashboardResult>
                <DashboardVelocimetro cumplimiento={this.state.cumplimiento} ></DashboardVelocimetro>
            </div>
        );
    }
}

export default DashBoard;

/*
META,DIAS_HABILES,REALIZADO,FALTA,DIAS_CIERRE,PROMEDIO_FALTANTE,PORC_LOGRADO,INGRESO_OT,INGRESO_PROMEDIO,OT_FACT_PROM,PROYECCION,
*/