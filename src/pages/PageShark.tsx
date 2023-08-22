import '../styles/shark.scss';

import { legendTable } from "../components/legend-table.js";
import { dataTable } from "../components/data-table.js";

import{ useState } from 'react';


export const PageShark = () => {

    const [length_m, set_length_m] = useState(3);
    const handle_length_m_change = (e: React.ChangeEvent) => {
        set_length_m(Number((e.target as HTMLInputElement).value));
    }

    const [length_cm, set_length_cm] = useState(50);
    const handle_length_cm_change = (e: React.ChangeEvent) => {
       set_length_cm(Number((e.target as HTMLInputElement).value));
    }

    const [start_at_m, set_start_at_m] = useState(3);
    const handle_start_at_m_change = (e: React.ChangeEvent) => {
       set_start_at_m(Number((e.target as HTMLInputElement).value));
    }

    const [start_at_cm, set_start_at_cm] = useState(50);
    const handle_start_at_cm_change = (e: React.ChangeEvent) => {
       set_start_at_cm(Number((e.target as HTMLInputElement).value));
    }

    const [end_at_m, set_end_at_m] = useState(4);
    const handle_end_at_m_change = (e: React.ChangeEvent) => {
        set_end_at_m(Number((e.target as HTMLInputElement).value));
    }

    const [end_at_cm, set_end_at_cm] = useState(50);
    const handle_end_at_cm_change = (e: React.ChangeEvent) => {
        set_end_at_cm(Number((e.target as HTMLInputElement).value));
    }

    const [step_size, set_step_size] = useState(50);
    const handle_step_size_change = (e: React.ChangeEvent) => {
        set_step_size(Number((e.target as HTMLInputElement).value));
    }

    const starter =(e: React.MouseEvent) => {

        e.preventDefault();

        /* make legend table */
        const _Table_1 = document.getElementById("legend-div");
        if (_Table_1) {
            const Table_1 = _Table_1;
            Table_1.innerHTML = legendTable();

        } else {
            console.log("Div for legend table does not exist!");
        }

        /* make data table */
        const _Table_2 = document.getElementById("data-div");
        if (_Table_2) {
            const Table_2 = _Table_2;
            Table_2.innerHTML = makeDataTable();

        } else {
            console.log("Div for data table does not exist!");
        }
    }


    return (
        
        <div className="page-pageShark">

            <header className="header-substitute" >
                <h6>Carcharodon carcharias</h6>
            </header>

            <div className="sharks">
                <div></div>
                <div className="sh-left"><img src="/images/shark-left.png" /></div>
                <div></div>
                <div className="sh-right"><img src="/images/shark-right.png" /></div>
                <div></div>
            </div>

            <div className="main-substitute">
                <div className="inputField">
                    <div className="firstSpan">Choose the size reference for allometric comparison:</div>

                    <div className="inputItems">
                        <form id="starter">

                            <span>length: &nbsp;&nbsp;&nbsp;</span>

                            {/* Length m */}
                            <input id="element_1" className="inputElements inputElement-1" type="number" min="1" max="7" step="1"
                                value={length_m} onChange={(e) => handle_length_m_change(e)}/>
                            <span> m &nbsp;</span>

                            {/* Length cm */}
                            <input id="element_2" className="inputElements" type="number" min="0" max="90" step="10"
                                value={length_cm} onChange={(e) => handle_length_cm_change(e)}/>
                            <span> cm</span>

                            <hr/><br />
                            <p className="firstSpan">Specify the size range:</p>
                            <span>start at: &nbsp;</span>

                            {/* Start at m */}
                            <input id="element_3" className="inputElements inputElement-3" type="number" min="1" max="7" step="1"
                                value={start_at_m} onChange={(e) => handle_start_at_m_change(e)}/>
                            <span> m &nbsp;</span>

                            {/* Start at cm */}
                            <input id="element_4" className="inputElements" type="number" min="0" max="90" step="10"
                                value={start_at_cm} onChange={(e) => handle_start_at_cm_change(e)} />
                            <span> cm</span>

                            {/* End at m */}
                            <span> end at: &nbsp;&nbsp;&nbsp;</span>
                            <input id="element_5" className="inputElements" type="number" min="1" max="20" step="1"
                                value={end_at_m} onChange={(e) => handle_end_at_m_change(e)} />
                            <span> m&nbsp;&nbsp;</span>
                                
                            {/* End at cm */}
                            <input id="element_6" className="inputElements" type="number" min="0" max="90" step="10"
                                value={end_at_cm} onChange={(e) => handle_end_at_cm_change(e)} />
                            <span> cm </span>

                            {/* Step size cm */}
                            <span>step size: </span>
                            <input id="element_7" className="inputElements inputElement-7" type="number" min="10" max="200" step="10"
                                value={step_size} onChange={(e) => handle_step_size_change(e)} />
                            <span> cm</span>

                            <hr/>

                            {/* Button */}
                            <div className="inputFieldBottom">
                                    <input id="element_8" className="button" type="submit" value="Calculate" onClick={(e) => starter(e)}/>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div id="container">

                <div id="legend-div"></div>

                <div id="data-div"></div>

            </div>
        </div>
    
    );
};


const makeDataTable = () => {

    /* =============== get values from input field =============== */

    let length_reference_meters = 0;
    const _element_1 = document.getElementById("element_1");
    if (_element_1) {
        const element_1 = _element_1 as HTMLInputElement;
        length_reference_meters = parseFloat(element_1.value);
    } else { console.log("Input element 1 does not exist!"); }

    let length_reference_centimeters = 0;
    const _element_2 = document.getElementById("element_2");
    if (_element_2) {
        const element_2 = _element_2 as HTMLInputElement;
        length_reference_centimeters = parseFloat(element_2.value);
    } else { console.log("Input element 2 does not exist!"); }

    let start_at_meters = 0;
    const _element_3 = document.getElementById("element_3");
    if (_element_3) {
        const element_3 = _element_3 as HTMLInputElement;
        start_at_meters = parseFloat(element_3.value);
    } else { console.log("Input element 3 does not exist!"); }

    let start_at_centimeters = 0;
    const _element_4 = document.getElementById("element_4");
    if (_element_4) {
        const element_4 = _element_4 as HTMLInputElement;
        start_at_centimeters = parseFloat(element_4.value);
    } else { console.log("Input element 4 does not exist!"); }

    let end_at_meters = 0;
    const _element_5 = document.getElementById("element_5");
    if (_element_5) {
        const element_5 = _element_5 as HTMLInputElement;
        end_at_meters = parseFloat(element_5.value);
    } else { console.log("Input element 5 does not exist!"); }

    let end_at_centimeters = 0;
    const _element_6 = document.getElementById("element_6");
    if (_element_6) {
        const element_6 = _element_6 as HTMLInputElement;
        end_at_centimeters = parseFloat(element_6.value);
    } else { console.log("Input element 6 does not exist!"); }

    let step_size_centimeters = 0;
    const _element_7 = document.getElementById("element_7");
    if (_element_7) {
        const element_7 = _element_7 as HTMLInputElement;
        step_size_centimeters = parseFloat(element_7.value);
    } else { console.log("Input element 7 does not exist!"); }

    /* =============== combine meters and centimeters =============== */
    const length_reference = length_reference_meters + length_reference_centimeters / 100;
    const start_at = start_at_meters + start_at_centimeters / 100;
    const end_at = end_at_meters + end_at_centimeters / 100;
    const step_size = start_at < end_at ? step_size_centimeters / 100 : -step_size_centimeters / 100;

    return dataTable(start_at, end_at, step_size, length_reference);
}