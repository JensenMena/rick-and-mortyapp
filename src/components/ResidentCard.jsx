import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import './styles/ResidentCard.css'

const ResidentCard = ({ url }) => {
    const [resident, getResident, hasError, isLoading] = useFetch(url);

    useEffect(() => {
        getResident();
    }, []);

    return <article className="resident">
        {isLoading ? <h1>𝙇𝙤𝙖𝙙𝙞𝙣𝙜...⌛</h1> :
            <>
                <header className="resident_header">
                    <img className="resident_image" src={resident?.image} alt={resident?.name} />
                    <div className="resident_status-container flex-container">
                        <div className={`resident_status-circle ${resident?.status}`}></div>
                        <div className="resident_status">{resident?.status}</div>
                    </div>
                </header>
                <section className="resident_body">
                    <h3 className="resident_name">{resident?.name}</h3>
                    <hr className="resident_hr" />
                    <ul className="resident_list grid-container">
                        <li className="resident_item grid-container">
                            <span className="residente_label">Specie:</span>
                            <span className="resident_value">{resident?.species}</span>
                        </li>
                        <li className="resident_item grid-container">
                            <span className="residente_label">Origin:</span>
                            <span className="resident_value">{resident?.origin.name}</span>
                        </li>
                        <li className="resident_item grid-container">
                            <span className="residente_label">Episodes where appear:</span>
                            <span className="resident_value">{resident?.episode.length}</span>
                        </li>
                    </ul>
                </section>
            </>
        }
    </article>;
}

export default ResidentCard;
