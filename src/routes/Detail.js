import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        console.log(location.state);
        //movie-datail 홈페이지를 타이핑치고 들어갔을때 home화면으로 돌아가게함
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            const {
                location: {
                    state: {
                        genres,
                        poster,
                        summary,
                        title,
                        year
                    } } } = this.props;
            return (
                <div className="Detail__container">
                    <div className="Detail__poster">
                        <img src={poster} alt={title} title={title} />
                    </div>
                    <div className="Detail__data">
                        <h3 className="Detail__title">{title}</h3>
                        <h5 className="Detail__year">{year}</h5>
                        <ul className="Detail__genres">
                            {genres.map((genres, index) => (
                                <li key={index} className="genres__li">
                                    {genres}
                                </li>
                            ))}
                        </ul>
                        <p className="Detail__sumarry">{summary}</p>
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
    }
}
export default Detail;