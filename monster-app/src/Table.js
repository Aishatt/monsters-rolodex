import React, {Component} from "react"

//simpleTableComponent
const TableHead= () => {
  return(
    <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>country</th>
          </tr>
        </thead>
  )
}

const TableBody= ()=> {
  return(
    <tbody>
  <tr>
    <td>Charlie</td>
    <td>Janitor</td>
    <td>Nigeria</td>
  </tr>
  <tr>
    <td>Mac</td>
    <td>Bouncer</td>
    <td>United Kindom</td>
  </tr>
  <tr>
    <td>Khan</td>
    <td>Aspiring actress</td>
    <td>India</td>
  </tr>
  <tr>
    <td>Bank</td>
    <td>Bartender</td>
    <td>Korea</td>
  </tr>
  </tbody>
  ) 
}

//Class Componenet
class Table extends Component{
  render(){
    return(
        <table>
        <TableHead />
        <TableBody />
       
          </table>
    )
  }
}
export default Table