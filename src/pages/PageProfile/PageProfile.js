import React from "react";
import useUserData from "../../hooks/useUserData";
import { Helmet } from "react-helmet";
import { Container } from "@material-ui/core";
import TitlePage from "../../components/TitlePage/TitlePage";
import Loader from "../../components/Loader/Loader";
import userPic from "../../assets/images/users/user2.svg";
import "./PageProfile.css";

const PageProfile = () => {
    const { userData, loading } = useUserData();
    const title = "Perfil"

    const mailName = userData ? userData.email : "anónima";
    if (loading) return <Loader />;
    return (
        <>
            <Helmet>
                <title>{`Freaks | ${title}`}</title>
                <meta name="description" content={title} />
            </Helmet>
            <Container>
                <TitlePage title="Perfil" />
                <div className="flex profile-container">
                    <div className="flex profile-user">
                        <img src={userPic} alt="" className="profile-avatar" />
                        <p className="profile-name">{mailName}</p>
                    </div>
                    <div className="profile-config">
                        <h3>Editar información del perfil</h3>
                        <p>Proximamente...</p>
                    </div>
                </div>
            </Container>
        </>
    );
};

/*

<div id="avatar-table">
                <table>
                    <thead>
                        <tr>
                            <td class="table-title" colspan="3">
                                color viborita:
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="" alt="" />
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>


*/

export default PageProfile;
