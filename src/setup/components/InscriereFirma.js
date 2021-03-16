import React from "react";
import TopImage from "./Ui/TopImage";
import DateInscriereFirma from "../subcomponents/InscriereFirma/DateInscriereFirma";
import DateANCPI from "../subcomponents/InscriereFirma/DateANCPI";
import BottomInscriereFirma from "../subcomponents/InscriereFirma/BottomInscriereFirma";

const InscriereFirma=()=>{
    return (
        <div className="grey-color-font">
            <TopImage title="Inscriere Firma"/>
            <DateInscriereFirma />
            <DateANCPI />
            <BottomInscriereFirma/>
        </div>
    )
}
export default InscriereFirma;