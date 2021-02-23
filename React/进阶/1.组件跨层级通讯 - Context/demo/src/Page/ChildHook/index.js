import React, { useContext } from "react";
import Context from '../../Context'

export default function () {

    const text = useContext(Context)

    return <div>
        <h2>hook child: { text }</h2>
    </div>
}