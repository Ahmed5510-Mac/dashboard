import "./Single.scss";
import Chart from "./../chart/Chart";
import List from "./../table/Table";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

const Singleuser = () => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <div className="singleuser">
      {/* ==============top =================   */}
      <div className="top">
        {/* ---left --- */}
        <div className="left">
          <div
            className="Edite"
            onClick={() => {
              setIsEditable(!isEditable);
            }}
          >
            {isEditable ? "save" : "Edite"}
          </div>
          <h1 className="title">information</h1>
          <div className="items">
            <img
              src="https://mrkzgulfup.com/uploads/165830722270871.jpg"
              alt=""
              className="itemImg"
            />
            <div className="details">
              <div className="itemTitle">
                <h1> Ahmed Darwish</h1>
                <h2>(Doctor)</h2>
              </div>
              <div className="infodetails">
                <div className="infoleft">
                  <fieldset>
                    <legend>personal</legend>
                    {/* ---------------- */}
                    <div className="detailsItem">
                      <span className="itemKey">Phone Number: </span>

                      <input
                        className="itemvalue"
                        value="01011773739"
                        disabled={!isEditable}
                      />
                    </div>
                    {/* ---------------- */}
                    <div className="detailsItem">
                      <span className="itemKey">WhatsApp Number: </span>
                      <input
                        className="itemvalue"
                        value="01011773739"
                        disabled={!isEditable}
                      />
                    </div>
                    {/* ---------------- */}
                    <div className="detailsItem">
                      <span className="itemKey">Account Status: </span>
                      <input
                        className="itemvalue approved"
                        value="approved"
                        disabled={!isEditable}
                      />
                    </div>
                    {/* ---------------- */}
                    <div className="detailsItem">
                      <span className="itemKey">Clinic Name: </span>
                      <input
                        className="itemvalue approved"
                        value="Macbook clinic"
                        disabled={!isEditable}
                      />
                    </div>
                  </fieldset>
                </div>
                {/* ------------------------right info---------------------------- */}
                <div className="inforight">
                  <fieldset>
                    <legend>place information</legend>

                    {/* ---------------- */}
                    <div className="detailsItem">
                      <span className="itemKey">Governorate: </span>
                      <input
                        className="itemvalue"
                        value="cairo"
                        disabled={!isEditable}
                      />
                    </div>
                    {/* ---------------- */}
                    <div className="detailsItem">
                      <span className="itemKey">City: </span>
                      <input
                        className="itemvalue"
                        value="Giza"
                        disabled={!isEditable}
                      />
                    </div>
                    {/* ---------------- */}
                    <div className="detailsItem">
                      <span className="itemKey">Street: </span>
                      <input
                        className="itemvalue"
                        value="4 ahmed street"
                        disabled={!isEditable}
                      />
                    </div>
                    {/* ---------------- */}
                    <div className="detailsItem">
                      <span className="itemKey">Building: </span>
                      <input
                        className="itemvalue"
                        value="12"
                        disabled={!isEditable}
                      />
                    </div>
                    {/* ---------------- */}
                    <div className="detailsItem">
                      <span className="itemKey">Details: </span>
                      <input
                        className="itemvalue"
                        value="eng.ahmed.darwish6@gmail.com"
                        disabled={!isEditable}
                      />
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---right --- */}
        <div className="right">
          <Chart spect={4 / 1} title="User spending (last 6 months)" />
        </div>
      </div>
      {/* ==============bottom =================   */}

      <div className="bottom">
        <List />
      </div>
    </div>
  );
};

export default Singleuser;
