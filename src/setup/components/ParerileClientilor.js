import React from 'react';
import {FaCalendarAlt, FaUser} from "react-icons/all";
import {Testimonials} from "../subcomponents/testimonials";


const ParerileClientilor =()=> {
    return <>
        <section>
            <div className="container">

                <div className="row margin-50px-bottom">
                    <div className="col-12 mt-2">
                        <h4>Parerile clientilor</h4>
                        <p className="text-extra-medium-gray">Acesti clienti au ales serviciile FirmeCadastru.ro si au fost foarte multumiti. Este
                            suficient sa
                            accesati judetul aferent imobilului dvs, apoi alegeti din lista de autorizati cadastru
                            firma/PFA
                            cu care doriti sa colaborati.
                        </p>
                        <p className="font-italic">
                            Nota: O parte dintre parerile clientilor de mai jos fac referire la un modul de solicitare
                            oferta, care momentan este dezactivat.
                        </p>
                        <div className="border-bottom mb-3"></div>


                        <div className="container m-1">
                            <div className="row">

                                <div className="col-lg-12 col-md-12 col-xs-12">

                                    {Testimonials.map((item)=> {
                                        const {id, text, nume, data} = item;
                                        return <div className="card blockquote bg-light rounded">
                                            <p key={id} className="p-clienti before-clienti text-extra-medium-gray">{text}</p>
                                            <ul className="d-flex justify-content-between">
                                                <li className="font-size16">
                                                    <FaCalendarAlt />
                                                    {data}
                                                </li>
                                                <li className="font-size16">
                                                    <i><FaUser />{nume}.</i>
                                                </li>
                                            </ul>
                                        </div>
                                    })}



                                    {/*se termina map!*/}
                                </div>



                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
}
export default ParerileClientilor;