import { getFirstLetter, dateFormatter, isFavourite } from '../../utils/utilities'

const ListCard = (props) => {
    const { id, from, date, subject, short_description, action, bodyData } = props;

    const handleClick = (Id) => {
        action(Id);
    }
    return (
        <div className={bodyData ? 'list_card_container' : 'list_card_container active'} onClick={() => handleClick(id)}>
                <div className="list_card_left"><h1>{getFirstLetter(from.name)}</h1></div>
                <div className="list_card_right">
                    <div className="list_card_right_top">
                        <span>From: <strong>{`${from.name} <${from.email}>`}</strong></span>
                        <span>Subject: <strong>{subject}</strong></span>
                    </div>
                    <div className="list_card_right_bottom">
                        <p className="short_desc">{short_description}</p>
                        <div className="list_card_right_bottom_tray"><span>{dateFormatter(date)}</span>
                            {isFavourite(id) && <span className="fav">Favourite</span>}
                        </div>

                    </div>
                </div>

            </div>
    );
};

export default ListCard;