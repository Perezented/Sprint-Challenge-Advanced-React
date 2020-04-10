import React from 'react';

const Toggle = () => {
    return (
        <div>
            <input
                type="checkbox"
                className="react-switch-checkbox"
                id={`react-switch-new`}
            />
            <label htmlFor={`react-switch-new`}>
                <span />
            </label>
        </div>
    );
};
export default Toggle;
