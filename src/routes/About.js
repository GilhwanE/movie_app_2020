import React from 'react';
import "./About.css";
function About() {
    return (
        <div className="about__container">
            <h2 className="about__header">About me</h2>
            <div className="about__contact">
                <a href="https://github.com/Giljape">
                    <i class="fab fa-github" aria-hidden='true'></i></a>
                <a href="https://www.instagram.com/hwan__q/">
                    <i class="fab fa-instagram-square" aria-hidden='true'></i></a>
            </div>
            <div className="about__info">
                <span>Click this icons</span>
                <span> then, you can go to My SNS Page</span>
            </div>
            <div className="about__desc">
                <span>리액트로 만들어본 첫번째 페이지입니다.</span>
                <span>컴포넌트를 생성하고 사용하는 방법,</span>
                <span>라우터와 라우트를 통한 페이지 이동 방법을 공부했습니다.</span>
            </div>
        </div >
    );
}

export default About;