import { PacmanLoader } from 'react-spinners';
import { IArticlesCollection } from '../types';

const ArticlesList: React.FC<IArticlesCollection> = ({ articles }) => {
  const renderNewsArticles = (): JSX.Element | JSX.Element[] => {
    if (articles.length < 1) {
      return (
        <div className="container">
          <h3 className="mt-5 text-center text-primary">
            Loading Your News...
          </h3>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'rotate(-90deg) translate(-50%, -50%)',
            }}
          >
            <PacmanLoader size={42} color="#007BFF" />
          </div>
        </div>
      );
    } else {
      return articles.map(
        ({ title, url, urlToImage, description, publishedAt }) => {
          return (
            <div key={url} className="container">
              <br />
              <div className="card text-center border border-primary">
                <div className="card-header">
                  <h3>{title}</h3>
                </div>
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <img
                          alt="Content Not Provided"
                          className="img-thumbnail img-responsive"
                          src={`${urlToImage}`}
                        />
                      </div>
                      <div className="col-sm-12 col-md-6 d-flex align-items-center justify-items-center">
                        <div>
                          <p
                            className="card-text m-3"
                            dangerouslySetInnerHTML={{ __html: description }}
                          ></p>
                          <a
                            href={url}
                            className="btn btn-primary btn-lg m-3"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Sound Interesting?
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-muted text-right">
                  Fresh In On: <span>{publishedAt.substr(0, 10)}</span>
                </div>
              </div>
              <br />
            </div>
          );
        }
      );
    }
  };

  return <div className="mb-5 mt-5">{renderNewsArticles()}</div>;
};

export default ArticlesList;
