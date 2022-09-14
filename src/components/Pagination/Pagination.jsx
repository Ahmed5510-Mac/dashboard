import React, { useEffect,useState ,useRef } from 'react'
import './pagination.scss'
function Pagination( {page,setpage ,array}) {
const button=useRef()

  useEffect(()=>{
  
    toggleClass()
    },[array])
  const changePageNumber = (btn,e) => {
      console.log(e)

        return btn === "next" && array.length !== 0
          ? setpage(++page)
          // ? console.log(array.length)
          : btn === "Previous" && page > 1
          ? setpage(--page)
         :"";
      };
      const toggleClass=()=>{
        if( array.length===0)
        {
          button.current.classList.add("disabled");
        }else
        button.current.classList.remove("disabled");
        
      }
  return (
    
    <div className="parentPagination">
        <a title='Previous' className="page-link"   aria-label="Previous" onClick={() => changePageNumber("Previous")}>
          &laquo;
        </a>
        <a title='Next' className="page-link "  aria-label="Next" onClick={(e) => changePageNumber("next" ,e)} ref={button}>
       &raquo;
        </a>

   </div>
  )
}
export default Pagination
