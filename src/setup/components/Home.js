import React from "react";
import Judete from "../subcomponents/Home/judete";
import Popular from "../subcomponents/Home/Popular";
import Dan from '../img/Dan.jpg'

const Home=()=>{
return <div className="main-wrapper">
    {/*imaginae centrala top*/}
    <section className="cover-background"  id="main-image">
        <div className="container position-relative h-100">
            <div className="header-text display-table h-100 z-index-1 width-100">
                <div className="display-table-cell vertical-align-middle text-center">
                    <h3 className="head-home">
                        Intra in legatura cu una dintre cele <br/>
                        firme de cadastru inscrise pe site
                    </h3>
                </div>
            </div>
        </div>
    </section>
    {/*judete*/}
    <section className="container">
        <div className="text-center margin-40px-bottom">
            <h3 className="margin-10px-bottom">Judete</h3>
            <p className="no-margin-bottom">Lorem Ipsum is simply dummy printing</p>
        </div>
        <div className="row">
            <Judete title="Alba" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arges" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>


        </div>
    </section>
    {/*popular */}
    <section className="no-padding-top">
        <div className="container">
            <div className="text-center margin-40px-bottom">
                <h3 className="margin-10px-bottom">Popular Things Near You</h3>
                <p className="no-margin-bottom">Lorem Ipsum is simply dummy printing</p>
            </div>
            <div className="row">
               <Popular  job="developer"/>
               <Popular />
               <Popular />
               <Popular />
               <Popular />
               <Popular />


            </div>
        </div>
    </section>
</div>
}
export default Home;