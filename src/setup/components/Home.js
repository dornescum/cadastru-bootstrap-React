import React from "react";
import Judete from "../subcomponents/Home/judete";
import Popular from "../subcomponents/Home/Popular";
// import Dan from '../img/Dan.jpg'

const Home=()=>{
    const flowers =[
        { img:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            title:"Contact",
            link:"Contact",
            id:1
        },
         { img:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            title:"Localizare",
            link:"Localizare",
            id:2
        },
         { img:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
             title:"Localizare",
             link:"Localizare",
            id:3
        },
         { img:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
             title:"Localizare",
             link:"Localizare",
            id:4
        },
         { img:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
             title:"Localizare",
             link:"Localizare",
            id:5
        },
         { img:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
             title:"Localizare",
             link:"Localizare",
            id:6
        },

    ]
return <div className="main-wrapper">
    {/*imaginae centrala top*/}
    <section className="cover-background"  id="main-image">
        <div className="container position-relative h-100">
            <div className="header-text display-table h-100 z-index-1 width-100">
                <div className="display-table-cell vertical-align-middle text-center">
                    <h3 className="head-home">
                       Firme de cadastru <br/>
                       din toata tara
                    </h3>
                </div>


                <div
                    className="bg-white-opacity padding-10px-tb margin-40px-top xs-margin-30px-top padding-15px-lr xs-padding-20px-all border-radius-4">
                    <form method="post" action="#">
                        <div className="form-row align-items-center">

                            <div className="col-md-3 my-1">
                                <select className="form-control" id="exampleFormControlSelect1" defaultValue={'DEFAULT'}>
                                    <option value="DEFAULT">Alege Judet...</option>
                                    <option value="1">Alba</option>
                                    <option value="2">Arad</option>
                                    <option value="3">Arges</option>
                                    <option value="4">Bacau</option>
                                    <option value="5">Bihor</option>
                                    <option value="6">Bistrita-Nasaud</option>
                                    <option value="7">Botosani</option>
                                    <option value="8">Brasov</option>
                                    <option value="9">Braila</option>
                                    <option value="10">Buzau</option>
                                    <option value="11">Caras-Severin</option>
                                    <option value="12">Calarasi</option>
                                    <option value="13">Cluj</option>
                                    <option value="14">Constanta</option>
                                    <option value="15">Covasna</option>
                                    <option value="16">Dambovita</option>
                                    <option value="17">Dolj</option>
                                    <option value="18">Galati</option>
                                    <option value="19">Giurgiu</option>
                                    <option value="20">Gorj</option>
                                    <option value="21">Harghita</option>
                                    <option value="22">Hunedoara</option>
                                    <option value="23">Ialomita</option>
                                    <option value="24">Iasi</option>
                                    <option value="25">Ilfov</option>
                                    <option value="26">Mehedinti</option>
                                    <option value="27">Mures</option>
                                    <option value="28">Neamt</option>
                                    <option value="29">Olt</option>
                                    <option value="30">Prahova</option>
                                    <option value="31">Satu-Mare</option>
                                    <option value="32">Salaj</option>
                                    <option value="33">Sibiu</option>
                                    <option value="34">Suceava</option>
                                    <option value="35">Teleorman</option>
                                    <option value="36">Timis</option>
                                    <option value="37">Tulcea</option>
                                    <option value="38">Vaslui</option>
                                    <option value="39">Valcea</option>
                                    <option value="40">Vrancea</option>
                                </select>
                            </div>

                            <div className="col-md-3 my-1">
                                <select className="form-control" id="exampleFormControlSelect2" defaultValue={'DEFAULT'}>
                                    <option value="DEFAULT">Alege Oras...</option>
                                    <option value="1">Alba</option>
                                    <option value="2">Arad</option>
                                    <option value="3">Arges</option>
                                    <option value="4">Bacau</option>
                                    <option value="5">Bihor</option>
                                    <option value="6">Bistrita-Nasaud</option>
                                    <option value="7">Botosani</option>
                                    <option value="8">Brasov</option>
                                    <option value="9">Braila</option>
                                    <option value="10">Buzau</option>
                                    <option value="11">Caras-Severin</option>
                                    <option value="12">Calarasi</option>
                                    <option value="13">Cluj</option>
                                    <option value="14">Constanta</option>
                                    <option value="15">Covasna</option>
                                    <option value="16">Dambovita</option>
                                    <option value="17">Dolj</option>
                                    <option value="18">Galati</option>
                                    <option value="19">Giurgiu</option>
                                    <option value="20">Gorj</option>
                                    <option value="21">Harghita</option>
                                    <option value="22">Hunedoara</option>
                                    <option value="23">Ialomita</option>
                                    <option value="24">Iasi</option>
                                    <option value="25">Ilfov</option>
                                    <option value="26">Mehedinti</option>
                                    <option value="27">Mures</option>
                                    <option value="28">Neamt</option>
                                    <option value="29">Olt</option>
                                    <option value="30">Prahova</option>
                                    <option value="31">Satu-Mare</option>
                                    <option value="32">Salaj</option>
                                    <option value="33">Sibiu</option>
                                    <option value="34">Suceava</option>
                                    <option value="35">Teleorman</option>
                                    <option value="36">Timis</option>
                                    <option value="37">Tulcea</option>
                                    <option value="38">Vaslui</option>
                                    <option value="39">Valcea</option>
                                    <option value="40">Vrancea</option>
                                </select>
                            </div>
                            <div className="col-md-4 my-1">
                                <select className="form-control" id="exampleFormControlSelect3" defaultValue={'DEFAULT'}>
                                    <option value="DEFAULT">Tipuri de lucrari</option>
                                    <option value="1">cadastru și intabulare apartament
                                    </option>
                                    <option value="1">cadastru și intabulare teren intravilan
                                    </option>
                                    <option value="2">cadastru și intabulare teren extravilan
                                    </option>
                                    <option value="3">cadastru și intabulare teren cu construcție
                                    </option>
                                    <option value="4">actualizare / rectificare cadastru
                                    </option>
                                    <option value="5">dezmembrare / parcelare / lotizare teren intravilan</option>
                                    <option value="5">scoaterea din circuitul agricol
                                    </option>
                                    <option value="5">dezmembrare / parcelare / lotizare teren extravilan
                                    </option>
                                    <option value="5">alipire teren intravilan
                                    </option>
                                    <option value="5">alipire teren extravilan
                                    </option>
                                    <option value="5">aviz tehnic OCPI
                                    </option>
                                    <option value="5">alipire unitati individuale (apartamente)
                                    </option>
                                    <option value="5">plan topografic (de situație)
                                    </option>
                                    <option value="5">trasare / înțărușare teren / construcție
                                    </option>
                                    <option value="5">alt tip de lucrare
                                    </option>
                                </select>
                            </div>
                            <div className="col-md-2 my-1">
                                <button type="submit" className="butn btn-block" disabled>Cauta</button>
                            </div>
                        </div>
                    </form>
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
            <Judete title="Arad" number="43"/>
            <Judete title="Arad" number="1"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="12"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="42"/>
            <Judete title="Arad" number="32"/>
            <Judete title="Arad" number="11"/>
            <Judete title="Arad" number="82"/>
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
                {flowers.map((item)=>{
                    // const {img, title, link, id} = item;
                    return    (<Popular key={item.id} item={item}></Popular>)
                })}

            </div>
        </div>
    </section>
</div>
}
export default Home;