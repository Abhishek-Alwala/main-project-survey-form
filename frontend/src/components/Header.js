import React, { useState, useContext, useEffect } from "react";

import './styles/header.css'
import image from "./images/profile.svg"
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeContext } from "../App";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { themes, setThemes, first, setFirst } = useContext(ThemeContext)
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])
    const [url, setUrl] = useState("")
    const [profile, setProfile] = useState("")
    const navigate = useNavigate()

    const fetchtheme = async () => {
        await fetch("https://nafeez-survey-form.onrender.com/api/themes")
            .then((res) => res.json())
            .then((data) => {

                setData(data.data)

            })
    }

    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if (!token) {
            navigate("/")
        }
        setThemes("Default")
    }, [])
    useEffect(() => {
        fetchtheme()

    }, [first])
    const handleTheme = async () => {

        if (!open) {
            setOpen(true)
        }
        else {
            setOpen(false)
        }

        if (first < data.length - 1) {
            setFirst(first + 1)
        }
        else {
            setFirst(0)
        }


    }


    useEffect(() => {
        console.log(url)
        if (url) {
            const formData = new FormData();
            formData.append("image", url)
            fetch("https://nafeez-survey-form.onrender.com/profile", {
                method: "POST",
                body: formData
            })
            fetch("https://nafeez-survey-form.onrender.com/profile")
                .then(res => res.json())
                .then(data => { setProfile(data.image) })

            setUrl("")
        }
    }, [url])

    useEffect(() => {
        fetch("https://nafeez-survey-form.onrender.com/profile")
            .then(res => res.json())
            .then(data => { setProfile(data.image[0].image) })
        console.log(profile)
    }, [])

    const uploadProfile = (image) => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "Survey");

        console.log(image)
        fetch("https://api.cloudinary.com/v1_1/dml28rdbk/image/upload", {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url);
            })
    }

    return (
        <div id="container"
            className={`theme-btn trigger-button ${themes ? `theme-btn-${themes}` : null} dropdown-toggle `}

            onChange={setThemes('Default')}
        >
            <div className={`header-container ${themes ? `header-container-${themes}` : null}`}>
                <h3 className={`logo ${themes ? `logo-${themes}` : null}`}>LOGO</h3>
                <div className="profile" >
                    <div className="theme-div dropdown-wrapper " >

                    </div>
                    <input type="file" accept="image/*" name="upload profile" className="profile-input"
                        onChange={(e) => uploadProfile(e.target.files[0])} />
                    <img src={profile ? profile : image} alt="profile" className="profile-pic" />
                    <div className="logout-div" onClick={() => {
                        sessionStorage.removeItem('token')
                        navigate("/")
                    }}  >
                        <LogoutIcon />
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;