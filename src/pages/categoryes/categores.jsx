import React from 'react';
import Addcategory from "../../components/categoryes/addCategory/Addcategory"
import CatigoryesList from "../../components/categoryes/catigoryesList/catigoryesLisy.component"

function Categores() {
  return (
    <>
    <div>
      <Addcategory/>
    </div>
     <div>
        <CatigoryesList/>
    </div>
    </>
  )
}

export default Categores
