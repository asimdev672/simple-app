import React from 'react'

const Value=(props)=>{

 const deletvalue=()=>{
     props.deletItem(props.id)
 }

    return(
    <>
     <table>
           
            <tr>
              <td>{props.title}</td>
              <td className="second">{props.age}</td>
              <td className="third-data">
                {/* <button className="btn add-btn">Add</button> */}
                <button className="btn delete-btn" onClick={deletvalue}>Delete</button>
                {/* <button className="btn update-btn">Update</button> */}
              </td>
            </tr>
          </table>

    </>
    );
}
export default Value;