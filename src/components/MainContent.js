import React from "react";
import What from "./What";

function MainContent() {
    return (
        <div>
            <What />
            <h2>Don't forget to buy:</h2>
            <p>
                <input type="checkbox" id="milk" />
                <label for="milk">Milk</label>
            </p>
            <p>
                <input type="checkbox" id="cocoa" />
                <label for="cocoa" >Cocoa</label>
            </p>
            <p>
                <input type="checkbox" id="gas" />
                <label for="gas">Gas</label>
            </p>
        </div>
    )
}

export default MainContent;

  