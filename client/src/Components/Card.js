import React from 'react';

const Card = (props) => {
    props.players.map((value) => console.log(value));
    return (
        <div>
            {props.players.map((value) => {
                return (
                    <section>
                        <h2>{value.name}</h2>
                        <div>
                            <p>Country: {value.country}</p>
                            <p>Searches: {value.searches}</p>
                            <p>Number: {value.id}</p>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};
export default Card;
