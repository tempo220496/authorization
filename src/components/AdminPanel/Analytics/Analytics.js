import React from 'react';
import {motion} from "framer-motion";

const Analytics = () => {
    return (
        <div>
            <motion.h1
                initial={{opacity:0,scale:1}}
                animate={{opacity:1,scale:1.2,transition:{delay:.5}}}
                style={{
                    fontSize:'2rem',
                    color: 'green',
                    textAlign: 'center'
                }}
            >Analytics here</motion.h1>
        </div>
    );
}

export default Analytics;
