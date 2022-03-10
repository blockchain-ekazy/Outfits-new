import React from 'react';


function MobileHeader() {
    return (
        <header className="mobile_header">
            <div className="container">
                <div className="mobile_header_flex">
                    <div className="mobile_header_inner">
                        <div className="mobile_header_logo">
                            <a href="/" className="heder_logo">
                                <img src="img/unnamed.gif" className='Imggggg' alt="logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="mobile_header_inner">
                        <ul>
                            {/* <li><a href="https://opensea.io/collection/bored-bunny--nft" className="btn">
                                <img
                                src="img/btn_img1.png" title="" alt=""></img>
                                Buy On Opensea</a></li> */}
                            <li><img src="img/mobile_menu.png" title="" alt=""/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MobileHeader;
