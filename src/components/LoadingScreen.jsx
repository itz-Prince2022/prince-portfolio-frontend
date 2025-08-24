
import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="premium-loading-container">
            <div className="logo-pulse-container">
                <div className="logo-placeholder">
                    <span className="logo-initials loding-logo-initial">PP</span>
                </div>
            </div>
            <p className="loading-message">Loading Portfolio...</p>
        </div>
    );
};

export default LoadingScreen;


// import React from 'react';

// const LoadingScreen = () => {
//     return (
//         <div className="premium-loading-container">
//             <div className="premium-loader"></div>
//             <p>Loading your portfolio...</p>
//         </div>
//     );
// };

// export default LoadingScreen;