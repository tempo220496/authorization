import React from 'react';
import { Link } from 'react-router-dom';

const Frontend = () => {
    return (
        <div>
            Frontend here
            <div>
                <Link to="/dashboard" >Go to admin</Link>
            </div>
        </div>
    );
}

export default Frontend;
