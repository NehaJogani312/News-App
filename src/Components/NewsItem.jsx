import React from 'react'

const NewsItem = (props) => {

        let { title, description, imageUrl, newsUrl, author, date ,source } = props;
        return (
            <div>
                <div className="card my-3">
                    <img src={!imageUrl ? "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/kgozwhsta9pqn2cr_1678747693.jpeg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span className="position-absolute top-0 translate-middle-y badge rounded-pill bg-danger" style={{right:'0' ,zIndex:'1'}}>
                            {source}
                        </span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem
