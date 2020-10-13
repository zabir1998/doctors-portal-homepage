import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/>
                Starts Here</h1>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, obcaecati ea cumque nemo quod cum exercitationem porro, nihil odio et rerum placeat sunt minus laborum qui saepe deserunt provident beatae sint, dolore temporibus consequatur sequi! Inventore, mollitia cupiditate unde fugit, ad facilis laudantium dolorum sunt, fugiat reprehenderit nam aliquam? Cumque.
                </p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;