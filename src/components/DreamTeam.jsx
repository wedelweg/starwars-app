import React from "react";
import { friends } from "../utils/constants.jsx";

const DreamTeam = () => {
    return (
        <section className="float-end w-50">
            <h2 className="text-center text-warning mb-3">Dream Team</h2>
            <div className="row g-2">
                {friends.map((img, i) => (
                    <div className="col-4 text-center" key={i}>
                        <img
                            src={img}
                            alt={`friend${i + 1}`}
                            className="img-fluid rounded shadow-sm"
                            style={{ maxHeight: "150px", objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DreamTeam;
