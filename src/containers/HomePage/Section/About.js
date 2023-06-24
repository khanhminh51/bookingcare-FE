import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>Manchester United đánh bại nhà vô địch C1</div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/OBOBkNQx1Jc"
                            title="MAN UNITED - MAN CITY | GREALISH RẤT HAY NHƯNG BRUNO VÀ RASHFORD QUÁ XUẤT SẮC | NGOẠI HẠNG ANH 22/23"
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                            Mặc dù để thủng lưới trước nhưng bằng sức mạnh nội tại của mình, Manchester United đã xuất 
                            sắc đánh bại Man City trên sân nhà của mình.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
