import '../src/styles/shark.scss';

import { legendTable } from "../components/legend-table.js";
import { dataTable } from "../components/data-table.js";

export const PageShark = () => {
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

                        <span className="firstSpan">Choose the size reference for allometric comparison:</span>

                        <div className="inputItems">
                            <form id="starter" action="" method="">

                                <label>
                                    <span>length: &nbsp&nbsp</span>
                                    <input id="element_1" className="inputElements inputElement-1" name="length_ref_in_meters"
                                        type="number" min="1" max="7" step="1" value="3" />
                                    <span>m&nbsp;</span>
                                </label>
                            
                                <label>
                                    <input id="element_2" className="inputElements" name="length_ref_in_centimeters" type="number"
                                        min="0" max="90" step="10" value="50" />
                                    <span>cm</span>
                                </label>

                                <hr/>
                         
                                <p /* style="color: #1515FF; font-size: 0.85rem; margin-top: 1rem;" */>Specify the size range:</p>

                                <label>
                                    <span>start at:&nbsp;</span>
                                    <input id="element_3" className="inputElements inputElement-3" name="start_at_in_meters"
                                        type="number" min="1" max="7" step="1" value="3" />
                                    <span>m&nbsp;</span>
                                </label>

                                <label>
                                    <input id="element_4" className="inputElements" name="start_in_centimeters"
                            /* style="width: 4rem; text-align: right;" */ type="number" min="0" max="90" step="10" value="50" />
                                    <span>cm</span>
                                </label>

                                <label>
                                    <span>end at: &nbsp;&nbsp;</span>
                                    <input id="element_5" className="inputElements" name="end_at_in_meters"
                           /* style="width: 4rem; text-align: right;" */ type="number" min="1" max="20" step="1" value="4" />
                                    <span>m&nbsp;</span>
                                </label>
                                
                                <label>
                                    <input id="element_6" className="inputElements" name="end_at_in_centimeters"
                          /* style="width: 4rem; text-align: right;" */ type="number" min="0" max="90" step="10" value="50" />
                                    <span>cm</span>
                                </label>

                                <label>
                                    <span>step size:</span>
                                    <input id="element_7" className="inputElements inputElement-7" name="step_size_in_centimeters"
                                        type="number" min="10" max="200" step="10" value="50" />
                                    <span>cm</span>
                                </label>

                                <hr/>

                                <div className="inputFieldBottom">
                                    <label>
                                        <input id="element_8" className="button" type="submit" value="Calculate" name="Calculate" />
                                    </label>
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

export const attachEvents = () => {

    const _Starter = document.getElementById("starter");
    if (_Starter) {

        const Starter = _Starter;

        Starter.addEventListener("submit", (e) => {
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
        })

    } else {
        console.log("Starter is null!");
    }
}


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