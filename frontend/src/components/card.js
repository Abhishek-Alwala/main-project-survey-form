import React, { useContext } from "react";
import { ThemeContext } from "../App";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Navigate, useNavigate } from "react-router-dom";

const Card = ({ details }) => {

    const navigate=useNavigate()
    const { themes,getData } = useContext(ThemeContext)

   const handleDelete = (id) =>{
    const token = sessionStorage.getItem("token")
    fetch(`https://nafeez-survey-form.onrender.com/createForm/delete?id=${id}` ,{
        method:"DELETE",
        headers:{Authorization:token}
    }).then((res) => res.json())
    .then((data)=>{getData()})

   }
    return (
        <div className="hii" >
            <div className="contain" >
                {
                    details? (
                        <div className={`header-con lists-div ${themes ? `lists-div-${themes}` : null}`} >
                    <h6>{details.name}</h6>
                    <h6>{details.description}</h6>
                    <h6>{details.typeOfSurvey}</h6>
                    <h6>{details.startDate}</h6>
                    <h6>{details.endDate}</h6>
                    <h6>
                        <EditIcon className="edit-icon"  onClick={()=>{
                            navigate("/surveyForm")
                        }}  />
                        <DeleteIcon className="delete-icon" onClick={()=>{handleDelete(details._id)}}/>
                    </h6>
                </div>

                    ): (
                        <h4>No contents Found</h4>
                    )
                }
                



            </div>
        </div>
    )
}

export default Card;





